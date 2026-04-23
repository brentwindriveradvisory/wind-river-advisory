import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { firstName, lastName, email, businessType, message } = body

  // ── Option A: Resend (recommended) ──────────────────────────────────────
  // 1. npm install resend
  // 2. Add RESEND_API_KEY to your Vercel environment variables
  // 3. Uncomment the block below and set your "to" email address
  //
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'hello@windriveradvisory.com',
  //   to: 'brent@windriveradvisory.com',        // ← your email
  //   subject: `New inquiry from ${firstName} ${lastName}`,
  //   text: `
  //     Name: ${firstName} ${lastName}
  //     Email: ${email}
  //     Business type: ${businessType}
  //     Message: ${message}
  //   `,
  // })

  // ── Option B: Formspree (no code needed) ────────────────────────────────
  // Replace ContactForm.tsx's fetch('/api/contact') with a direct POST to
  // https://formspree.io/f/YOUR_FORM_ID and delete this file entirely.

  // ── Temporary: just log to console until you wire up email ──────────────
  console.log('New contact form submission:', { firstName, lastName, email, businessType, message })

  return NextResponse.json({ ok: true })
}
