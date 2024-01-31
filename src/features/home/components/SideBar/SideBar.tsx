import { Box, CssBaseline, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import SideBarElement, {
  Props as SideBarElementProps,
} from "@/features/home/components/SideBarElement/SideBarElement";
import { darkTheme } from "@/constants/theme";
import DarkModeToggleButton from "../DarkModeToggleButton/DarkModeToggleButton";

type Props = {
  sideBarElements: SideBarElementProps[];
};

export default function SideBar({ sideBarElements }: Props) {
  return (
    // SideBarは標準でダークモード
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Stack
        sx={{
          width: "12rem",
          minWidth: "12rem",
          backgroundColor: "#1c2939",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" fontSize="2rem" margin="1rem">
          TechDeck
        </Typography>
        <Box sx={{ width: "100%" }}>
          {sideBarElements.map((element) => (
            <SideBarElement key={element.title} {...element} />
          ))}
        </Box>
        <Box sx={{ marginTop: "auto" }}>
          <DarkModeToggleButton />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
