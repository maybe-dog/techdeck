import { Meta, StoryObj } from "@storybook/react";
import SideBarElement from "./SideBarElement";
import { Home } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "@/constants/theme";
import CssBaseline from "@mui/material/CssBaseline";

const meta: Meta<typeof SideBarElement> = {
  title: "Feature/Home/SideBarElement",
  component: SideBarElement,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    handleClick: { action: "handleClick Triggered" },
  },
};

export default meta;
type Story = StoryObj<typeof SideBarElement>;

export const Default: Story = {
  args: {
    title: "title",
    description: "description",
    icon: <Home />,
  },
};
