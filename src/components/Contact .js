import React from 'react'
import '../styles/Contact.css'

function Contact () {
    return (
<div className="wrapper-contact">
    <div className="contact-form">
    <form action="https://formsubmit.co/echezuriart@gmail.com" method="POST" id="form">
            <p>Feel free to contact anytime</p>
            <input type="text" name="name" required className="name" placeholder="Name"/>
            <input type="email" name="email" required className="email" placeholder="Email"/>
            <textarea name="message" form="form" required className="message" placeholder="Message"></textarea>
        <div className="wrap-btn__contact">
               <button type="submit">Send</button>
        </div>  
    </form>
    </div>
</div>

    )
}

export default Contact 
