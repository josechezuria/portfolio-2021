import React from "react";
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
  
      <div className="links-wrap">
        <a href="/home">Home</a>  
        <a href="/aboutme">About Me</a> 
        <a href="/contact">Contact</a>  
      </div>
    </div>
  );
}

export default Navbar;
