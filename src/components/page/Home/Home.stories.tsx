import { Meta, StoryObj } from "@storybook/react";
import Home from "./Home";
import { Avatar } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

const meta: Meta<typeof Home> = {
  title: "Page/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Home>;

const defaultElements = [
  {
    avator: <Avatar>A</Avatar>,
    author: "A",
    title: "article1",
    url: "https://example.com",
  },
];

export const Default: Story = {};
