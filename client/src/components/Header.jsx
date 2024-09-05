import React from "react";
import CustomButton from "./CustomButton";

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
                                <CustomButton type="header" linkTo={"/"}>
                                    Home
                                </CustomButton>
                            </li>
                            <li>
                                <CustomButton
                                    type="header"
                                    linkTo={"/contact-us"}>
                                    Contact Us
                                </CustomButton>
                            </li>
                            <li>
                                <CustomButton
                                    type="header"
                                    linkTo={"/contact-list"}>
                                    Contact List
                                </CustomButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
