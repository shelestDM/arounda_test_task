import { useState } from "react"

export const useFetch = (callback) =>{
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState('');

    const fetchData = async () =>{
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            setError(e.message)
        }   finally{
            setIsLoading(false);
        }
    }

    return [fetchData, isLoading, error];
}