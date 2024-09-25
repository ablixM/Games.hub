import { useEffect, useState } from "react";
import apiClient from "../Services/api-client.ts";
import { CanceledError } from "axios";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platform: { platform: Platform }[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const controller = new AbortController();
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [controller]); // Added dependency array to useEffect

  return { games, error };
};

export default useGames;
