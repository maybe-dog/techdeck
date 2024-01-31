import { Avatar, Box, Link, Stack, Typography } from "@mui/material";

export type Props = {
  avator: JSX.Element;
  author: string;
  title: string;
  url: string;
};

export default function ColumnElement({ avator, author, title, url }: Props) {
  return (
    <Stack
      direction="row"
      sx={{
        p: 1,
        gap: 1,
        maxWidth: "100%",
      }}
    >
      <Box sx={{ width: "2.5rem" }}>{avator}</Box>
      <Box sx={{ wordWrap: "break-word", minWidth: 0 }}>
        <Typography variant="subtitle1">{author}</Typography>
        <Typography variant="subtitle1">{title}</Typography>
        <Link variant="caption">
          <a href={url} target="_blank" rel={"noopener noreferrer"}>
            {url}
          </a>
        </Link>
      </Box>
    </Stack>
  );
}
