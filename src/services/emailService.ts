import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_portfolio'; // You'll need to replace this
const EMAILJS_TEMPLATE_ID = 'template_contact'; // You'll need to replace this
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // You'll need to replace this

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Initialize EmailJS (only needs to be done once)
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'riyazayra@gmail.com', // Your email
      reply_to: formData.email,
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Alternative method using fetch to a serverless function
export const sendEmailAlternative = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'riyazayra@gmail.com',
        subject: `New message from ${formData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Simple SMTP.js implementation (client-side email sending)
export const sendEmailSMTP = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Load SMTP.js dynamically
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    document.head.appendChild(script);

    return new Promise((resolve) => {
      script.onload = () => {
        // @ts-ignore - SMTP.js global
        window.Email.send({
          Host: 'smtp.elasticemail.com', // You'll need to configure this
          Username: 'your-email@gmail.com', // Your SMTP username
          Password: 'your-smtp-password', // Your SMTP password
          To: 'riyazayra@gmail.com',
          From: 'your-email@gmail.com',
          Subject: `New message from ${formData.name}`,
          Body: `
            Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.message}
          `,
        }).then((message: string) => {
          console.log('Email sent:', message);
          resolve(message === 'OK');
        }).catch((error: any) => {
          console.error('SMTP error:', error);
          resolve(false);
        });
      };
    });
  } catch (error) {
    console.error('Failed to load SMTP.js:', error);
    return false;
  }
};