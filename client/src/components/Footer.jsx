import React from "react";

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
                                <a
                                    href="https://www.openagent.com.au/privacy-policy"
                                    className="text-xs text-gray-400 hover:border-b">
                                    Privacy Policy
                                </a>
                                <a
                                    href="https://www.openagent.com.au/privacy-policy"
                                    className="text-xs text-gray-400 hover:border-b">
                                    Terms and Conditions
                                </a>
                                <a
                                    href="https://www.openagent.com.au/complaints-policy"
                                    className="text-xs text-gray-400 hover:border-b">
                                    Complaints Policy
                                </a>
                                <a
                                    href="https://www.openagent.com.au/sitemap"
                                    className="text-xs text-gray-400 hover:border-b">
                                    Site Map
                                </a>
                                <a
                                    href="https://s3.ap-southeast-2.amazonaws.com/openagent.strapi/OAPL_Website_Credit_Guide_Q1_2024_47a402149b.pdf"
                                    className="text-xs text-gray-400 hover:border-b">
                                    Credit Guide
                                </a>
                            </div>
                        </div>
                        <div className="mr-10" id="social-media">
                            <h2 className="text-white text-lg font-semibold mb-2">
                                Follow Us
                            </h2>
                            <div className="ml-5" id="social-media-icons">
                                <div className="sm:flex sm:items-center sm:justify-between">
                                    <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2">
                                        <a
                                            href="https://www.facebook.com/openagent"
                                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full border border-gray-400 py-1 px-3">
                                            <i className="fa-brands fa-facebook-f fa-xs"></i>
                                            <span className="sr-only">
                                                Facebook page
                                            </span>
                                        </a>
                                        <a
                                            href="https://twitter.com/openagentoz"
                                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full border border-gray-400 py-1 px-3">
                                            <i className="fa-brands fa-twitter fa-xs"></i>
                                            <span className="sr-only">
                                                Facebook page
                                            </span>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/company/openagent-com-au"
                                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full border border-gray-400 py-1 px-3">
                                            <i className="fa-brands fa-linkedin-in fa-xs"></i>
                                            <span className="sr-only">
                                                Facebook page
                                            </span>
                                        </a>
                                        <a
                                            href="https://www.youtube.com/channel/UCuYgvKggXpYWCZ8LEtMA0lg"
                                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full border border-gray-400 py-1 px-2.5">
                                            <i className="fa-brands fa-youtube fa-xs"></i>
                                            <span className="sr-only">
                                                Facebook page
                                            </span>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/openagentau/"
                                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full border border-gray-400 py-1 px-3">
                                            <i className="fa-brands fa-instagram fa-xs"></i>
                                            <span className="sr-only">
                                                Facebook page
                                            </span>
                                        </a>
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
