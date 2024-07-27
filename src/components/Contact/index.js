import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactme-main">
      {/* <div class="login-light"></div> */}
      <div className="login-box">
        <form action="#">
          {/* Set the defaultChecked property to true */}
          <input type="checkbox" className="input-check" id="input-check" defaultChecked />
          <label htmlFor="input-check" className="toggle">
            <span className="text off">off</span>
            <span className="text on">on</span>
          </label>
          <div className="light"></div>

          <h2>Contact Details</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="text" required />
            <label>Name</label>
            <div className="input-line"></div>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="text" required />
            <label>Email</label>
            <div className="input-line"></div>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="text" required />
            <label>Subject</label>
            <div className="input-line"></div>
          </div>

          <button className="contact-send" type="submit">
            Send
          </button>
        </form>
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
