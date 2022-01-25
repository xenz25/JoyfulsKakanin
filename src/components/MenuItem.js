import React from "react";
import { Link } from 'react-router-dom';

function MenuItem({ image, name, price,description }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h2> {name} </h2>
        <strong><p> {price}php </p></strong>
        <p>{description}</p>
        <button className="button">
          <Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link>
        </button>
    </div>
  );
}

export default MenuItem;
