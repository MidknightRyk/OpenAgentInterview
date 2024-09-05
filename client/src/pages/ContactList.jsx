import axios from "axios";
import React from "react";
import MainContainer from "../components/MainContainer";
import { useState, useEffect } from "react";

const ContactList = ({ apiBaseURL }) => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(false);

    const handleVerify = (event) => {
        const id = event.target.value;
        setError(true);
        axios
            .put(`${apiBaseURL}/contacts/${id}`, { verified: "true" })
            .then((res) => {
                if (res?.status === 200) {
                    alert("Contact has been verified");
                    setError(false);
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Failed to verify contact");
                setError(true);
            });
    };
    const handleDelete = (event) => {
        const confirm = window.confirm(
            "Are you sure you want to delete this contact?",
        );
        if (confirm) {
            const id = event.target.value;
            axios
                .delete(`${apiBaseURL}/contacts/${id}`)
                .then((res) => {
                    if (res?.status === 200) {
                        alert("Contact has been deleted");
                        setError(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert("Failed to delete contact");
                    setError(true);
                });
        }
    };

    useEffect(() => {
        axios
            .get(`${apiBaseURL}/contacts`)
            .then((res) => {
                if (res?.status === 200) {
                    setContacts(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
                //alert("Failed to fetch contact list");
            });
    }, [apiBaseURL, error]);

    return (
        <MainContainer>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl items-center m-6">
                    Contact List
                </h1>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-left text-gray-800 rounded-md">
                        <thead class="text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    First Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Last Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Notes
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Verify
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts === undefined || contacts.length === 0 ? (
                                <strong>No Contacts Found</strong>
                            ) : (
                                contacts?.map((contact) => {
                                    return (
                                        <tr class="odd:bg-slate-300 even:bg-gray-100 border-b">
                                            <th
                                                scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {contact.id}
                                            </th>
                                            <td class="px-6 py-4">
                                                {contact.firstName}
                                            </td>
                                            <td class="px-6 py-4">
                                                {contact.lastName}
                                            </td>
                                            <td class="px-6 py-4">
                                                {contact.phone}
                                            </td>
                                            <td class="px-6 py-4">
                                                {contact.email}
                                            </td>
                                            <td class="px-6 py-4">
                                                {contact.note}
                                            </td>

                                            <td class="px-6 py-4">
                                                {contact.verified === "true" ? (
                                                    <button className="disabled cursor-not-allowed text-white bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                                        Verified
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="text-white bg-gray-800 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                                                        onClick={handleVerify}
                                                        value={contact.id}>
                                                        Verify
                                                    </button>
                                                )}
                                            </td>
                                            <td class="px-6 py-4">
                                                <button
                                                    value={contact.id}
                                                    onClick={handleDelete}
                                                    className="text-white bg-gray-800 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainContainer>
    );
};

export default ContactList;
