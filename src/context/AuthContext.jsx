import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(() => {
        const user = localStorage.getItem('user');
        return user ? { isAuthenticated: true, user: JSON.parse(user) } : { isAuthenticated: false, user: null };
    });

    const signUp = (userData) => {
        setAuthState({
            isAuthenticated: true,
            user: userData,
        });
    };

    const signIn = (credentials) => {
        // Mock authentication process
        const mockUser = { email: credentials.email, name: "John Doe" }; // Mock user data

        // Here, you should replace this with actual authentication logic
        if (credentials.email === "test@example.com" && credentials.password === "password") {
            setAuthState({
                isAuthenticated: true,
                user: mockUser,
            });
        } else {
            console.log('Invalid credentials'); // Handle invalid credentials
        }
    };

    const logout = () => {
        // Clear user data from state
        setAuthState({
            isAuthenticated: false,
            user: null,
        });
        // Clear user data from localStorage
        localStorage.removeItem('user');
    };

    useEffect(() => {
        if (authState.isAuthenticated) {
            localStorage.setItem('user', JSON.stringify(authState.user));
        } else {
            localStorage.removeItem('user');
        }
        console.log('auth state', authState);
    }, [authState]);

    return (
        <AuthContext.Provider value={{ authState, signUp, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
