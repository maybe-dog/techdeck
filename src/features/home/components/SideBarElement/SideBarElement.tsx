import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export default function SideBarElement({
  title,
  description,
  icon,
  handleClick,
}: Props) {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Stack
        direction="row"
        alignItems="center"
        gap={1}
        onClick={handleClick}
        sx={{
          border: isHovered ? "1px solid" : "none",
          borderColor: "divider",
        }}
        paddingX={1}
      >
        <div className="ml-2">{icon}</div>
        <Stack>
          <Typography>{title}</Typography>
          <Typography variant="caption">{description}</Typography>
        </Stack>
      </Stack>
    </div>
  );
}
