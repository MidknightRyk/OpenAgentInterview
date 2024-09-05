import axios from "axios";
import React from "react";
import { useState } from "react";

const ContactUsForm = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    };

    const addNewContact = axios
        .post(`${this.props.apiBaseURL}/contacts`)
        .then((data) => {
            //this console.log will be in our frontend console
            console.log(data);
        });

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    );
};

export default ContactUsForm;
