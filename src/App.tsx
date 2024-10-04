import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";
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
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "300px 1fr" }}
    >
      <GridItem
        area="nav"
        position="fixed"
        bg={bg}
        left={0}
        top={0}
        right={0}
        height={{ sm: "60px", md: "80px" }}
        zIndex={9999}
      >
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          paddingX={5}
          overflowY="auto"
          maxHeight="700px"
          position="fixed"
          left={0}
          marginTop={"80px"}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" marginTop={"80px"}>
        <Flex marginLeft={9} marginBottom={15} zIndex={999}>
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
        <Box marginTop={"20px"} zIndex={997}>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
