import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";


interface FetchGenresResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endPoint: string)=>{
    const [isLoadig, setIsLoadig] = useState(false);
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const controller = new AbortController();
      setIsLoadig(true);
      apiClient
        .get<FetchGenresResponse <T>>(endPoint, { signal: controller.signal })
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
    }, []); 
  
    return { data, error, isLoadig };
}

export default useData