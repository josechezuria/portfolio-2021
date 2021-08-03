import React from "react";
import '../styles/Menu.css'

function Menu() {
  return (
    <div className="menu">
    <div className="welcome-text">
      <p><span>Hi I'm</span> <span className="jose">Jose Echezuria</span> <span className="webdev">Web Developer</span> <span>&</span> <span className="designer">Graphic Designer</span></p>
    </div>
    <div className="wrap-whoiam">
      <div className="who">Hello I am Jose Echezuria, I am Branding Designer, UI/UX Designer and Web Developer, I've been working in the Design Industry since 2019.
      </div>
      <div className="iam">I felt kind of incomplete a year ago so a decided learn Web Developing to expand my knowledge about this industry and make better things.
      </div>
    </div>
    <div className="wrap-btn__menu">
    <button type="submit" className="design-btn">Designer</button>
    <button type="submit" className="dev-btn">Developer</button>
    </div>
    </div>
  );
}

export default Menu;
