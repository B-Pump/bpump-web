"use client";

import { useEffect } from "react";
import { create } from "zustand";

import { API_URL } from "@/lib/api";

type AuthStore = {
    token: string | null;
    authenticated: boolean;
    register: (username: string, password: string) => Promise<any>;
    login: (username: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
    remove: (username: string) => Promise<any>;
    initialize: () => void;
};

export const AUTH_KEY = "auth_jwt";

const useAuthStore = create<AuthStore>((set) => ({
    token: null,
    authenticated: false,
    register: async (username: string, password: string) => {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                return { error: true };
            }

            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error("Error while registering user:", error);
            return { error: true };
        }
    },
    login: async (username: string, password: string) => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                return { error: true };
            }

            const jsonData = await response.json();

            set({ token: username, authenticated: true });
            localStorage.setItem(AUTH_KEY, username);

            return jsonData;
        } catch (error) {
            console.error("Error while logging in user:", error);
            return { error: true };
        }
    },
    logout: async () => {
        localStorage.removeItem(AUTH_KEY);
        set({ token: null, authenticated: false });
    },
    remove: async (username: string) => {
        try {
            const response = await fetch(`${API_URL}/delete?username=${username}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(AUTH_KEY)}`,
                },
            });

            if (!response.ok) {
                return { error: true };
            }

            localStorage.removeItem(AUTH_KEY);
            set({ token: null, authenticated: false });

            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error("Error while removing user:", error);
            return { error: true };
        }
    },
    initialize: async () => {
        const token = localStorage.getItem(AUTH_KEY);
        if (token) {
            set({ token, authenticated: true });
        }
    },
}));

export const useAuth = () => {
    const store = useAuthStore();

    useEffect(() => {
        store.initialize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return store;
};
