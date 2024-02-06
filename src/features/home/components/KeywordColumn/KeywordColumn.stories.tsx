import { Meta, StoryObj } from "@storybook/react";
import KeywordColumn from "./KeywordColumn";
import { dummyTimelineProps } from "../TimelineColumn/TimelineColumn.dummy";
import { Search } from "@mui/icons-material";

const meta: Meta<typeof KeywordColumn> = {
  title: "Feature/Home/KeywordColumn",
  component: KeywordColumn,
  argTypes: {
    header: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof KeywordColumn>;

const defaultArgs = {
  header: {
    title: "title",
    keyword: "keyword",
    icon: <Search color="primary" />,
  },
};

export const Default: Story = {
  args: defaultArgs,
};
