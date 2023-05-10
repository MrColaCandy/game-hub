import { List, ListItem, Skeleton, SkeletonText, Text } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";

const GenresList = () => {
  const { data, error, isLoading } = useGenre();

  if (isLoading) {
    return (
      <>
        <Skeleton />
        <SkeletonText />
      </>
    );
  }
  return (
    <>
      {error && <Text>error</Text>}
      <List paddingX={5}>
        {data.map((item) => (
          <ListItem key={item.id}>{item.name}</ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
