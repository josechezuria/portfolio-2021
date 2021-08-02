import React from 'react'
import '../styles/Contact.css'

function Contact () {
    return (
        <div className="contact-wrap">
        <div className="contact-form">
        <form>
        <div className="contact-text">
        <p>Feel free to contact me anytime</p>
        </div>
            <div className="full-name">
                <input type="text" name="fullname" id="fullname" required className="form-element" placeholder="Full Name">
                </input>
            </div>
            <div className="email">
                <input type="text" name="email" id="email" required className="form-element" placeholder="Your Email">
                </input>
            </div>
            <div className="message">
                <input type="text" name="message" id="message" required className="form-element" placeholder="Message">
                </input>
            </div>
            <div className="submit-btn">
                <input type="submit" value="Send Messsage"/>
            </div>
        </form> 
        </div>
        </div>
    )
}

export default Contact 
