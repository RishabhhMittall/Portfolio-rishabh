import "./Contact.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qbpg29g', 'template_y44352t', form.current, {
        publicKey: 'M5WXQJ_DFiUN-Ql2M',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className="contactme-main">
      {/* <div class="login-light"></div> */}
      <div className="login-box">

      {isSubmitted ? (
        <div className="submission-message">
          Thank you! Your message has been sent successfully.<br/>
          Please refresh to send another message.
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          {/* Set the defaultChecked property to true */}
          <input
            type="checkbox"
            className="input-check"
            id="input-check"
            defaultChecked
          />
          <label htmlFor="input-check" className="toggle">
            <span className="text off">off</span>
            <span className="text on">on</span>
          </label>
          <div className="light"></div>

          <h2>Connect with me</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="text" name="from_name" required />
            <label>Name</label>
            <div className="input-line"></div>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" name="email_id" required />
            <label>Email</label>
            <div className="input-line"></div>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="text" name="message" required />
            <label>Subject</label>
            <div className="input-line"></div>
          </div>

          <button className="contact-send" type="submit">
            Send
          </button>
        </form>
      )}
      </div>

      {/* <div>
        <section class="photo-container">
          <div class="data">
            ...
          </div>
        </section>
      </div> */}

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Contact;
