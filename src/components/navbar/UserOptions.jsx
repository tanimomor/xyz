import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../../context/CartContext.jsx';  // Import your CartContext
import { AuthContext } from '../../context/AuthContext.jsx';  // Import AuthContext

export default function UserOptions() {
    const { cart } = useContext(CartContext);  // Access the cart from context
    const { authState, logout } = useContext(AuthContext);  // Access authState and logout function from AuthContext
    const cartItemCount = cart.reduce((total, product) => total + 1, 0);  // Calculate total items in the cart
    const navigate = useNavigate();
    const location = useLocation();
    const isLoggedIn = authState.isAuthenticated;  // Determine if user is logged in

    // State to control dropdown menu visibility
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Check if the current route is '/cart'
    const isCartPage = location.pathname === '/cart';

    // Handle logout
    const handleLogout = () => {
        logout();  // Call logout function from AuthContext
        navigate('/');  // Redirect to the homepage after logout
    };

    // Handle cart icon click
    const handleCartClick = () => {
        if (isLoggedIn) {
            navigate('/cart');  // Navigate to the cart page if the user is logged in
        } else {
            navigate('/login', { state: { from: location.pathname } });  // Redirect to login and pass the intended destination
        }
    };

    return (
        <div className="relative flex items-center justify-center gap-x-6">
            {/* Cart Icon with Notification Badge */}
            <div
                className={`relative flex h-10 w-10 flex-shrink-0 items-center justify-center cursor-pointer ${isCartPage ? 'rounded-md bg-gray-100 text-center font-semibold' : ''}`}
                onClick={handleCartClick}
            >
                <img
                    src="/assets/logo/products/Basket.svg"
                    loading="lazy"
                    className={`h-8 w-8 rounded-full object-cover object-center ${isCartPage ? 'opacity-100' : 'opacity-75'} z-0`}  // Ensure image is above background
                    alt="Cart"
                />
                <div
                    className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-800 text-white text-[11px] font-medium leading-[normal] z-20"
                >
                    {cartItemCount}  {/* Display the number of products in the cart */}
                </div>
            </div>

            {/* User Image or Login Button */}
            {isLoggedIn ? (
                <div className="relative">
                    <img
                        src="/assets/logo/default_user.png"  // Replace with the actual user profile image source
                        loading="lazy"
                        className="h-10 w-10 rounded-full border border-solid border-neutral-100 object-cover object-center cursor-pointer"
                        alt="User Profile"
                        onClick={() => setMenuOpen(!isMenuOpen)}  // Toggle dropdown menu visibility
                    />
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                            <button
                                className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                                onClick={handleLogout}
                            >
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <button
                    className="h-10 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={() => navigate('/login')}
                >
                    Log In
                </button>
            )}
        </div>
    );
}
