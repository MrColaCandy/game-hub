import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { data, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={"10px"}
        padding={"10px"}
      >
        {data.map((item) => (
          <GridItem key={item.id}>
            <GameCard game={item} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
