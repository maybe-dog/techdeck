import ColumnElement, {
  Props as TimelineElementProps,
} from "@/features/home/components/ColumnElement/ColumnElement";
import SearchBox from "@/components/ui/SearchBox/SearchBox";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { ElementContext } from "../ElementContextProvider/ElementContextProvider";

export type Props = {
  header: {
    title: string;
    icon: React.ReactNode;
  };
};

function TimelineColumn({ header }: Props, searchBoxInputref: React.Ref<any>) {
  // 検索キーワード管理
  const [filterKeyword, setFilterKeyword] = React.useState("");

  // ElementContextからColumnElementsを取得する
  const elements = React.useContext(ElementContext);

  // 表示されるタイムライン要素を生成
  const [shownElements, setShownElements] = React.useState<
    TimelineElementProps[]
  >([...elements]);

  // Enterが押された時、検索を実行する
  const searchBoxOnEnter = (value: string) => {
    setFilterKeyword(value);
  };

  // elementsやisFilteredが更新された時、shownElementsも更新する
  React.useEffect(() => {
    const isFilter = filterKeyword !== "";
    const newShownElements = isFilter
      ? elements.filter((element) =>
          element.title.toLowerCase().includes(filterKeyword.toLowerCase())
        )
      : elements;
    setShownElements(newShownElements);
  }, [elements, filterKeyword]);

  // clearボタンで検索欄がクリアされた時、全てのタイムライン要素を表示する
  const searchBoxOnClear = () => {
    setFilterKeyword("");
  };

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
        sx={{ gap: 1, p: 1, minHeight: "3.5rem" }}
      >
        {header.icon}
        <Typography variant="h6">{header.title}</Typography>
        <Box sx={{ marginLeft: "auto", width: "60%" }}>
          <SearchBox
            placeholder="search"
            onEnter={searchBoxOnEnter}
            onClear={searchBoxOnClear}
            ref={searchBoxInputref}
          />
        </Box>
      </Stack>
      <Divider />
      <Stack direction="column" sx={{ overflow: "auto" }}>
        {shownElements.map((element) => (
          <Box key={element.title}>
            <ColumnElement {...element} />
            <Divider />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

export default React.forwardRef(TimelineColumn);
