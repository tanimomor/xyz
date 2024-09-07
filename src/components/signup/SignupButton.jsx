export default function SignupButton({ onClick }) {
    return <div className="flex flex-col justify-end self-stretch pt-[18px]">
        <button className="flex items-center justify-center rounded-md bg-black p-5">
            <div className="text-center text-[17px] font-semibold capitalize leading-none text-white">
                Signup
            </div>
        </button>
    </div>;
}