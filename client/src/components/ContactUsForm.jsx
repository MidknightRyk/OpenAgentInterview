import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUsForm = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        note: null,
    });

    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
        setError(false);
        axios
            .post(`${this.props.apiBaseURL}/contacts`, { inputs })
            .then((res) => {
                //this console.log will be in our frontend console
                console.log(res);

                if (res?.status === 200) {
                    navigate("/thank-you");
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col p-3 px-5 bg-white rounded-md w-max">
            <h3 className="font-bold text-lg mb-3">
                Leave your details and we'll reach out!
            </h3>
            <div className="flex gap-4">
                <div className="flex flex-col">
                    <label className="font-semibold">First Name:</label>
                    <input
                        type="text"
                        className="bg-slate-200 border-3 border-black rounded-md h-8 my-2"
                        value={inputs.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Last Name:</label>
                    <input
                        type="text"
                        lastName="Last Name"
                        className="bg-slate-200 border-3 border-black rounded-md h-8 my-2"
                        value={inputs.lastName}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <label className="font-semibold">Phone Number:</label>
            <input
                type="number"
                phone="Phone Number"
                className="bg-slate-200 border-3 border-black rounded-md h-8 my-2"
                value={inputs.phone}
                onChange={handleChange}
            />
            <label className="font-semibold">Email:</label>
            <input
                type="text"
                email="Email"
                className="bg-slate-200 border-3 border-black rounded-md h-8 my-2"
                value={inputs.email}
                onChange={handleChange}
            />
            <label className="font-semibold">Inquiry or Notes:</label>
            <textarea
                note="Note"
                className="bg-slate-200 border-3 border-black rounded-md h-20 my-2"
                value={inputs.note}
                onChange={handleChange}
            />
            <p className={`text-red-600 ${error ? "" : "hidden"}`}>
                There was a problem processing your form.
            </p>
            <input
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-sm px-6 py-2.5 me-2 mb-2 mt-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                type="submit"
            />
        </form>
    );
};

export default ContactUsForm;
