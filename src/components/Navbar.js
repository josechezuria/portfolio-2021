import React from "react";
import '../styles/Navbar.css'
import Logo from '../images/personal-logo.svg'

function Navbar() {
  return (
    <div className="navbar">
      <div className="links-wrap">
      <img src= { Logo } alt="logo" className="logo"></img>
        <a href="/home">Home</a>  
        <a href="/aboutme">About</a> 
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
