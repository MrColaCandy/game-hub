import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <Box
      width={"450px"}
      height={"400px"}
      borderRadius={10}
      boxSizing="border-box"
    >
      {children}
    </Box>
  );
};

export default CardContainer;
