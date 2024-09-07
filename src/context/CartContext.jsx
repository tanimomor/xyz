import {createContext, useEffect, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
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
    };



    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart(cart.map(item =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decreaseQuantity = (productId) => {
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
