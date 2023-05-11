import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";

import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/Image-Url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenresList = ({ onSelectGenre }: Props) => {
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
              <Button onClick={() => onSelectGenre(item)} variant={"link"}>
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
