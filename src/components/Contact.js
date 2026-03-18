import React from "react";
import Support from "./Support";

class Contact extends React.Component{
    render() {
        return (
            <div className="p-5 text-center bg-gray-100">
                {/* <h1 className="text-2xl font-semibold">Contact Us</h1> */}
                <p className="text-gray-600 mt-1">We are here to help you!</p>
                <Support />
            </div>

        );
    }
}


export default Contact;