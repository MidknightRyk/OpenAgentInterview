import React from "react";

import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
    return (
        <div>
            <header>
                <p>
                    Welcome to OpenAgent. We've been around since 2013, and our
                    vision is to make it easy for people to buy, sell, and own
                    property.
                </p>
                <p>Here are the different ways you can contact us</p>

                <strong>Contact Us Details</strong>

                <p>Phone: 13 24 34</p>
                <p>Email: support@openagent.com.au</p>

                <strong>Postal Address:</strong>

                <p>PO Box 419, Alexandria NSW 1435</p>

                <strong>Contact centre hours of operation</strong>

                <p>Monday - Friday 8:30 - 5:00</p>

                <ContactUsForm props={this.props.apiBaseUrl} />
            </header>
        </div>
    );
};

export default ContactUs;
