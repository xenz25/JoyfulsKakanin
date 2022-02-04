import React from "react";
import BannerImage from "../assets/background8.jpg";
import "./About.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className="about" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="aboutTop">
        <h1> ABOUT US</h1>
        <p>
          Joyful's Kakanin is a food business for original kapampangan kakanin
          recipes. Some of the products include, Maja Blanca or Tibok-Tibok in
          kapampangan, Sapin-Sapin, Turon, Minatamis na Langka and many more,
          which can be purchase in Tubs or in different sizes of Bilao. The
          prices are affordable making it perfect for events, or as a gift for
          your loved ones.
        </p>
      </div>
      <div className="aboutBottom">
        <p>If you have more question please visit this link:</p>
        <Link to="/faq"><QuestionMarkIcon/>Frequently Asked Questions</Link>
        <p>You can visit us in this address:</p>
        <a href="https://goo.gl/maps/A67DWfDgyjtzd8v96"><LocationOnIcon />B65 L21 P10 AF San Miguel St. Brgy. San Pedro City of San Jose Del Monte Bulacan</a>
      </div>
    </div>
  );
}

export default About;


