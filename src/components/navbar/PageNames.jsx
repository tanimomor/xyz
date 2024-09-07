import { useNavigate, useLocation } from "react-router-dom";

export default function PageNames() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-[11px] text-lg leading-[normal] text-neutral-800">
            <div className="flex items-center justify-center gap-x-7">
                <div className="font-medium">Home</div>
                <div
                    className={`${
                        (location.pathname === "/products" || location.pathname === "/")
                            ? "rounded-md bg-neutral-50 px-5 py-2 text-center font-semibold"
                            : "font-medium cursor-pointer"
                    }`}
                    onClick={() => navigate("/")}
                >
                    Products
                </div>
                <div className="font-medium">Categories</div>
                <div className="font-medium">Custom</div>
                <div className="font-medium">Blog</div>
            </div>
        </div>
    );
}
