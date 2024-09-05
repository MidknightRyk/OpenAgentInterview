import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUsForm = ({ apiBaseURL }) => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        note: null,
    });

    const [inputError, setInputError] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    });

    const [error, setError] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    const handleValidation = (name, value) => {
        switch (name) {
            case "firstName":
                if (value.length === 0) {
                    setInputError((values) => ({
                        ...values,
                        firstName: "First Name cannot be blank",
                    }));
                    return false;
                }
                setInputError((values) => ({
                    ...values,
                    firstName: "",
                }));
                return true;

            case "lastName":
                if (value === "") {
                    setInputError((values) => ({
                        ...values,
                        lastName: "Last Name cannot be blank",
                    }));
                    return false;
                }
                setInputError((values) => ({
                    ...values,
                    lastName: "",
                }));
                return true;
            case "phone":
                if (isNaN(value)) {
                    setInputError((values) => ({
                        ...values,
                        phone: "Phone Number must be numbers only",
                    }));
                    return false;
                } else if (value.length < 9 || value.length > 11) {
                    setInputError((values) => ({
                        ...values,
                        phone: "Please enter a valid phone number",
                    }));
                    return false;
                }
                setInputError((values) => ({
                    ...values,
                    phone: "",
                }));
                return true;
            case "email":
                if (!value.includes("@") || !value.includes(".")) {
                    setInputError((values) => ({
                        ...values,
                        email: "Please enter a valid email address",
                    }));
                    return false;
                }
                setInputError((values) => ({
                    ...values,
                    email: "",
                }));
                return true;
            default:
                return true;
        }
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (handleValidation(name, value)) {
            setDisabledButton(false);
        }
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        setError(false);

        axios
            .post(`${apiBaseURL}/contacts`, {
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                email: inputs.email,
                phone: inputs.phone,
                note: inputs.note,
            })
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
                        name="firstName"
                        className="bg-slate-200 border-3 border-black rounded-md h-8 my-2"
                        value={inputs.firstName}
                        onChange={handleChange}
                    />
                    {inputError.firstName.length !== 0 ? (
                        <label className="font-bold text-red-600">
                            {inputError.firstName}
                        </label>
                    ) : null}
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        className="bg-slate-200 border-3 border-black rounded-md h-8 my-2"
                        value={inputs.lastName}
                        onChange={handleChange}
                    />

                    {inputError.lastName.length !== 0 ? (
                        <label className="font-bold text-red-600">
                            {inputError.lastName}
                        </label>
                    ) : null}
                </div>
            </div>

            <label className="font-semibold">Phone Number:</label>
            <input
                type="text"
                name="phone"
                className="bg-slate-200 border-3 border-black rounded-md h-8 my-2"
                value={inputs.phone}
                onChange={handleChange}
            />
            {inputError.phone.length !== 0 ? (
                <label className="font-bold text-red-600">
                    {inputError.phone}
                </label>
            ) : null}

            <label className="font-semibold">Email:</label>
            <input
                type="text"
                name="email"
                className="bg-slate-200 border-3 border-black rounded-md h-8 my-2"
                value={inputs.email}
                onChange={handleChange}
            />
            {inputError.email.length !== 0 ? (
                <label className="font-bold text-red-600">
                    {inputError.email}
                </label>
            ) : null}

            <label className="font-semibold">Inquiry or Notes:</label>
            <textarea
                name="note"
                className="bg-slate-200 border-3 border-black rounded-md h-20 my-2"
                value={inputs.note}
                onChange={handleChange}
            />
            <p className={`text-red-600 ${error ? "" : "hidden"}`}>
                There was a problem processing your form.
            </p>
            <input
                className={`${disabledButton ? "disabled bg-gray-400 hover:bg-gray-400 cursor-not-allowed " : ""}text-white bg-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-sm px-6 py-2.5 me-2 mb-2 mt-3`}
                type="submit"
            />
        </form>
    );
};

export default ContactUsForm;
