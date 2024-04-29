import { create } from "zustand";

type DashStoreType = {
    tab: string;
    setTab: (tab: string) => void;
};

export const useDashStore = create<DashStoreType>((set) => ({
    tab: "account",
    setTab: (tab) => set({ tab }),
}));
