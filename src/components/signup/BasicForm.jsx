import {useState, useContext, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

export default function BasicForm() {
    const { authState, signUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState({});
    const [authError, setAuthError] = useState(""); // To handle authentication errors

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.lastName) newErrors.lastName = "Last name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.password) newErrors.password = "Password is required.";
        if (!isChecked) newErrors.checkbox = "You must agree to the terms.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setAuthError(""); // Reset authentication error

            try {
                await signUp(formData);  // Await signUp function

                // If authentication succeeds, navigate to the previous page or /products

            } catch (error) {
                // Handle any errors that occur during sign up
                setAuthError(error.message || "Sign up failed. Please try again. 2");
            }
        }
    };

    useEffect(() => {
        if (authState.isAuthenticated) {
            const previousPage = location.state?.from || "/products";
            navigate(previousPage);
        }
    })
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-3.5 self-stretch pt-[15px] text-xs leading-[1.28] text-neutral-500 min-[490px]:flex-nowrap">
                <div className="flex w-56 flex-shrink-0 flex-col items-start justify-center gap-y-0.5 rounded-[5px] border border-solid border-x-[gainsboro] border-y-[gainsboro] bg-white px-2.5 pb-[5px] pt-[7px]">
                    <div>First name (optional)</div>
                    <input
                        name="firstName"
                        className="self-stretch text-sm leading-normal bg-white"
                        placeholder="Jordan"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    {errors.firstName && <div className="text-red-500 text-xs">{errors.firstName}</div>}
                </div>
                <div className="flex w-56 flex-shrink-0 flex-col items-start justify-center gap-y-0.5 rounded-[5px] border border-solid border-x-[gainsboro] border-y-[gainsboro] bg-white px-2.5 pb-[5px] pt-[7px]">
                    <div>Last name (optional)</div>
                    <input
                        name="lastName"
                        className="self-stretch text-sm leading-normal bg-white"
                        placeholder="Ken"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    {errors.lastName && <div className="text-red-500 text-xs">{errors.lastName}</div>}
                </div>
            </div>
            <div className="flex flex-col justify-end self-stretch pt-3">
                <div className="flex flex-col justify-end gap-y-0.5 rounded-[5px] border border-solid border-x-[gainsboro] border-y-[gainsboro] bg-white px-2.5 pb-[5px] pt-2.5">
                    <div className="flex h-3 flex-shrink-0 items-start">
                        <div className="flex h-full w-full flex-shrink-0 items-center overflow-clip">
                            <div className="mb-[1.5px] text-xs leading-[1.28] text-neutral-500">
                                Email address
                            </div>
                        </div>
                    </div>
                    <input
                        name="email"
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
            <div className="flex items-end self-stretch pt-3">
                <div className="flex items-center justify-center gap-x-[5px]">
                    <input
                        type="checkbox"
                        className="h-[11px] w-[11px] flex-shrink-0 rounded-sm border border-solid border-x-black border-y-black bg-white"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <div className="text-sm font-medium leading-[normal]">
                        <span>I agree to the <span className="underline">Terms &amp; Policy</span></span>
                    </div>
                </div>
                {errors.checkbox && <div className="text-red-500 text-xs">{errors.checkbox}</div>}
            </div>

            {authError && <div className="text-red-500 text-xs pt-2">{authError}</div>} {/* Display auth error */}

            <div className="flex flex-col justify-end self-stretch pt-[18px]">
                <button type="submit" className="flex items-center justify-center rounded-md bg-black p-5">
                    <div className="text-center text-[17px] font-semibold capitalize leading-none text-white">
                        Signup
                    </div>
                </button>
            </div>
        </form>
    );
}
