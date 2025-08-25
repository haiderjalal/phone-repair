'use client'
import { useState, useEffect, useRef } from 'react'
import { io } from 'socket.io-client'
import { v4 as uuidv4 } from 'uuid'
import styles from './ChatWidget.module.css'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [userInfo, setUserInfo] = useState(null)
  const [isTyping, setIsTyping] = useState(false)
  const [showUserForm, setShowUserForm] = useState(true)
  const [unreadCount, setUnreadCount] = useState(0)
  
  const socketRef = useRef(null)
  const messagesEndRef = useRef(null)
  const typingTimeoutRef = useRef(null)

  // User form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (!isOpen) {
      setUnreadCount(0)
    }
  }, [isOpen])

  const initializeChat = (userData) => {
    const userId = localStorage.getItem('chatUserId') || uuidv4()
    localStorage.setItem('chatUserId', userId)

    const user = {
      userId,
      userName: userData.name,
      userEmail: userData.email,
      isAdmin: false
    }

    setUserInfo(user)
    
    // Initialize socket connection

  const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://phone-repair-rho.vercel.app'
    : 'http://localhost:3001')

    socketRef.current = io(socketUrl, {
      transports: ['websocket', 'polling'],
      timeout: 20000,
      forceNew: true
    })

    socketRef.current.on('connect', () => {
      console.log('Socket connected successfully')
      setIsConnected(true)
      socketRef.current.emit('join-chat', user)
    })

    socketRef.current.on('disconnect', () => {
      console.log('Socket disconnected')
      setIsConnected(false)
    })

    socketRef.current.on('connect_error', (error) => {
      console.error('Socket connection error:', error)
      setIsConnected(false)
    })

    socketRef.current.on('chat-history', (history) => {
      setMessages(history)
    })

    socketRef.current.on('new-message', (message) => {
      setMessages(prev => [...prev, message])
      
      // Increment unread count if chat is closed
      if (!isOpen) {
        setUnreadCount(prev => prev + 1)
      }
    })

    socketRef.current.on('user-typing', (data) => {
      if (data.userId !== user.userId) {
        setIsTyping(data.isTyping)
      }
    })

    // Send initial message if provided
    if (userData.message.trim()) {
      setTimeout(() => {
        sendMessage(userData.message)
      }, 1000)
    }

    setShowUserForm(false)
  }

  const sendMessage = (messageText = newMessage) => {
    if (!messageText.trim() || !socketRef.current || !isConnected) return

    socketRef.current.emit('send-message', {
      text: messageText.trim()
    })

    setNewMessage('')
  }

  const handleTyping = (isTypingNow) => {
    if (!socketRef.current || !isConnected) return

    socketRef.current.emit('typing', { isTyping: isTypingNow })
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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formData.name.trim() && formData.email.trim()) {
      initializeChat(formData)
    }
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const closeChat = () => {
    setIsOpen(false)
    if (socketRef.current) {
      socketRef.current.disconnect()
      socketRef.current = null
    }
    setIsConnected(false)
    setMessages([])
    setUserInfo(null)
    setShowUserForm(true)
    setUnreadCount(0)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div className={styles.chatToggle} onClick={toggleChat}>
        <div className={styles.chatIcon}>
          {isOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <>
              <i className="fas fa-comments"></i>
              {unreadCount > 0 && (
                <span className={styles.unreadBadge}>{unreadCount}</span>
              )}
            </>
          )}
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* Chat Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <h4>Lambton Phone Repairs</h4>
              <span className={styles.status}>
                {isConnected ? (
                  <><i className="fas fa-circle text-success"></i> Online</>
                ) : (
                  <><i className="fas fa-circle text-danger"></i> Connecting...</>
                )}
              </span>
            </div>
            <button className={styles.closeBtn} onClick={closeChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* User Info Form */}
          {showUserForm && (
            <div className={styles.userForm}>
              <div className={styles.formContainer}>
                <div className={styles.formFields}>
                  <h5>Start a conversation</h5>
                  <p>Please provide your details to begin chatting with our support team.</p>
                  <form onSubmit={handleFormSubmit}>
                    <div className={styles.formGroup}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <textarea
                        placeholder="How can we help you? (optional)"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows="3"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.startChatBtn} onClick={handleFormSubmit}>
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Chat Messages */}
          {!showUserForm && (
            <>
              <div className={styles.chatMessages}>
                {messages.length === 0 && (
                  <div className={styles.welcomeMessage}>
                    <p>Welcome to Lambton Phone Repairs! How can we help you today?</p>
                  </div>
                )}
                
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`${styles.message} ${
                      message.isAdmin ? styles.adminMessage : styles.userMessage
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
                    <span>Support is typing...</span>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className={styles.chatInput}>
                <div className={styles.inputContainer}>
                  <textarea
                    value={newMessage}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    rows="1"
                    disabled={!isConnected}
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={!newMessage.trim() || !isConnected}
                    className={styles.sendBtn}
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}