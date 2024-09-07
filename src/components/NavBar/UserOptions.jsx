import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext.jsx';  // Import your CartContext
import { AuthContext } from '../../context/AuthContext.jsx';  // Import AuthContext

export default function UserOptions() {
    const { cart } = useContext(CartContext);  // Access the cart from context
    const { authState } = useContext(AuthContext);  // Access authState from AuthContext
    const cartItemCount = cart.reduce((total, product) => total + product.quantity, 0);  // Calculate total items in the cart
    const navigate = useNavigate();
    const isLoggedIn = authState.isAuthenticated;  // Determine if user is logged in

    return (
        <div className="flex items-center justify-center gap-x-6">
            {/* Cart Icon with Notification Badge */}
            <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center cursor-pointer" onClick={() => navigate('/cart')}>
                <img
                    src="src/assets/logo/products/Basket.svg"
                    loading="lazy"
                    className="h-8 w-8 rounded-full border border-solid border-neutral-100 object-cover object-center"
                    alt="Cart"
                />
                <div
                    className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-800 text-white text-[11px] font-medium leading-[normal]"
                >
                    {cartItemCount}  {/* Display the number of products in the cart */}
                </div>
            </div>

            {/* User Image or Login Button */}
            {isLoggedIn ? (
                <img
                    src="src/assets/logo/default_user.png"  // Replace with the actual user profile image source
                    loading="lazy"
                    className="h-10 w-10 rounded-full border border-solid border-neutral-100 object-cover object-center"
                    alt="User Profile"
                />
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
