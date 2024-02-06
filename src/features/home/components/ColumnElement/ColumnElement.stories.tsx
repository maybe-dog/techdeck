import { Meta, StoryObj } from "@storybook/react";
import ColumnElement, { Props as TimelineElementProps } from "./ColumnElement";
import { Avatar, CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "@/constants/theme";

const meta: Meta<typeof ColumnElement> = {
  title: "Feature/Home/TimelineElement",
  component: ColumnElement,
};

export default meta;
type Story = StoryObj<typeof ColumnElement>;

export const Default: Story = {
  args: {
    avator: <Avatar>H</Avatar>,
    author: "Author Name",
    title: "This is a description",
    url: "https://example.com",
  },
};
