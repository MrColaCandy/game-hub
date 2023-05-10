import React from "react";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
  FaWindows,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    linux: FaLinux,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={2}>
        {platforms.map((item) => (
          <Icon as={iconMap[item.slug]} color={"gray.500"} />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
