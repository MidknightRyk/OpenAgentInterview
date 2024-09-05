import React from "react";
import CustomButton from "./CustomButton";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-screen h-35">
            <nav className="bg-neutral-800 border-gray-200 py-6 px-20">
                <div className="">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="/" className="">
                                <img
                                    src="https://www.openagent.com.au/dist/assets/images/footer/openagentlogo-mono.png"
                                    className="mr-3 mb-2 h-6"
                                    alt="OpenAgent Logo"
                                />
                            </a>
                            <div className="flex justify-between gap-3">
                                <span className="text-xs text-white">
                                    © 2024{" "}
                                </span>
                                <CustomButton
                                    type="disclaimers"
                                    linkTo={
                                        "https://www.openagent.com.au/privacy-policy"
                                    }>
                                    Privacy Policy
                                </CustomButton>
                                <CustomButton
                                    type="disclaimers"
                                    linkTo={
                                        "https://www.openagent.com.au/terms"
                                    }>
                                    Terms and Conditions
                                </CustomButton>
                                <CustomButton
                                    type="disclaimers"
                                    linkTo={
                                        "https://www.openagent.com.au/complaints-policy"
                                    }>
                                    Complaints Policy
                                </CustomButton>
                                <CustomButton
                                    type="disclaimers"
                                    linkTo={
                                        "https://www.openagent.com.au/sitemap"
                                    }>
                                    Site Map
                                </CustomButton>
                                <CustomButton
                                    type="disclaimers"
                                    linkTo={
                                        "https://s3.ap-southeast-2.amazonaws.com/openagent.strapi/OAPL_Website_Credit_Guide_Q1_2024_47a402149b.pdf"
                                    }>
                                    Credit Guide
                                </CustomButton>
                            </div>
                        </div>
                        <div className="mr-10" id="social-media">
                            <h2 className="text-white text-lg font-semibold mb-2">
                                Follow Us
                            </h2>
                            <div className="ml-5" id="social-media-icons">
                                <div className="sm:flex sm:items-center sm:justify-between">
                                    <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2">
                                        <CustomButton
                                            type="icons"
                                            linkTo={
                                                "https://www.facebook.com/openagent"
                                            }>
                                            <i className="fa-brands fa-facebook-f fa-xs"></i>
                                            <span className="sr-only">
                                                Facebook page
                                            </span>
                                        </CustomButton>
                                        <CustomButton
                                            type="icons"
                                            linkTo={
                                                "https://twitter.com/openagentoz"
                                            }>
                                            <i className="fa-brands fa-twitter fa-xs"></i>
                                            <span className="sr-only">
                                                Twitter page
                                            </span>
                                        </CustomButton>
                                        <CustomButton
                                            type="icons"
                                            linkTo={
                                                "https://www.linkedin.com/company/openagent-com-au"
                                            }>
                                            <i className="fa-brands fa-linkedin-in fa-xs"></i>
                                            <span className="sr-only">
                                                LinkedIn page
                                            </span>
                                        </CustomButton>
                                        <CustomButton
                                            type="icons"
                                            linkTo={
                                                "https://www.youtube.com/channel/UCuYgvKggXpYWCZ8LEtMA0lg"
                                            }>
                                            <i className="fa-brands fa-youtube fa-xs"></i>
                                            <span className="sr-only">
                                                Youtube page
                                            </span>
                                        </CustomButton>
                                        <CustomButton
                                            type="icons"
                                            linkTo={
                                                "https://www.instagram.com/openagentau/"
                                            }>
                                            <i className="fa-brands fa-instagram fa-xs"></i>
                                            <span className="sr-only">
                                                Instagram page
                                            </span>
                                        </CustomButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
