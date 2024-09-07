export default function Footer() {
    return (
        <div className="mt-8 flex flex-col justify-end gap-y-3 bg-neutral-950 px-[120px] pb-8 pt-20 text-lg font-semibold leading-[normal]">
            <div className="flex items-center justify-center pr-8">
                <div className="flex flex-grow flex-wrap items-start justify-between gap-x-1.5 gap-y-1.5 text-white min-[1430px]:flex-nowrap">
                    <div className="flex items-center justify-center gap-x-1.5">
                        <div className="font-lucida-calligraphy flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-[dodgerblue] px-[9.5px] py-[5.5px] text-center text-2xl uppercase italic leading-[27px]">
                            F
                        </div>
                        <div className="font-inter text-xl font-bold leading-[normal]">
                            <span>Furni<span className="text-[dodgerblue]">Flex</span></span>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-end gap-x-36 gap-y-[11px] pl-36 min-[1430px]:flex-nowrap">
                        <div className="flex flex-col items-start gap-y-3">
                            <a href="#" className="font-semibold mb-7 hover:underline">About US</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Master Plan</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Jobs</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Invest</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Pressroom</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Blog</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Contact</a>
                        </div>
                        <div className="flex flex-col items-start gap-y-3">
                            <a href="#" className="font-semibold mb-7 hover:underline">Explore EEVE</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Unlock my Robot Power</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Starlight</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Robot Platform</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">EEVE Roadmap</a>
                        </div>
                        <div className="flex flex-col items-start gap-y-3">
                            <a href="#" className="font-semibold mb-7 hover:underline">Community &amp; Support</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Willow X Community</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Developer &amp; Maker Access</a>
                            <a href="#" className="font-semibold text-[#81859F] hover:underline">Special Cases</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end pt-24">
                <div className="border-t border-solid border-blue-950 pt-10">
                    <div className="flex justify-between text-[lightslategray]">
                        <div className="flex items-center">
                            <div className="flex items-start gap-x-2 w-52">
                                <a href="#">
                                    <object data="src/assets/logo/socialmedia/facebook.png"
                                            className="h-5 w-5 flex-shrink-0"></object>
                                </a>
                                <a href="#">
                                    <object data="src/assets/logo/socialmedia/instagram.png"
                                            className="h-5 w-5 flex-shrink-0"></object>
                                </a>
                                <a href="#">
                                    <object data="src/assets/logo/socialmedia/new-twitter.png"
                                            className="h-5 w-5 flex-shrink-0"></object>
                                </a>
                                {/*<a href="#"><object data="src/assets/logo/socialmedia/linkedin-02.png" className="h-5 w-5 flex-shrink-0"></object></a>*/}
                            </div>
                        </div>
                        <div className="flex gap-x-6">
                            <a href="#" className="hover:underline">March22 Recap</a>
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">General Terms</a>
                            <a href="#" className="hover:underline">Contact</a>
                        </div>
                        <div className="flex w-52 gap-x-2">
                            <div className="h-[18px] w-[18px] flex-shrink-0">🇺🇸</div>
                            <div>United States (English)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-center pt-8">
                <div className="text-center text-gray-700">
                    EEVE © 2024. All rights reserved.
                </div>
            </div>
        </div>
    );
}
