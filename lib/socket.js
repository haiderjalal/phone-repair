import { Server } from 'socket.io'
import { v4 as uuidv4 } from 'uuid'

let io

// In-memory storage for messages (in production, use a database)
const chatRooms = new Map()
const activeUsers = new Map()

export const initSocket = (server) => {
  if (!io) {
    io = new Server(server, {
      cors: {
        origin: process.env.NODE_ENV === 'production' 
          ? ['https://phone-repair-rho.vercel.app'] 
          : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
        methods: ['GET', 'POST']
      }
    })

    io.on('connection', (socket) => {
      console.log('User connected:', socket.id)

      // Handle user joining a chat room
      socket.on('join-chat', (userData) => {
        const { userId, userName, userEmail, isAdmin = false } = userData
        
        // Create or get existing chat room
        const roomId = isAdmin ? 'admin-room' : `user-${userId}`
        socket.join(roomId)
        
        // Store user info
        activeUsers.set(socket.id, {
          userId,
          userName,
          userEmail,
          roomId,
          isAdmin,
          socketId: socket.id
        })

        // Initialize chat room if it doesn't exist
        if (!chatRooms.has(roomId)) {
          chatRooms.set(roomId, {
            messages: [],
            participants: new Set(),
            createdAt: new Date()
          })
        }

        // Add user to room participants
        const room = chatRooms.get(roomId)
        room.participants.add(userId)

        // Send chat history to user
        socket.emit('chat-history', room.messages)

        // Notify admins of new user (if not admin)
        if (!isAdmin) {
          socket.to('admin-room').emit('user-joined', {
            userId,
            userName,
            userEmail,
            roomId,
            timestamp: new Date()
          })
        }

        console.log(`User ${userName} joined room: ${roomId}`)
      })

      // Handle sending messages
      socket.on('send-message', (messageData) => {
        const user = activeUsers.get(socket.id)
        if (!user) return

        const message = {
          id: uuidv4(),
          text: messageData.text,
          senderId: user.userId,
          senderName: user.userName,
          isAdmin: user.isAdmin,
          timestamp: new Date(),
          roomId: user.roomId
        }

        // Store message in room
        const room = chatRooms.get(user.roomId)
        if (room) {
          room.messages.push(message)
          
          // Limit message history to last 100 messages
          if (room.messages.length > 100) {
            room.messages = room.messages.slice(-100)
          }
        }

        // Send message to all users in the room
        io.to(user.roomId).emit('new-message', message)

        // If user message, also send to admin room
        if (!user.isAdmin) {
          io.to('admin-room').emit('new-message', message)
        }

        console.log(`Message sent in room ${user.roomId}:`, message.text)
      })

      // Handle admin responding to specific user
      socket.on('admin-reply', (replyData) => {
        const admin = activeUsers.get(socket.id)
        if (!admin || !admin.isAdmin) return

        const { targetUserId, text } = replyData
        const targetRoomId = `user-${targetUserId}`

        const message = {
          id: uuidv4(),
          text,
          senderId: admin.userId,
          senderName: admin.userName,
          isAdmin: true,
          timestamp: new Date(),
          roomId: targetRoomId
        }

        // Store message in target user's room
        const room = chatRooms.get(targetRoomId)
        if (room) {
          room.messages.push(message)
          
          if (room.messages.length > 100) {
            room.messages = room.messages.slice(-100)
          }
        }

        // Send message to target user's room
        io.to(targetRoomId).emit('new-message', message)
        
        // Also send to admin room for confirmation
        io.to('admin-room').emit('new-message', message)

        console.log(`Admin replied to user ${targetUserId}:`, text)
      })

      // Handle typing indicators
      socket.on('typing', (data) => {
        const user = activeUsers.get(socket.id)
        if (!user) return

        socket.to(user.roomId).emit('user-typing', {
          userId: user.userId,
          userName: user.userName,
          isTyping: data.isTyping
        })
      })

      // Handle user disconnect
      socket.on('disconnect', () => {
        const user = activeUsers.get(socket.id)
        if (user) {
          // Remove from room participants
          const room = chatRooms.get(user.roomId)
          if (room) {
            room.participants.delete(user.userId)
          }

          // Notify admins of user leaving (if not admin)
          if (!user.isAdmin) {
            socket.to('admin-room').emit('user-left', {
              userId: user.userId,
              userName: user.userName,
              timestamp: new Date()
            })
          }

          activeUsers.delete(socket.id)
          console.log(`User ${user.userName} disconnected`)
        }
      })
    })
  }

  return io
}

export const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized')
  }
  return io
}

// Helper functions for chat management
export const getChatRooms = () => chatRooms
export const getActiveUsers = () => activeUsers
export const getChatHistory = (roomId) => {
  const room = chatRooms.get(roomId)
  return room ? room.messages : []
}