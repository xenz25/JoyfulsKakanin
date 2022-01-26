import React from "react";
import Background from "../assets/background3.jpg";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Joyful's Kakanin is a food business for original kapampangan kakanin
          recipes. Some of the products include, Maja Blanca or Tibok-Tibok in kapampangan, Sapin-Sapin, Turon, Minatamis na Langka and many more, which can be purchase in Tubs or in different sizes of Bilao. The prices are affordable making it perfect for events, or as a gift for your loved ones.
        </p>
      </div>
    </div>
  );
}

export default About;
