import { useEffect, useState } from "react";
import apiClient from "../Services/api-client.ts";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  metacritic: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [isLoadig, setIsLoadig] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoadig(true);
    apiClient
      .get<FetchGamesResponse>("games", { signal: controller.signal })
      .then((res) => {
        setIsLoadig(false);
        setGames(res.data.results);
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

  return { games, error, isLoadig };
};

export default useGames;
