import { useEffect, useState } from "react";

export const API_URL = "https://bpump-api.vercel.app";

export function useFetch(method: string, endpoint: string) {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`${API_URL}/${endpoint}`, {
                method,
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error("Error while fetching API :", endpoint, error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refetch = () => fetchData();

    return { data, isLoading, error, refetch };
}
