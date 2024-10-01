import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import useGames, { Platform } from "../hooks/UseGames.ts";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import { Genre } from "../hooks/UseGenre.ts";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoadig } = useGames(selectedGenre, selectedPlatform);
  // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} padding={10}>
        {isLoadig &&
          data.map((skeleton) => (
            <GameCardContainer key={skeleton.id}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            {" "}
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
