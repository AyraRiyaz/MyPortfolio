export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResult {
  success: boolean;
  error?: string;
}

// Web3Forms email sending function
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResult> => {
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
      return {
        success: false,
        error: result.message || 'Failed to send message. Please try again.'
      };
    }
    
    return { success: true };
  } catch (error) {
    console.error('Web3Forms error:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.'
    };
  }
};