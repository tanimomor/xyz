export default function WelcomeMessage() {
    return (
        <div className="w-full">
            <div className="font-barlow flex w-full flex-col gap-y-0.5 py-7 font-medium leading-[normal] tracking-[0px]">
                <div className="self-stretch text-[32px] leading-[normal]">
                    Welcome Back!
                </div>
                <div className="leading-[normal] text-neutral-500">
                    Enter your Credentials to access your account
                </div>
            </div>
        </div>
    );
}
