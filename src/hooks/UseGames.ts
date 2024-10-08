import { GameQuery } from "../App.tsx";
import useData from "./UseData.ts";

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


 
const useGames = (
  gameQuery: GameQuery
) => useData<Game>("/games", {
  params: {
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText
  }}, 
  [gameQuery])

export default useGames;
