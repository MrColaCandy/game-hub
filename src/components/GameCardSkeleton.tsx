import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import CardContainer from "./CardContainer";

const GameCardSkeleton = () => {
  return (
    <CardContainer>
      <Card width={"100%"} height={"93%"}>
        <Skeleton />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default GameCardSkeleton;
