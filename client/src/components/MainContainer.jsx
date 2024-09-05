import Header from "../components/Header";
import Footer from "../components/Footer";

const MainContainer = ({ children }) => {
    return (
        <div className="bg-gray-300 h-screen flex flex-col">
            <Header />
            <div className="flex items-center justify-center w-screen pb-40 overflow-scroll">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default MainContainer;
