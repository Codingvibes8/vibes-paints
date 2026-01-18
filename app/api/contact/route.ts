import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to you (the business owner)
    const { data, error } = await resend.emails.send({
      from: 'DayoPaints Contact Form <onboarding@resend.dev>',
      to: process.env.BUSINESS_EMAIL || 'adestar860@gmail.com',
      replyTo: email,
      subject: `New Contact: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0d5c63; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #0d5c63; margin-top: 0;">Customer Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Service Required:</strong> ${service}</p>
            <h2 style="color: #0d5c63;">Message</h2>
            <p style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #c9485b;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <div style="background: #0d5c63; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Sent from DayoPaints Contact Form</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Optionally send confirmation email to customer
    await resend.emails.send({
      from: 'DayoPaints <onboarding@resend.dev>',
      to: email,
      subject: 'Thanks for contacting DayoPaints!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0d5c63; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Thank You, ${name}!</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <p>Thank you for reaching out to DayoPaints. We've received your enquiry about <strong>${service}</strong> and will get back to you within 24 hours.</p>
            <h3 style="color: #0d5c63;">Your Message:</h3>
            <p style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #c9485b;">
              ${message.replace(/\n/g, '<br>')}
            </p>
            <p>If you have any urgent questions, feel free to call us directly.</p>
            <p>Best regards,<br><strong>Dayo</strong><br>DayoPaints</p>
          </div>
          <div style="background: #0d5c63; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">© DayoPaints - Premium Painting & Decorating in NW London</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
