import axios, { Method } from "axios";
import { useEffect, useState } from "react";

export const API_URL = "https://bpump-api-glki.onrender.com"; // WARNING : do not put any "/" at the end of this url

export default function useFetch(method: Method, endpoint: string, body: any = {}) {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const options = {
        method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data);
        } catch (error) {
            console.error("Error while fetching API :", endpoint, error);
            setError(error);
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
