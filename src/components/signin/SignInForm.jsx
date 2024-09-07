import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

export default function SignInForm() {
    const { authState, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [authError, setAuthError] = useState(""); // To handle authentication errors

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.password) newErrors.password = "Password is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setAuthError(""); // Reset authentication error

            try {
                const success = await signIn(formData);

                if (!success) {
                    // Handle failed authentication
                    setAuthError("Invalid email or password.");
                }
            } catch (error) {
                // Optionally handle any unexpected errors that might occur during sign-in
                setAuthError("An unexpected error occurred. Please try again.");
            }
        }
    };


    useEffect(() => {
        if (authState.isAuthenticated) {
            // Navigate back to the previous page or /products if no previous page
            const previousPage = location.state?.from || "/products";
            navigate(previousPage);
        }
    }, [authState]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col pt-3">
                <div className="w-[452px] flex flex-col justify-end gap-y-0.5 rounded-[5px] border border-solid border-x-[gainsboro] border-y-[gainsboro] bg-white px-2.5 pb-[5px] pt-2.5">
                    <div className="flex h-3 flex-shrink-0 items-start">
                        <div className="flex h-full w-full flex-shrink-0 items-center overflow-clip">
                            <div className="mb-[1.5px] text-xs leading-[1.28] text-neutral-500">
                                Email address
                            </div>
                        </div>
                    </div>
                    <input
                        name="email"
                        type="email"
                        className="self-stretch text-sm leading-normal bg-white"
                        placeholder="jordan@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
                </div>
            </div>
            <div className="flex flex-col justify-end self-stretch pt-3">
                <div className="flex items-center justify-center rounded-[5px] border border-solid border-x-[gainsboro] border-y-[gainsboro] bg-white pl-2.5">
                    <div className="flex flex-grow flex-wrap items-center justify-center gap-x-[11px] gap-y-[11px] min-[490px]:flex-nowrap">
                        <div className="flex flex-grow flex-col items-start gap-y-0.5 pt-0.5">
                            <div className="text-xs leading-[1.28] text-neutral-500">
                                Password
                            </div>
                            <input
                                name="password"
                                type="password"
                                className="self-stretch text-sm leading-normal bg-white"
                                placeholder="*********"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <div className="text-red-500 text-xs">{errors.password}</div>}
                        </div>
                        <object data="/assets/Tooltip.svg" className="h-[52px] w-12 flex-shrink-0"></object>
                    </div>
                </div>
            </div>

            {authError && <div className="text-red-500 text-xs pt-2">{authError}</div>} {/* Display auth error */}

            <div className="flex flex-col justify-end self-stretch pt-[18px]">
                <button type="submit" className="flex items-center justify-center rounded-md bg-black p-5">
                    <div className="text-center text-[17px] font-semibold capitalize leading-none text-white">
                        Sign In
                    </div>
                </button>
            </div>
        </form>
    );
}
