import React, { useRef, useState } from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1ue7qf', 'template_usx9jag', form.current, '3oG8a5ONy4KcprAXp')
     .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        form.current.reset(); // Reset the form
        setTimeout(() => {
          setSubmitted(false); // Hide the snackbar after a short delay
        }, 3000); // Adjust the delay duration (in milliseconds) as needed
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
       {submitted && (
        <div className="snackbar">
          <span className="tick-icon">✓</span> Submitted!
        </div>
      )}
      <form ref={form} onSubmit={sendEmail} className="contact_form">
        <label className='heading'>Contact Me</label>
        <br />
        <label className="text"> Name</label>
        <input type="text" name="user_name" />
        <label className="text"> Email</label>
        <input type="email" name="user_email" />
        <label className="text"> Message</label>
        <textarea name="message" />
        <input className="submit" type="submit" value="Send" />
      </form>
     
      <footer>
        <span>
          Created By <a href="https://www.linkedin.com/in/madhumitha-u-42a816202">Madhumitha U</a>
        </span>
      </footer>
    </div>
  );
};

export default Contact;
