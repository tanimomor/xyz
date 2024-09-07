import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(() => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (loggedInUser) {
            const user = users.find(user => user.email === loggedInUser.email && !user.deactivated);
            if (user) {
                return {
                    isAuthenticated: true,
                    user,
                    cart: user.cart || []
                };
            }
        }

        return {
            isAuthenticated: false,
            user: null,
            cart: []
        };
    });

    const signUp = (userData) => {
        return new Promise((resolve, reject) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const existingUser = users.find(user => user.email === userData.email);

            if (!existingUser) {
                const newUser = {
                    ...userData,
                    cart: [],
                    deactivated: false
                };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // Update authState and resolve the promise afterwards
                setAuthState({
                    isAuthenticated: true,
                    user: newUser,
                    cart: []
                });

                // Persist the authenticated user to localStorage
                localStorage.setItem('loggedInUser', JSON.stringify(newUser));

                // Resolve the promise after the state has been set
                resolve();
            } else {
                // Reject the promise if the user already exists
                reject(new Error('User already exists'));
            }
        });
    };


    const signIn = (credentials) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log(['credentials', credentials]);
        const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
        console.log('users', users);
        console.log("User found: ", user)
        if (user) {
            setAuthState({
                isAuthenticated: true,
                user,
                cart: user.cart || []
            });

            localStorage.setItem('loggedInUser', JSON.stringify(user));
        } else {
            console.log('Invalid credentials or user deactivated');
        }
    };

    useEffect(() => {
        console.log('Authenticated user', authState.isAuthenticated);
    }, [authState]);

    const logout = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map(user =>
            user.email === authState.user.email
                ? { ...user, deactivated: true }
                : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        setAuthState({
            isAuthenticated: false,
            user: null,
            cart: []
        });
        localStorage.removeItem('loggedInUser');
    };

    const addToCart = (product) => {
        if (authState.isAuthenticated) {
            const updatedCart = [...authState.cart, product];
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const updatedUsers = users.map(user =>
                user.email === authState.user.email
                    ? { ...user, cart: updatedCart }
                    : user
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            setAuthState({
                ...authState,
                cart: updatedCart
            });
        }
    };

    useEffect(() => {
        if (authState.isAuthenticated) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const updatedUsers = users.map(user =>
                user.email === authState.user.email
                    ? { ...user, cart: authState.cart }
                    : user
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        }
    }, [authState]);

    return (
        <AuthContext.Provider value={{ authState, signUp, signIn, logout, addToCart }}>
            {children}
        </AuthContext.Provider>
    );
};
