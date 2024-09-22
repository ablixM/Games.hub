
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/UseGames.ts";
import GameCard from "./GameCard.tsx";

const GameGrid = () => {
   const {error, games} = useGames()
  return <>
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl:4}} padding={"10px"} spacing='10px'>
        {games.map((game) => (
            <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    {error && <Text>{error}</Text>}
    </>
};

export default GameGrid;
