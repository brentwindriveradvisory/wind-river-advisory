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
          interest: data.get('interest'),
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
      <div className="form-success">
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
        <label htmlFor="interest">What are you interested in? <span style={{ opacity: 0.5, fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
        <select id="interest" name="interest" defaultValue="">
          <option value="">Select one</option>
          <option value="Workflow or reporting automation">Workflow or reporting automation</option>
          <option value="Amazon seller reporting">Amazon seller reporting</option>
          <option value="Custom operations app">Custom operations app</option>
          <option value="AI tools or agents">AI tools or agents</option>
          <option value="Workshop or training">Workshop or training</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">What would you like to work on? <span style={{ opacity: 0.5, fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us what you're working on..."
        />
      </div>
      <button type="submit" className="btn-submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
