import { Meta, StoryObj } from "@storybook/react";
import TimelineColumn, { Props as TimelineProps } from "./TimelineColumn";
import { Avatar, CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "@/constants/theme";
import { Home } from "@mui/icons-material";
import { dummyTimelineProps } from "./TimelineColumn.dummy";

const meta: Meta<typeof TimelineColumn> = {
  title: "Feature/Home/Timeline",
  component: TimelineColumn,
  argTypes: {
    header: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof TimelineColumn>;

const defaultArgs: TimelineProps = dummyTimelineProps;

export const Default: Story = {
  args: defaultArgs,
};

export const Empty: Story = {
  args: {
    header: {
      title: "title",
      icon: <Home color="primary" />,
    },
  },
};
