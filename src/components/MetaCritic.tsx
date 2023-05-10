import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const MetaCritic = ({ score }: Props) => {
  let color = score > 75 ? "green" : score < 75 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={3}
      paddingY={2}
      borderRadius={"5px"}
    >
      {score}
    </Badge>
  );
};

export default MetaCritic;
