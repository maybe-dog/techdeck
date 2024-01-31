import darkModeSlice from "@/stores/DarkMode.slice";
import { Stack, Switch, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "@/stores/store";

export default function DarkModeToggleButton() {
  const dispatch = useDispatch();

  // storeのダークモード設定を取得する
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(darkModeSlice.actions.changeDarkMode(e.target.checked));
  };

  return (
    <Stack direction="row" alignItems="center">
      <Typography>Light</Typography>
      <Switch onChange={handleChange} checked={isDarkMode} />
      <Typography>Dark</Typography>
    </Stack>
  );
}
