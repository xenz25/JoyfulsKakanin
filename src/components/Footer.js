import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer.css";


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon />
      </div>
      <p> &copy; 2022 Joyful'sKakanin.com <br /> B65 L21 P10 AF San Miguel St. Brgy. San Pedro City of San Jose Del Monte Bulacan</p>
    </div>
  );
}

export default Footer;
