import Header from "../components/Header";
import Footer from "../components/Footer";

const ThankYou = () => {
    return (
        <div className="bg-gray-400 h-screen">
            <Header />
            <div className="flex items-center justify-center flex-col mt-40">
                <h1 className="mb-10 text-lg font-bold">
                    Thank you for submitting your contact info!
                </h1>

                <p className="mb-20">We will be in touch with you shortly</p>

                <p className="mb-2">Psst! Want to head back to home page?</p>
                <a
                    href="/"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Click Me!
                </a>
            </div>
            <Footer />
        </div>
    );
};

export default ThankYou;
