export default function ImageOverlay(props) {
    return (
        <div className="flex h-[100vh] items-center justify-center relative">
            <img src="src/assets/signup.png" alt="Sign Up Illustration"
                 className="absolute inset-0 w-full h-full object-cover"/>
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                <div id="firejet-html-app">
                    <div
                        className="flex w-full flex-col items-center gap-y-1 text-center leading-[normal] tracking-[0px]">
                        <div
                            className="font-lucida-calligraphy rounded-[42px] bg-[dodgerblue] px-7 py-[26px] text-4xl uppercase italic leading-[27px]">
                            F
                        </div>
                        <div className="flex items-center justify-center self-stretch pt-0.5">
                            <div className="font-inter text-center text-[40px] font-bold leading-[normal]">
                                <span><span className="text-center text-white">Furni</span><span
                                    className="text-center text-[dodgerblue]">Flex</span></span>
                            </div>
                        </div>
                        <div
                            className="font-barlow flex items-center justify-center self-stretch font-medium leading-[normal] text-[silver]">
                            <p className="text-center pl-36 pr-36">
                                Discover a seamless shopping experience with our curated collection of products. From
                                fashion to electronics, we bring quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}