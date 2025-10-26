import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, department, subject, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey || resendApiKey === 'your-resend-api-key-here') {
      // For now, just log the message and return success (for testing)
      console.log('=== CONTACT FORM SUBMISSION ===');
      console.log('Name:', firstName, lastName);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Department:', department);
      console.log('Subject:', subject);
      console.log('Message:', message);
      console.log('Timestamp:', new Date().toISOString());
      console.log('================================');
      
      return NextResponse.json({
        success: true,
        message: 'Message received! Please set up Resend API key to enable email delivery. Check console for message details.'
      });
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'LittleDrops NGO <onboarding@resend.dev>', // You can change this to your verified domain
      to: ['littledrops1109@gmail.com'],
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0; font-size: 24px;">Little Drops NGO</h1>
              <p style="color: #666; margin: 5px 0 0 0;">New Contact Form Submission</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${email}</td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${phone}</td>
                </tr>
                ` : ''}
                ${department ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Department:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${department}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
              <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
              <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This message was sent from the Little Drops NGO contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({
        success: false,
        message: 'Failed to send email. Please try again later.'
      }, { status: 500 });
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}