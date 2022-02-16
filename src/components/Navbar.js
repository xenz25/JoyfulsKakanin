import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/"><img src={logo} /></Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Product</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button>
          <ReorderIcon onClick={toggleNavbar} style={{fill: "#598f1e"}} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
