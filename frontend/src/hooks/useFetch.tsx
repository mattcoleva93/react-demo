import { useState, useEffect } from 'react';

export interface UseFetchRequest {
    uri: string;
    options?: RequestInit
}

export interface UserFetchResponse<T> {
    data?: T;
    loading: boolean;
    error?: string;
}

export function useFetch<T>(request: UseFetchRequest): UserFetchResponse<T> {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();
    const uri = request.uri;
    const options = request.options;
    useEffect(() => {
        if (!uri) return;
        let fetchRequest: Promise<Response>;

        if (options) {
            fetchRequest = fetch(uri, options);
        }
        else {
            fetchRequest = fetch(uri);
        }

        fetchRequest
            .then((response) => response.json() as Promise<T>)
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [uri, options]);

    return {
        data: data,
        loading: loading,
        error: error
    };
}