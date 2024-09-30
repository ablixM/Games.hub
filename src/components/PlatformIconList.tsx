import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/UseGames.ts";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    mac: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"}>
          {platform.name}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
