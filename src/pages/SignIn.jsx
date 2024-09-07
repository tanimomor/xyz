import { Link } from "react-router-dom";
import BasicForm from "../components/signup/BasicForm.jsx";
import SigninWithSocialMediaButton from "../components/signup/SigninWithSocialMediaButton.jsx";
import WelcomeMessage from "../components/signin/WelcomeMessage.jsx";
import ImageOverlay from "../components/signup/ImageOverlay.jsx";
import SignInForm from "../components/signin/SignInForm.jsx";

export default function SignIn() {
    return (
        <div className="h-[100vh] w-[full] flex">
            {/* Left side: Sign-up form */}
            <div className="flex w-[50vw] items-center justify-center">
                <div className="w-full flex items-center justify-center">
                    <div className="flex w-[500px] flex-col bg-red-300">
                        <div
                            className="font-barlow flex flex-col items-center justify-center gap-y-0.5 rounded-lg border border-solid border-neutral-100 bg-neutral-50 px-6 pb-10 pt-[26px] tracking-[0px]">
                            <WelcomeMessage />
                            <SignInForm />
                            <div className="flex items-center justify-center self-stretch px-[17px] pt-3">
                                <div className="flex-grow pt-0.5">
                                    <object data="/assets/Line.svg" className="h-0.5 flex-shrink-0"></object>
                                </div>
                                <div className="flex w-0 flex-shrink-0 items-center">
                                    <div className="ml-[-225.5px] w-5 flex-shrink-0 bg-neutral-50 px-1 text-center text-xs font-medium leading-[normal]">
                                        or
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 self-stretch pt-[13px] text-xs font-medium leading-[normal] min-[490px]:flex-nowrap">
                                <SigninWithSocialMediaButton name="Google" logo="google.png" />
                                <SigninWithSocialMediaButton name="Apple" logo="apple.png" />
                            </div>
                            <div className="flex items-end justify-center self-stretch pt-[18px]">
                                <div className="text-center text-sm font-medium leading-[normal]">
                                    <span>Do not have an account? <span className="text-center text-indigo-700">
                                        <Link to="/register">Sign Up</Link></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right side: Image with overlay */}
            <div className="w-[50vw]">
                <ImageOverlay />
            </div>
        </div>
    );
}
