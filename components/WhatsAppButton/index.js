'use client'

import React from 'react'
import { WhatsappFormButton } from './WhatsAppButton'

export const WhatsAppButton = ({
  phoneNumber,
  message = '',
  buttonText = 'Contact via WhatsApp',
  className = 'btn btn-primary',
  iconClass = 'icon-whatsapp',
}) => {
  const handleClick = () => {
    const text = message || 'Hello! I would like to get in touch with you.'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      aria-label={buttonText}
    >
      <i className={iconClass} aria-hidden="true" />
      <span>{buttonText}</span>
    </button>
  )
}

export { WhatsappFormButton }

export default WhatsAppButton