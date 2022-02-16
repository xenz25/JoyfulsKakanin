import React from 'react'
import Background from "../assets/background6.jpg";
import "./ThankYou.css";

function ThankYou() {
  return (
    <div className='thankyou' style={{ backgroundImage: `url(${Background})` }}>
      <div className='content'>
        <h1>
          THANK YOU FOR SENDING A MESSAGE<br/>WE WILL EMAIL YOU ASAP!
        </h1>
      </div>

    </div>
  )
}

export default ThankYou