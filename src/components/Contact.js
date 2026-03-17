import React from "react";
import Support from "./Support";

class Contact extends React.Component{
    render() {
        return (
            <div className="contact-page">
                <h1>Contact Us</h1>
                <p>We are here to help you!</p>
                <Support />
            </div>

        );
    }
}


export default Contact;