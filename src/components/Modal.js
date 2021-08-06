import React from 'react'
import '../styles/Modal.css'

const MODAL_STYLES = {
position: 'fixed',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
backgroundColor: '#fff', 
padding: '50px',
zIndex: 1000
}


const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000, 
}


function Modal( { open, children, onClose} ) {
    if(!open) return null 

    return (
    <>
        <div style={OVERLAY_STYLE} className="overlay-stl"/>
        <div style={MODAL_STYLES} className="modal-stl">
        <div className="btn-close__wrap"> <button id="close-btn" className="close-btn" onClick={onClose}>X</button> </div>
           { children } 
        </div>
    </>  
    )
}

export default Modal
