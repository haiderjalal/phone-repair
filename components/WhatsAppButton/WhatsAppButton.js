'use client'
import React, { useState, useEffect } from 'react'

export function WhatsappFormButton({ phoneNumber = '923556172662' }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    brand: '',
    problem: '',
  })

  // Prevent background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // build a multi-line message for WhatsApp
    const lines = [
      `Name: ${form.name || '-'}`,
      `Phone: ${form.phone || '-'}`,
      `City: ${form.city || '-'}`,
      `Brand: ${form.brand || '-'}`,
      `Problem / Message: ${form.problem || '-'}`,
    ]
    const text = lines.join('\n')
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setOpen(false)
    // optional: reset form if you want
    // setForm({ name: "", phone: "", city: "", brand: "", problem: "" });
  }

  return (
    <>
      {/* Floating button (very high zIndex so it's above everything) */}
      <button
        type="button"
        aria-label="Contact via WhatsApp"
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          bottom: '50px',
          right: '80px',
          zIndex: 2147483647,
          padding: '0',
          border: 'none',
          borderRadius: '50%',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease-in-out',
          cursor: 'pointer',
          outline: 'none'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        <div
          style={{
            backgroundColor: '#25D366',
            color: 'white',
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            pointerEvents: 'auto'
          }}
          title="Chat on WhatsApp"
        >
          {/* WhatsApp icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            aria-hidden
          >
            <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.86.49 3.63 1.41 5.21L2 22l4.94-1.38A9.961 9.961 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2zm.02 18c-1.73 0-3.39-.51-4.82-1.48l-.35-.23-2.93.82.8-2.86-.24-.37A7.938 7.938 0 0 1 4.04 12c0-4.42 3.6-8 8.02-8 2.14 0 4.15.83 5.66 2.34a7.933 7.933 0 0 1 2.34 5.66c0 4.42-3.6 8-8 8zm4.53-5.8c-.25-.12-1.48-.73-1.71-.82-.23-.08-.4-.12-.57.12-.17.25-.65.82-.8.98-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.1-.51.1-.1.25-.27.37-.4.12-.13.15-.22.23-.37.08-.15.04-.28-.02-.4-.06-.12-.57-1.38-.78-1.89-.2-.48-.41-.41-.57-.42h-.48c-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.21.94 2.36c.12.15 1.61 2.46 3.9 3.45.54.23.96.37 1.29.47.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.51-1.06.19-.52.19-.96.13-1.06-.05-.1-.21-.16-.46-.28z" />
          </svg>
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            padding: '16px',
            zIndex: 2147483646
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '400px',
              padding: '24px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="WhatsApp contact form"
          >
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Contact via WhatsApp</h3>

            <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  marginBottom: '12px',
                  fontSize: '14px'
                }}
              />

              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone (e.g. +92 300 1234567)"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  marginBottom: '12px',
                  fontSize: '14px'
                }}
              />

              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  marginBottom: '12px',
                  fontSize: '14px'
                }}
              />

              <input
                name="brand"
                value={form.brand}
                onChange={handleChange}
                placeholder="Mobile brand (e.g. Samsung, iPhone)"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  marginBottom: '12px',
                  fontSize: '14px'
                }}
              />

              <textarea
                name="problem"
                value={form.problem}
                onChange={handleChange}
                placeholder="Problem / Message"
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  marginBottom: '12px',
                  fontSize: '14px',
                  resize: 'vertical'
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    backgroundColor: '#bbf7d0',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#86efac'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#bbf7d0'}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#25D366'}
                >
                  Open WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}