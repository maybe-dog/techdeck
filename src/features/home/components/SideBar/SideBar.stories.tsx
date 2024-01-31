import { Meta, StoryObj } from "@storybook/react";
import SideBar from "./SideBar";

const meta: Meta<typeof SideBar> = {
  title: "Feature/Home/SideBar",
  component: SideBar,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    sideBarElements: [],
  },
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {};
