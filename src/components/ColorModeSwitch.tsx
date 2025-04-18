import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode.tsx";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        colorPalette='green'
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>

      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
