import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

// Initialize Resend inside the POST handler to ensure environment variables are loaded

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, email, phone, message } = formData;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "info@goodandplentywellness.com",
        pass: "qyltwrhdgbsmtyxa"
      }
    });

    const mailOptions = {
      from: "info@goodandplentywellness.com",
      to: "info@goodandplentywellness.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}