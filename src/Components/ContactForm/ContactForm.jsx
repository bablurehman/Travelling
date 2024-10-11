import "./ContactForm.css";

import React from "react";

const ContactForm = () => {
  return (
    <div className="contact">
      <h2 className="sub-title">Send a message to us!</h2>

      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea
          name="meassage"
          id="message"
          placeholder="Message"
          rows="4"
        ></textarea>
        <button className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
