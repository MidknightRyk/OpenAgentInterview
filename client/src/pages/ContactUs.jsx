import React from "react";
import MainContainer from "../components/MainContainer";
import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
    return (
        <MainContainer>
            <div className="flex flex-col justify-center items-center w-screen mt-10">
                <h1 className="text-2xl font-bold">Welcome to OpenAgent.</h1>
                <h2 className="text-xl font-semibold">
                    We've been around since 2013, and our vision is to make it
                    easy for people to buy, sell, and own property.
                </h2>
                <h3 className=" text-xl font-semibold mb-10">
                    Here are the different ways you can contact us
                </h3>
                <div className="flex gap-5">
                    <div className="bg-white p-3 rounded-md">
                        <h3 className="font-bold text-lg mb-3">
                            Contact Us Details
                        </h3>

                        <strong>Phone</strong>
                        <p className="mb-6">13 24 34</p>

                        <strong>Email</strong>
                        <p className="mb-6">support@openagent.com.au</p>

                        <strong>Postal Address</strong>
                        <p className="mb-6">PO Box 419, Alexandria NSW 1435</p>

                        <strong>Contact centre hours of operation</strong>
                        <p className="mb-6">Monday - Friday 8:30 - 5:00</p>
                    </div>
                    <ContactUsForm />
                </div>
            </div>
        </MainContainer>
    );
};

export default ContactUs;
