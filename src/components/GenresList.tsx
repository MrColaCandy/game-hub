import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/Image-Url";

const GenresList = () => {
  const { data, error, isLoading } = useGenre();

  if (isLoading) return <Spinner />;

  return (
    <>
      {error && <Text>error</Text>}
      <List>
        {data.map((item) => (
          <ListItem paddingY={3} key={item.id}>
            <HStack>
              <Image
                boxSize={"36px"}
                src={getCroppedImageUrl(item.image_background)}
              ></Image>
              <Text>{item.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
