import useGames, { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetaCritic from "./MetaCritic";
import getCroppedImageUrl from "../services/Image-Url";
import GameCardSkeleton from "./GameCardSkeleton";
import CardContainer from "./CardContainer";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const { isLoading } = useGames();

  if (isLoading) {
    return <GameCardSkeleton />;
  }
  return (
    <CardContainer>
      <Card overflow={"hidden"}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <MetaCritic score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default GameCard;
