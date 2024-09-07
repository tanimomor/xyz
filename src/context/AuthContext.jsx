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

    useEffect(() => {
        if (authState.isAuthenticated) {
            localStorage.setItem('user', JSON.stringify(authState.user));
        }
        console.log('auth state', authState);
    }, [authState]);

    return (
        <AuthContext.Provider value={{ authState, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};
