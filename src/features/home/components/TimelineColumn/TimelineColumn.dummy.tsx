import { Home } from "@mui/icons-material";
import { Props as TimelineProps } from "./TimelineColumn";
import { Props as ColumnElementProps } from "../ColumnElement/ColumnElement";
import { Avatar } from "@mui/material";

// make dummy data of props
export const dummyColumnElementsProps: ColumnElementProps[] = [
  {
    avator: <Avatar>A</Avatar>,
    author: "A",
    title: "Javascript",
    url: "https://example.com",
  },
  {
    avator: <Avatar>B</Avatar>,
    author: "B",
    title: "Python",
    url: "https://example.com",
  },
  {
    avator: <Avatar>C</Avatar>,
    author: "C",
    title: "AWS",
    url: "https://example.com",
  },
  {
    avator: <Avatar>D</Avatar>,
    author: "D",
    title: "React",
    url: "https://example.com",
  },
  {
    avator: <Avatar>E</Avatar>,
    author: "E",
    title: "Django",
    url: "https://example.com",
  },
  {
    avator: <Avatar>F</Avatar>,
    author: "F",
    title: "Azure",
    url: "https://example.com",
  },
  {
    avator: <Avatar>G</Avatar>,
    author: "G",
    title: "Node.js",
    url: "https://example.com",
  },
  {
    avator: <Avatar>H</Avatar>,
    author: "H",
    title: "Java",
    url: "https://example.com",
  },
  {
    avator: <Avatar>I</Avatar>,
    author: "I",
    title: "Spring",
    url: "https://example.com",
  },
  {
    avator: <Avatar>J</Avatar>,
    author: "J",
    title: "Vue.js",
    url: "https://example.com",
  },
  {
    avator: <Avatar>K</Avatar>,
    author: "K",
    title: "Ruby on Rails",
    url: "https://example.com",
  },
  {
    avator: <Avatar>L</Avatar>,
    author: "L",
    title: "SQL",
    url: "https://example.com",
  },
  {
    avator: <Avatar>M</Avatar>,
    author: "M",
    title: "MongoDB",
    url: "https://example.com",
  },
  {
    avator: <Avatar>N</Avatar>,
    author: "N",
    title: "GraphQL",
    url: "https://example.com",
  },
  {
    avator: <Avatar>O</Avatar>,
    author: "O",
    title: "Rust",
    url: "https://example.com",
  },
  {
    avator: <Avatar>P</Avatar>,
    author: "P",
    title: "Kubernetes",
    url: "https://example.com",
  },
];

export const dummyTimelineProps: TimelineProps = {
  header: {
    title: "title",
    icon: <Home color="primary" />,
  },
};
