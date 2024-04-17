import axios from "axios";
import { useEffect } from "react";
import { create } from "zustand";

import { API_URL } from "@/lib/api";
import { getItemAsync, removeItemAsync, setItemAsync } from "@/lib/storage";

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
            const response = await axios.post(`${API_URL}/register`, { username, password });
            return response;
        } catch (error) {
            return { error: true };
        }
    },
    login: async (username: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/login`, { username, password });

            set({ token: username, authenticated: true });
            axios.defaults.headers.common["Authorization"] = `Bearer ${username}`;
            await setItemAsync(AUTH_KEY, username);

            return response;
        } catch (error) {
            return { error: true };
        }
    },
    logout: async () => {
        await removeItemAsync(AUTH_KEY);
        axios.defaults.headers.common["Authorization"] = "";
        set({ token: null, authenticated: false });
    },
    remove: async (username: string) => {
        try {
            const response = await axios.delete(`${API_URL}/delete?username=${username}`);

            // TODO: get().logout ?
            await removeItemAsync(AUTH_KEY);
            axios.defaults.headers.common["Authorization"] = "";
            set({ token: null, authenticated: false });

            return response;
        } catch (error) {
            return { error: true };
        }
    },
    initialize: async () => {
        const token = await getItemAsync(AUTH_KEY);
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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
