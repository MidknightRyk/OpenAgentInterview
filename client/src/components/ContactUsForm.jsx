import axios from 'axios';
import React from 'react';

class ContactUsForm extends React.Component {


  addNewContact = axios.post(`${this.props.apiBaseURL}/contacts`).then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })


    render() {
        return (
            <div>
                <header>
        
                </header>
            </div>
        );
    }
}

export default ContactUsForm;