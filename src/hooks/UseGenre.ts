import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number,
    name: string
}

interface FetchGenresResponse {
    count: number
    results: Genre[]
}

const useGenres = ()=>{
    const [isLoadig, setIsLoadig] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const controller = new AbortController();
      setIsLoadig(true);
      apiClient
        .get<FetchGenresResponse>("genres", { signal: controller.signal })
        .then((res) => {
          setIsLoadig(false);
          setGenres(res.data.results);
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
  
    return { genres, error, isLoadig };
}

export default useGenres