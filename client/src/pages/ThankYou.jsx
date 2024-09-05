import CustomButton from "../components/CustomButton";
import MainContainer from "../components/MainContainer";

const ThankYou = () => {
    return (
        <MainContainer>
            <div className="flex items-center justify-center flex-col mt-40">
                <h1 className="mb-10 text-lg font-bold">
                    Thank you for submitting your contact info!
                </h1>

                <p className="mb-10">We will be in touch with you shortly</p>

                <p className="mb-2">Psst! Want to head back to home page?</p>
                <CustomButton>Click Me!</CustomButton>
            </div>
        </MainContainer>
    );
};

export default ThankYou;
