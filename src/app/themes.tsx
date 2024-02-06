"use client";

import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({ palette: { mode: "light" } });
const defaultDarkTheme = createTheme({ palette: { mode: "dark" } });

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    allVariants: {
      color: defaultTheme.palette.text.primary,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    allVariants: {
      color: defaultDarkTheme.palette.text.primary,
    },
  },
});
