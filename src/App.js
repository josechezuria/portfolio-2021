import React, { useState } from 'react'
import Contact from "./components/Contact ";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";


const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <Menu />
    <>
    <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')} className="btn-wrapper">
        <button onClick={() => setIsOpen(true)} className="open-btn">My Skills</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal-content">
        <span>Branding</span>
        <span>UI</span>
        <span>UX</span>
        <span>Responsive Design</span>
        <span>Iconography</span>
        <span>Colorization</span>
        <span>Wireframes</span>
        <span>A/B Testing</span>
        <span>User Research</span>
        <span>BenchMarking</span>
        <span>Photoshop</span>
        <span>Ilustrator</span>
        <span>Adobe XD</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>JAVASCRIPT</span>
        <span>React JS</span>
        <span>React Redux</span>
        <span>React Router</span>
        <span>Sass</span>
        <span>Tailwind CSS</span>
        <span>Styled Components</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>TypeScript</span>
        </div>
        </Modal>
      </div>
    </>  
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
