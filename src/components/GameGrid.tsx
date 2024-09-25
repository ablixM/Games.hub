import { Text } from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import useGames from "../hooks/UseGames.ts";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
};

export default GameGrid;
