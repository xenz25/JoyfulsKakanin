import React from "react";
import Background from "../assets/background6.jpg";
import "./Faq.css";

function Faq() {
  return (
    <div className="faq" style={{ backgroundImage: `url(${Background})` }}>
      <div className="content">
        <a className="title">Frequently Asked Questions</a>
        <h1>Where are you located?</h1>
        <p>
          = B65 L21 P10 AF San Miguel St. Brgy. San Pedro City of San Jose Del
          Monte Bulacan.
        </p>
        <h1>Do you accept delivery?</h1>
        <p>= Yes, Near San Jose Del Monte Only.</p>
        <h1>Do you have other branches?</h1>
        <p>= Currently, we don't have any existing branches.</p>
        <h1>What container sizes are available for orders?</h1>
        <p>
          = Sizes varies on product but in general we offer tubs at 500ml and 14
          inches and 16 inches Bilao.
        </p>
        <h1>Do you have Facebook page?</h1>
        <p>
          = Currently, we don't have any Facebook page. But you can go to the
          Contact Us page to send a message or request.
        </p>
      </div>
    </div>
  );
}

export default Faq;
