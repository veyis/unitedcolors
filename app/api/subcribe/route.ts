import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message')

  // Server-side validation
  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
  }

  // Email sending logic
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Message: ${message}
      `,
    })

    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 })
  }
}

