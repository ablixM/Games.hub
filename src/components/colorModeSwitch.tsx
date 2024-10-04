import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [switchTitle, setSwitchTitle] = useState("Light Mode");

  useEffect(() => {
    setSwitchTitle(colorMode === "dark" ? "Dark Mode" : "Light Mode");
  }, [colorMode]);
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace={"nowrap"}>{switchTitle}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
