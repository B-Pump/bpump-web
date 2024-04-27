import { create } from "zustand";

type CartStoreType = {
    content: CartItem[];
    setContent: (updateFn: (prevContent: CartItem[]) => CartItem[]) => void;
};

export const useCartStore = create<CartStoreType>((set) => ({
    content: [],
    setContent: (updateFn) => set((state) => ({ content: updateFn(state.content) })),
}));
