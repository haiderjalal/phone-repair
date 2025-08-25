'use client'
import { useState, useEffect, useRef } from 'react'
import { io } from 'socket.io-client'
import styles from './AdminChat.module.css'

export default function AdminChatPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [activeChats, setActiveChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [adminInfo] = useState({
    userId: 'admin-' + Date.now(),
    userName: 'Support Agent',
    userEmail: 'support@lambtonphonerepairs.com',
    isAdmin: true
  })
  
  const socketRef = useRef(null)
  const messagesEndRef = useRef(null)
  const typingTimeoutRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io({
      transports: ['websocket', 'polling']
    })

    socketRef.current.on('connect', () => {
      setIsConnected(true)
      socketRef.current.emit('join-admin', adminInfo)
    })

    socketRef.current.on('disconnect', () => {
      setIsConnected(false)
    })

    socketRef.current.on('active-chats', (chats) => {
      setActiveChats(chats)
    })

    socketRef.current.on('chat-history', (history) => {
      setMessages(history)
    })

    socketRef.current.on('new-message', (message) => {
      setMessages(prev => [...prev, message])
    })

    socketRef.current.on('user-typing', (data) => {
      if (!data.isAdmin) {
        setIsTyping(data.isTyping)
      }
    })

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
      }
    }
  }, [])

  const selectChat = (chatId) => {
    setSelectedChat(chatId)
    if (socketRef.current && isConnected) {
      socketRef.current.emit('join-chat-admin', { chatId })
    }
  }

  const sendMessage = () => {
    if (!newMessage.trim() || !socketRef.current || !isConnected || !selectedChat) return

    socketRef.current.emit('admin-reply', {
      chatId: selectedChat,
      text: newMessage.trim()
    })

    setNewMessage('')
  }

  const handleTyping = (isTypingNow) => {
    if (!socketRef.current || !isConnected || !selectedChat) return

    socketRef.current.emit('admin-typing', { 
      chatId: selectedChat,
      isTyping: isTypingNow 
    })
  }

  const handleInputChange = (e) => {
    setNewMessage(e.target.value)
    
    // Handle typing indicator
    handleTyping(true)
    
    clearTimeout(typingTimeoutRef.current)
    typingTimeoutRef.current = setTimeout(() => {
      handleTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className={styles.adminContainer}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Customer Support Chat</h1>
        <div className={styles.connectionStatus}>
          {isConnected ? (
            <><i className="fas fa-circle text-success"></i> Connected</>
          ) : (
            <><i className="fas fa-circle text-danger"></i> Disconnected</>
          )}
        </div>
      </div>

      <div className={styles.chatInterface}>
        {/* Chat List Sidebar */}
        <div className={styles.chatList}>
          <div className={styles.chatListHeader}>
            <h3>Active Chats ({activeChats.length})</h3>
          </div>
          
          <div className={styles.chatItems}>
            {activeChats.length === 0 ? (
              <div className={styles.noChatMessage}>
                <i className="fas fa-comments"></i>
                <p>No active chats</p>
                <small>Waiting for customers...</small>
              </div>
            ) : (
              activeChats.map((chat) => (
                <div
                  key={chat.chatId}
                  className={`${styles.chatItem} ${
                    selectedChat === chat.chatId ? styles.activeChatItem : ''
                  }`}
                  onClick={() => selectChat(chat.chatId)}
                >
                  <div className={styles.chatItemHeader}>
                    <div className={styles.customerInfo}>
                      <div className={styles.customerName}>{chat.userName}</div>
                      <div className={styles.customerEmail}>{chat.userEmail}</div>
                    </div>
                    <div className={styles.chatTime}>
                      {formatDate(chat.lastActivity)}
                    </div>
                  </div>
                  
                  {chat.lastMessage && (
                    <div className={styles.lastMessage}>
                      {chat.lastMessage.length > 50 
                        ? chat.lastMessage.substring(0, 50) + '...' 
                        : chat.lastMessage
                      }
                    </div>
                  )}
                  
                  {chat.unreadCount > 0 && (
                    <div className={styles.unreadBadge}>
                      {chat.unreadCount}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className={styles.chatArea}>
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className={styles.chatHeader}>
                <div className={styles.customerDetails}>
                  {activeChats.find(chat => chat.chatId === selectedChat) && (
                    <>
                      <h4>{activeChats.find(chat => chat.chatId === selectedChat).userName}</h4>
                      <span>{activeChats.find(chat => chat.chatId === selectedChat).userEmail}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Messages */}
              <div className={styles.messagesArea}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`${styles.message} ${
                      message.isAdmin ? styles.adminMessage : styles.customerMessage
                    }`}
                  >
                    <div className={styles.messageContent}>
                      <div className={styles.messageText}>{message.text}</div>
                      <div className={styles.messageTime}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className={styles.typingIndicator}>
                    <div className={styles.typingDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span>Customer is typing...</span>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className={styles.messageInput}>
                <div className={styles.inputContainer}>
                  <textarea
                    value={newMessage}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your reply..."
                    rows="2"
                    disabled={!isConnected}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!newMessage.trim() || !isConnected}
                    className={styles.sendBtn}
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.noChatSelected}>
              <i className="fas fa-comments"></i>
              <h3>Select a chat to start</h3>
              <p>Choose a customer from the sidebar to begin the conversation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}