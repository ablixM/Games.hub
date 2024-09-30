import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import useGames from "../hooks/UseGames.ts";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} padding={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
