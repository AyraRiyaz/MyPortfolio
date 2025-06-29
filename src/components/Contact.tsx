import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  ExternalLink,
  CheckCircle,
  Copy,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Hello Ayra,

I'm reaching out through your portfolio website.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`;

    // Create mailto link
    const mailtoLink = `mailto:riyazayra@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const handleCopyToClipboard = async () => {
    const contactText = `Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    try {
      await navigator.clipboard.writeText(contactText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleWhatsAppSubmit = () => {
    const message = `Hello Ayra! I'm ${formData.name}.

${formData.message}

You can reach me at: ${formData.email}`;
    
    const whatsappUrl = `https://wa.me/919207651458?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "riyazayra@gmail.com",
      href: "mailto:riyazayra@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9207651458",
      href: "tel:+919207651458",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Manjeri, Kerala, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kp-ayra-riyaz",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/AyraRiyaz",
      color: "hover:text-gray-400",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "https://ayrariyaz.github.io/MyPortfolio",
      color: "hover:text-primary-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-theme-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-6">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-theme-text-secondary text-lg max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities?
            Let's connect and build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-theme-text mb-6">
                Let's Connect
              </h3>
              <p className="text-theme-text-secondary text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative
                projects, or potential collaborations. Whether you're looking
                for a full-stack developer, AI/ML enthusiast, or someone with
                strong leadership experience, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 glass border border-theme-border rounded-lg hover:border-primary-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 bg-primary-500/20 rounded-lg">
                    <contact.icon className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <p className="text-theme-text-secondary text-sm">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-theme-text hover:text-primary-400 transition-colors font-medium"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-theme-text font-medium">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-theme-text mb-4">
                Connect on Social Media
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass border border-theme-border rounded-lg text-theme-text-secondary ${social.color} transition-all duration-300 hover:border-primary-500/40`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass border border-theme-border rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-theme-text mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary-400 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass border border-theme-border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary-400 mb-2"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass border border-theme-border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary-400 mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass border border-theme-border rounded-lg text-theme-text placeholder-theme-text-secondary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Multiple Contact Options */}
              <div className="space-y-3">
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-primary-400 hover:to-secondary-400 transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={20} />
                  Open Email Client
                </motion.button>

                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="bg-green-500 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare size={18} />
                    WhatsApp
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={handleCopyToClipboard}
                    className="bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {copySuccess ? (
                      <>
                        <CheckCircle size={18} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        Copy Info
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-6 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg">
                <h4 className="text-primary-400 font-semibold mb-2">How it works:</h4>
                <ul className="text-theme-text-secondary text-sm space-y-1">
                  <li>• <strong>Email Client:</strong> Opens your default email app with pre-filled content</li>
                  <li>• <strong>WhatsApp:</strong> Sends message directly via WhatsApp</li>
                  <li>• <strong>Copy Info:</strong> Copies your details to clipboard for manual sending</li>
                </ul>
              </div>

              {/* Direct Contact Fallback */}
              <div className="mt-6 pt-6 border-t border-theme-border">
                <p className="text-theme-text-secondary text-sm text-center mb-4">
                  Prefer direct contact?
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="mailto:riyazayra@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500/10 text-primary-400 rounded-lg border border-primary-500/20 hover:bg-primary-500/20 transition-all text-sm"
                  >
                    <Mail size={16} />
                    Email Me
                  </a>
                  <a
                    href="https://linkedin.com/in/kp-ayra-riyaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500/20 transition-all text-sm"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;