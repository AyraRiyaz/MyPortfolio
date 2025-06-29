import emailjs from '@emailjs/browser';

// EmailJS configuration - Replace these with your actual values
const EMAILJS_SERVICE_ID = 'service_portfolio'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_contact'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // Replace with your EmailJS public key

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Prepare template parameters that match your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'riyazayra@gmail.com',
      reply_to: formData.email,
      subject: `New Portfolio Contact from ${formData.name}`,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS response:', response);
    return response.status === 200;
  } catch (error) {
    console.error('EmailJS failed:', error);
    throw error; // Re-throw to allow fallback handling
  }
};

// Enhanced Web3Forms fallback (your current working method)
export const sendEmailWeb3Forms = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const formDataObj = new FormData();
    formDataObj.append('access_key', '7104df67-8127-428f-bbb3-03224c222c64');
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('message', formData.message);
    formDataObj.append('subject', `New Portfolio Message from ${formData.name}`);
    formDataObj.append('from_name', 'Ayra Portfolio Contact Form');
    formDataObj.append('redirect', 'false'); // Prevent redirect
    formDataObj.append('botcheck', ''); // Honeypot for spam protection

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataObj,
    });

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Web3Forms submission failed');
    }
    
    return true;
  } catch (error) {
    console.error('Web3Forms failed:', error);
    throw error;
  }
};

// Main email sending function with multiple fallbacks
export const sendContactEmail = async (formData: ContactFormData): Promise<{
  success: boolean;
  method?: string;
  error?: string;
}> => {
  // Method 1: Try EmailJS first
  try {
    await sendEmail(formData);
    return { success: true, method: 'EmailJS' };
  } catch (emailjsError) {
    console.log('EmailJS failed, trying Web3Forms fallback...');
  }

  // Method 2: Fallback to Web3Forms
  try {
    await sendEmailWeb3Forms(formData);
    return { success: true, method: 'Web3Forms' };
  } catch (web3Error) {
    console.error('All email methods failed:', web3Error);
    return { 
      success: false, 
      error: 'Failed to send message. Please try again or contact directly via email.' 
    };
  }
};