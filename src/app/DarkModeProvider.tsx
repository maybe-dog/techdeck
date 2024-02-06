"use client";

import { useSelector } from "@/stores/store";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "@/app/themes";

/**
 * children(ThemeProvider)に対してisDarkModeを渡す関数コンポーネント
 * @param param0
 * @returns
 */
export default function DarkModeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
