import MainContainer from "../components/MainContainer";

const LandingPage = () => {
    return (
        <MainContainer>
            <div className="flex items-center justify-center flex-col mt-20">
                <h1 className="mb-10 text-lg font-bold">
                    Welcome to the Landing Page of this Interview App!
                </h1>

                <p className="mb-10">
                    Please select one of the below options to proceed!
                </p>

                <a
                    href="/contact-us"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Contact Us
                </a>

                <a
                    href="/contact-list"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Contact Lists
                </a>
            </div>
        </MainContainer>
    );
};

export default LandingPage;
