import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

class Footer extends React.Component {
    render() {
        return (
            <footer class="fixed bottom-0 w-screen">
                <nav class="bg-neutral-800 border-gray-200 py-8 px-20">
                    <div class="">
                        <div class="flex justify-between items-center">
                            <div>
                                <a href="/" class="">
                                    <img
                                        src="https://www.openagent.com.au/dist/assets/images/footer/openagentlogo-mono.png"
                                        class="mr-3 mb-2 h-6"
                                        alt="OpenAgent Logo"
                                    />
                                </a>
                                <div class="flex justify-between gap-3">
                                    <span class="text-xs text-white">
                                        © 2024{" "}
                                    </span>
                                    <a
                                        href="https://www.openagent.com.au/privacy-policy"
                                        class="text-xs text-gray-400 hover:border-b">
                                        Privacy Policy
                                    </a>
                                    <a
                                        href="https://www.openagent.com.au/privacy-policy"
                                        class="text-xs text-gray-400 hover:border-b">
                                        Terms and Conditions
                                    </a>
                                    <a
                                        href="https://www.openagent.com.au/complaints-policy"
                                        class="text-xs text-gray-400 hover:border-b">
                                        Complaints Policy
                                    </a>
                                    <a
                                        href="https://www.openagent.com.au/sitemap"
                                        class="text-xs text-gray-400 hover:border-b">
                                        Site Map
                                    </a>
                                    <a
                                        href="https://s3.ap-southeast-2.amazonaws.com/openagent.strapi/OAPL_Website_Credit_Guide_Q1_2024_47a402149b.pdf"
                                        class="text-xs text-gray-400 hover:border-b">
                                        Credit Guide
                                    </a>
                                </div>
                            </div>
                            <div class="mr-10" id="social-media">
                                <h2 class="text-white text-lg font-semibold mb-4">
                                    Follow Us
                                </h2>
                                <div class="ml-5" id="social-media-icons">
                                    <div class="sm:flex sm:items-center sm:justify-between">
                                        <div class="flex mt-4 sm:justify-center sm:mt-0 gap-2">
                                            <a
                                                href="https://www.facebook.com/openagent"
                                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full border border-gray-400 py-1 px-3">
                                                <i class="fa-brands fa-facebook-f fa-xs"></i>
                                                <span class="sr-only">
                                                    Facebook page
                                                </span>
                                            </a>
                                            <a
                                                href="https://twitter.com/openagentoz"
                                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full border border-gray-400 py-1 px-3">
                                                <i class="fa-brands fa-twitter fa-xs"></i>
                                                <span class="sr-only">
                                                    Facebook page
                                                </span>
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/company/openagent-com-au"
                                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full border border-gray-400 py-1 px-3">
                                                <i class="fa-brands fa-linkedin-in fa-xs"></i>
                                                <span class="sr-only">
                                                    Facebook page
                                                </span>
                                            </a>
                                            <a
                                                href="https://www.youtube.com/channel/UCuYgvKggXpYWCZ8LEtMA0lg"
                                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full border border-gray-400 py-1 px-2.5">
                                                <i class="fa-brands fa-youtube fa-xs"></i>
                                                <span class="sr-only">
                                                    Facebook page
                                                </span>
                                            </a>
                                            <a
                                                href="https://www.instagram.com/openagentau/"
                                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full border border-gray-400 py-1 px-3">
                                                <i class="fa-brands fa-instagram fa-xs"></i>
                                                <span class="sr-only">
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
    }
}

export default Footer;
