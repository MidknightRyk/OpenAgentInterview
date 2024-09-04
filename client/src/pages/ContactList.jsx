import axios from 'axios';
import React from 'react';


class ContactList extends React.Component {

    contactList = axios.get(`${this.props.apiBaseURL}/contacts`)
    render() {
        return(
        <div>
            <header>

                <p>contact list table/grid goes here</p>
        
            </header>
        </div>
        )
    };
}

export default ContactList;