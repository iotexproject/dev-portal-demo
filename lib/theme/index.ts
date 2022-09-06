import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/montserrat";
import * as components from "./components";
import * as foundations from "./foundations";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme: Record<string, any> = extendTheme({
  ...foundations,
  components: { ...components },
  config,
});
