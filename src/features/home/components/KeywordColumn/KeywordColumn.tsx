import React from "react";
import ColumnElement, {
  Props as TimelineElementProps,
} from "../ColumnElement/ColumnElement";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { ElementContext } from "../ElementContextProvider/ElementContextProvider";

type Props = {
  header: {
    title: string;
    keyword: string;
    icon: React.ReactNode;
  };
};

export default function KeywordColumn({ header }: Props) {
  // ElementContextからColumnElementsを取得する
  const elements = React.useContext(ElementContext);

  // 表示されるタイムライン要素
  const filteredElements = elements.filter((element) =>
    element.title.toLowerCase().includes(header.keyword.toLowerCase())
  );

  return (
    <Stack
      direction="column"
      sx={{
        width: "20rem",
        minWidth: "20rem",
        maxWidth: "20rem",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ gap: 1, p: 1, height: "3.5rem" }}
      >
        {header.icon}
        <Typography variant="h6">{header.title}</Typography>
        <IconButton size="small" sx={{ marginLeft: "auto" }}>
          <Settings color="primary" />
        </IconButton>
      </Stack>
      <Divider />
      <Stack direction="column" sx={{ overflow: "auto" }}>
        {filteredElements.map((element) => (
          <Box key={element.title}>
            <ColumnElement {...element} />
            <Divider />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
