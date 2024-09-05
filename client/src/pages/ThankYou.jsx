import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div class="bg-gray-400 h-screen">
            <Header />
            <div class="flex items-center justify-center flex-col mt-40">
                <h1 class="mb-10 text-lg font-bold">
                    Thank you for submitting your contact info!
                </h1>

                <p class="mb-20">We will be in touch with you shortly</p>

                <p class="mb-2">Psst! Want to head back to home page?</p>
                <a
                    href="/"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Click Me!
                </a>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
