export const useLocalStorage = (key: string) => {
    const setItem = (value: string) => {
        try {
            window.localStorage.setItem(key, value);
        } catch (error) {
            console.error(error);
        }
    };

    const getItem = (key: string) => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) return item;
        } catch (error) {
            console.error(error);
        }
    };

    const removeItem = (key: string) => {
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.error(error);
        }
    };

    return { setItem, getItem, removeItem };
};
