import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformList from "./components/PlatformList";

function App() {
  const [genre, setGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenresList
              onSelectGenre={(genre) => {
                setGenre(genre);
              }}
              selectedGenre={genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformList />
          <GameGrid selectedGenre={genre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
