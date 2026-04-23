import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { firstName, lastName, email, businessType, message } = body

  await resend.emails.send({
    from: 'hello@windriveradvisory.com',
    to: 'brent@windriveradvisory.com',
    subject: `New inquiry from ${firstName} ${lastName}`,
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Business type: ${businessType}
Message: ${message}
    `.trim(),
  })

  return NextResponse.json({ ok: true })
}
