import { createContext, useContext, useEffect, useState } from "react";
import {AuthContext} from "./AuthContext.jsx";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { authState } = useContext(AuthContext); // Access authState
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (authState.isAuthenticated) {
            // Load the cart from localStorage for the current user
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.email === authState.user.email);
            if (user) {
                setCart(user.cart || []);
            }
        } else {
            // Reset cart if no user is authenticated
            setCart([]);
        }
    }, [authState.isAuthenticated, authState.user]);

    useEffect(() => {
        if (authState.isAuthenticated) {
            // Save the cart to localStorage for the current user
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const updatedUsers = users.map(user =>
                user.email === authState.user.email
                    ? { ...user, cart }
                    : user
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        }
    }, [cart, authState.isAuthenticated, authState.user]);

    const addToCart = (product) => {
        if (authState.isAuthenticated) {
            const existingProduct = cart.find(item => item.id === product.id);

            if (existingProduct) {
                setCart(cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ));
            } else {
                setCart([...cart, { ...product, quantity: 1 }]);
            }
        }
    };

    const removeFromCart = (productId) => {
        if (authState.isAuthenticated) {
            setCart(cart.filter(item => item.id !== productId));
        }
    };

    const increaseQuantity = (productId) => {
        if (authState.isAuthenticated) {
            setCart(cart.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        }
    };

    const decreaseQuantity = (productId) => {
        if (authState.isAuthenticated) {
            const product = cart.find(item => item.id === productId);

            if (product.quantity > 1) {
                setCart(cart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ));
            } else {
                removeFromCart(productId);
            }
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
