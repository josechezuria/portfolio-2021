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
    <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal-content">
        Branding,
        UI,
        Responsive Design,
        Iconography,
        Colorization,
        Wireframes,
        A/B Testing,
        BenchMarking, 
        Photoshop,
        Ilustrator,
        Adobe XD,
        HTML,
        CSS,
        JAVASCRIPT,
        React JS,
        React Redux,
        React Router,
        Sass,
        Styled components,
        Tailwind CSS,
        TypeScript,
        Git,
        GitHub,
        Ecmascript 6+.
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
