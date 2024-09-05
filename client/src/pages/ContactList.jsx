import axios from "axios";
import React from "react";

const ContactList = () => {
    const contactList = axios.get(`${this.props.apiBaseURL}/contacts`);

    return (
        <div>
            <header>
                <p>contact list table/grid goes here</p>
            </header>
        </div>
    );
};

export default ContactList;
