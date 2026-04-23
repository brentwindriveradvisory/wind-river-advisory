'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          email: data.get('email'),
          businessType: data.get('businessType'),
          message: data.get('message'),
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="contact-form form-success">
        <h3>Message received.</h3>
        <p>We&apos;ll be in touch within one business day to schedule a discovery call.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" type="text" placeholder="Jane" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" name="lastName" type="text" placeholder="Smith" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="jane@yourbusiness.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="businessType">Business type</label>
        <input id="businessType" name="businessType" type="text" placeholder="e.g. fitness studio, tutoring company" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Where&apos;s the friction? What feels broken?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Describe the operational challenge you're dealing with..."
          required
        />
      </div>
      <button type="submit" className="btn-submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
