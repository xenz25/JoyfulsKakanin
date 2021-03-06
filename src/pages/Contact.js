import React from "react";
import Background from "../assets/background7.jpg";
import "./Contact.css";
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit" to="/thankyou"><Link to="/thankyou" style={{color:" white"}}>Send Message</Link></button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
