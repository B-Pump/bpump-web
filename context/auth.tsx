"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { API_URL } from "@/lib/api";
import { useLocalStorage } from "@/lib/storage";

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null };
    onRegister?: (username: string, password: string) => Promise<any>;
    onLogin?: (username: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
    onDelete?: (username: string) => Promise<any>;
}

const TOKEN_KEY = "auth_jwt";

const AuthContext = createContext<AuthProps>({});

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
    const { setItem, getItem, removeItem } = useLocalStorage(TOKEN_KEY);

    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null,
    });

    useEffect(() => {
        const loadToken = () => {
            const token = getItem(TOKEN_KEY);
            if (token) {
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                setAuthState({
                    token: token,
                    authenticated: true,
                });
            }
        };
        loadToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const register = (username: string, password: string) => {
        return axios
            .post(`${API_URL}/register`, { username, password })
            .then((response) => response.data)
            .catch((error) => ({ error: true, msg: error }));
    };

    const login = (username: string, password: string) => {
        return axios
            .post(`${API_URL}/login`, { username, password })
            .then((response) => {
                setAuthState({
                    token: username,
                    authenticated: true,
                });
                axios.defaults.headers.common["Authorization"] = `Bearer ${username}`;
                setItem(username);
                return response.data;
            })
            .catch((error) => ({ error: true, msg: error }));
    };

    const logout = () => {
        removeItem(TOKEN_KEY);

        axios.defaults.headers.common["Authorization"] = "";

        setAuthState({
            token: null,
            authenticated: false,
        });

        return Promise.resolve();
    };

    const remove = (username: string) => {
        return axios
            .post(`${API_URL}/delete?username=${username}`)
            .then((response) => {
                logout();
                return response.data;
            })
            .catch((error) => ({ error: true, msg: error }));
    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        onDelete: remove,
        authState,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
