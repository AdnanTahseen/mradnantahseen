import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_ko55emv', // Replace with your EmailJS service ID
        'template_mifnvii', // Replace with your EmailJS template ID
        form.current,
        'Kp0199Df-x01SGbXA' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setMessage({ text: 'Message sent successfully!', type: 'success' });
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows="5"></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;