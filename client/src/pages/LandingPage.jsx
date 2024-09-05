import CustomButton from "../components/CustomButton";
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

                <CustomButton linkTo={"/contact-us"}>Contact Us</CustomButton>

                <CustomButton linkTo={"/contact-list"}>
                    Contact Lists
                </CustomButton>
            </div>
        </MainContainer>
    );
};

export default LandingPage;
