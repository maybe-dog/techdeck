import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Clear } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type Props = {
  size?: "small" | "medium";
  placeholder: string;
  onEnter: (value: string) => void;
  onClear?: () => void;
};

function SearchBox(
  { size = "small", placeholder, onEnter, onClear }: Props,
  ref: React.Ref<any>
) {
  // clear search box
  const [text, setText] = React.useState("");
  const handleClick = () => {
    setText("");
    if (onClear) {
      onClear();
    }
  };

  // handle enter key
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnter((event.target as HTMLInputElement).value);
    }
  };

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder || ""}
      value={text}
      onKeyDown={handleKeyDown}
      onChange={(event) => setText(event.target.value)}
      inputRef={ref}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton sx={{ p: 0 }} onClick={handleClick}>
              <Clear color="primary" />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
      size={size}
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: "0 0.5rem",
        },
      }}
    />
  );
}

export default React.forwardRef(SearchBox);
