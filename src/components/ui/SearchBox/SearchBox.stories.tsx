import { Meta, StoryObj } from "@storybook/react";
import SearchBox from "./SearchBox";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { darkTheme } from "@/constants/theme";

const meta: Meta<typeof SearchBox> = {
  title: "UI/SearchBox",
  component: SearchBox,
  argTypes: {
    placeholder: { control: "text" },
    onEnter: { action: "onEnter Triggered" },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
  args: {
    placeholder: "placeholder",
  },
};

export const DarkMode: Story = {
  render: (args) => {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SearchBox {...args} />
      </ThemeProvider>
    );
  },
  args: {
    placeholder: "placeholder",
  },
};
