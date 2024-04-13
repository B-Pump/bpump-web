export async function getItemAsync(key: string): Promise<string | null> {
    return new Promise<string | null>((resolve, reject) => {
        try {
            const value = window.localStorage.getItem(key);
            resolve(value);
        } catch (error) {
            reject(error);
        }
    });
}

export async function setItemAsync(key: string, value: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        try {
            window.localStorage.setItem(key, value);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

export async function removeItemAsync(key: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        try {
            window.localStorage.removeItem(key);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}
