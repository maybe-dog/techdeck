import "@/app/globals.css";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {
  DecoratorHelpers,
  withThemeFromJSXProvider,
} from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import React from "react";
import { darkTheme, lightTheme } from "../src/app/themes";
import StoreProvider from "../src/stores/StoreProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const withStore = (Story) => {
  return (
    <StoreProvider>
      <Story />
    </StoreProvider>
  );
};

const withMuiTheme = withThemeFromJSXProvider({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: "light",
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
});

export const decorators = [withMuiTheme, withStore];

export default preview;
