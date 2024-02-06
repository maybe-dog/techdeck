import { Meta, StoryObj } from "@storybook/react";
import DarkModeToggleButton from "./DarkModeToggleButton";
import { Provider } from "react-redux";
import { store } from "@/stores/store";

const meta: Meta<typeof DarkModeToggleButton> = {
  title: "Feature/Home/DarkModeToggleButton",
  component: DarkModeToggleButton,
};

export default meta;
type Story = StoryObj<typeof DarkModeToggleButton>;

export const Default: Story = {
  render: (args) => {
    return (
      <Provider store={store}>
        <DarkModeToggleButton />
      </Provider>
    );
  },
};
