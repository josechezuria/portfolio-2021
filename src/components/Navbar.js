import React from "react";
import '../styles/Navbar.css'
import Logo from '../images/personal-logo.svg'

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
       <img src= { Logo } alt="logo"></img>
      </div>
      <div className="links-wrapper">
        <a href="home">Home</a>  
        <a href="aboutme">About</a> 
        <a href="contact">Contact</a>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
