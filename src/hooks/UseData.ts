import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchGenresResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[])=>{
    const [isLoadig, setIsLoadig] = useState(false);
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const controller = new AbortController();
      setIsLoadig(true);
      apiClient
        .get<FetchGenresResponse <T>>(endPoint, { signal: controller.signal , ...requestConfig})
        .then((res) => {
          setIsLoadig(false);
          setData(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) {
            return;
          }
          setError(err.message);
          setIsLoadig(false);
        });
  
      return () => controller.abort();
    }, deps ? [...deps] : []); 
  
    return { data, error, isLoadig };
}

export default useData