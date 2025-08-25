const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { Server } = require('socket.io')
const { v4: uuidv4 } = require('uuid')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
let port = process.env.PORT || 3000

// Function to find available port
const findAvailablePort = async (startPort) => {
  const net = require('net')
  
  const isPortAvailable = (port) => {
    return new Promise((resolve) => {
      const server = net.createServer()
      server.listen(port, () => {
        server.once('close', () => resolve(true))
        server.close()
      })
      server.on('error', () => resolve(false))
    })
  }
  
  let currentPort = startPort
  while (!(await isPortAvailable(currentPort))) {
    currentPort++
  }
  return currentPort
}

// Initialize Next.js app
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

// In-memory storage for messages (in production, use a database)
const chatRooms = new Map()
const activeUsers = new Map()

// Helper function to get active chats for admin
const getActiveChats = () => {
  const chats = []
  
  for (const [roomId, room] of chatRooms.entries()) {
    if (roomId.startsWith('user-') && room.participants.size > 0) {
      const userId = roomId.replace('user-', '')
      
      // Find user info from active users
      let userInfo = null
      for (const [socketId, user] of activeUsers.entries()) {
        if (user.userId === userId && !user.isAdmin) {
          userInfo = user
          break
        }
      }
      
      if (userInfo) {
        const lastMessage = room.messages.length > 0 
          ? room.messages[room.messages.length - 1].text 
          : ''
        
        chats.push({
          chatId: userId,
          userName: userInfo.userName,
          userEmail: userInfo.userEmail,
          lastMessage,
          lastActivity: room.messages.length > 0 
            ? room.messages[room.messages.length - 1].timestamp 
            : room.createdAt,
          unreadCount: 0 // Could be enhanced to track actual unread count
        })
      }
    }
  }
  
  return chats.sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity))
}

app.prepare().then(async () => {
  // Find available port
  port = await findAvailablePort(port)
  const httpServer = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })

  // Initialize Socket.IO
  const io = new Server(httpServer, {
    cors: {
      origin: dev 
        ? ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002']
        : ['https://phone-repair-rho.vercel.app'],
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
      
      // If admin joins, send active chats list
      if (isAdmin) {
        const activeChats = getActiveChats()
        socket.emit('active-chats', activeChats)
        socket.broadcast.emit('admin-online', true)
      }

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

    // Handle admin joining specific chat
    socket.on('join-chat-admin', (data) => {
      const admin = activeUsers.get(socket.id)
      if (!admin || !admin.isAdmin) return

      const { chatId } = data
      const targetRoomId = `user-${chatId}`
      
      // Join the specific user's room
      socket.join(targetRoomId)
      
      // Send chat history for this specific room
      const room = chatRooms.get(targetRoomId)
      if (room) {
        socket.emit('chat-history', room.messages)
      }
    })

    // Handle admin typing in specific chat
    socket.on('admin-typing', (data) => {
      const admin = activeUsers.get(socket.id)
      if (!admin || !admin.isAdmin) return

      const { chatId, isTyping } = data
      const targetRoomId = `user-${chatId}`
      
      socket.to(targetRoomId).emit('user-typing', {
        userId: admin.userId,
        userName: admin.userName,
        isTyping,
        isAdmin: true
      })
    })

    // Handle admin reply to specific chat
    socket.on('admin-reply', (replyData) => {
      const admin = activeUsers.get(socket.id)
      if (!admin || !admin.isAdmin) return

      const { chatId, text } = replyData
      const targetRoomId = `user-${chatId}`

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

      // Send message to target user's room and admin
      io.to(targetRoomId).emit('new-message', message)
      socket.emit('new-message', message)

      console.log(`Admin replied to chat ${chatId}:`, text)
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

  httpServer
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})