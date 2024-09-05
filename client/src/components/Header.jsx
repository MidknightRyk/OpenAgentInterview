import React from "react";

const Header = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img
                            src="https://www.openagent.com.au/dist/assets/images/logo-openagent-green-grey.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="OpenAgent Logo"
                        />{" "}
                    </a>
                    <div
                        className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 px-4 font-semibold text-gray-700 hover:bg-gray-700 hover:rounded-md hover:text-white"
                                    aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/ContactUs"
                                    className="block py-2 px-4 font-semibold text-gray-700 hover:bg-gray-700 hover:rounded-md hover:text-white">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/ContactList"
                                    className="block py-2 px-4 font-semibold text-gray-700 hover:bg-gray-700 hover:rounded-md hover:text-white">
                                    Contact List
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
