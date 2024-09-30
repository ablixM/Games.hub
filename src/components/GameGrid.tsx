import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import useGames from "../hooks/UseGames.ts";
import GameCardSkeleton from "./GameCardSkeleton.tsx";

const GameGrid = () => {
  const { games, error, isLoadig } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} padding={10}>
        {isLoadig &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
