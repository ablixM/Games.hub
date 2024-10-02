import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenereList.tsx";
import { useState } from "react";
import { Genre } from "./hooks/UseGenre.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import { Platform } from "./hooks/UseGames.ts";
import SortSelector from "./components/SortSelector.tsx";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "300px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex marginLeft={9} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              onSelectedPlatfrom={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatfrom={gameQuery.platform}
            />
          </Box>
          <SortSelector
            selectedOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => {
              setGameQuery({ ...gameQuery, sortOrder });
            }}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
