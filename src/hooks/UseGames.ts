import useData from "./UseData.ts";
import { Genre } from "./UseGenre.ts";

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


 
const useGames = (selectedGenre: Genre | null, selectedPlatforms: Platform | null) => useData<Game>("/games", {
  params: {genres: selectedGenre?.id, 
    platforms: selectedPlatforms?.id
  }}, 
  [selectedGenre?.id, selectedPlatforms?.id])

export default useGames;
