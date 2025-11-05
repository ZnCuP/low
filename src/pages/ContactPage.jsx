import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message. We will be in touch soon.')
    setFormData({ name: '', email: '', company: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="page">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with Morrison Foerster"
      />
      
      <div className="content-wrapper">
        <div className="container">
          <div className="contact-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Send Us a Message</h2>
            <p style={{ marginBottom: '32px', color: '#666' }}>
              Have a question or want to learn more about our services? 
              Fill out the form below and we'll get back to you shortly.
            </p>
            
            <form onSubmit={handleSubmit} style={{ 
              background: '#f8f8f8', 
              padding: '40px', 
              borderRadius: '8px' 
            }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button 
                type="submit"
                style={{
                  background: '#c8102e',
                  color: 'white',
                  padding: '14px 32px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => e.target.style.background = '#a00d25'}
                onMouseOut={(e) => e.target.style.background = '#c8102e'}
              >
                Send Message
              </button>
            </form>
            
            <div style={{ 
              marginTop: '48px', 
              padding: '32px', 
              background: '#f8f8f8',
              borderRadius: '8px'
            }}>
              <h3 style={{ color: '#c8102e', marginBottom: '16px' }}>Office Locations</h3>
              <p style={{ color: '#666' }}>
                Morrison Foerster has offices in major cities around the world. 
                Visit our website to find an office near you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
