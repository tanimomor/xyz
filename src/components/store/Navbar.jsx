import Logo from "../navbar/Logo.jsx";
import UserOptions from "../navbar/UserOptions.jsx";
import PageNames from "../navbar/PageNames.jsx";

export default function Navbar() {
    return (
        <div className="w-[1440px] mx-auto mt-10">
            <div className="flex justify-between gap-x-1.5 gap-y-1.5 px-[120px]">
                <Logo/>
                <PageNames/>
                <UserOptions/>
            </div>
        </div>
    );
}
