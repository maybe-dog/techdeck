"use client";

import SideBar from "@/features/home/components/SideBar/SideBar";
import SideBarElement, {
  Props as SideBarElementProps,
} from "@/features/home/components/SideBarElement/SideBarElement";
import TimelineColumn from "@/features/home/components/TimelineColumn/TimelineColumn";
import { Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Home as HomeIcon, Search } from "@mui/icons-material";
import {
  ColumnMeta,
  ColumnStore,
  KeywordColumnMeta,
  TimelineColumnMeta,
} from "@/features/home/type/types";
import columnSlice from "@/stores/Column.slice";
import { useSelector } from "@/stores/store";
import { sites } from "@/constants/sites";
import KeywordColumn from "@/features/home/components/KeywordColumn/KeywordColumn";
import ElementContextProvider from "@/features/home/components/ElementContextProvider/ElementContextProvider";

const elements: SideBarElementProps[] = [];

export const HomeContext = React.createContext({});

export default function Home() {
  //
  const columnMetasRef = useRef<Map<string, HTMLInputElement>>(new Map());

  // storesからcolumnMetasを作成する関数
  const makeColumnMetasFromStores = (stores: ColumnStore[]) => {
    const columnMetas: ColumnMeta[] = stores.map((store) => {
      switch (store.type) {
        case "timeline":
          const timelineColumnMeta: TimelineColumnMeta = {
            type: "timeline",
            site: store.site,
            title: sites[store.site].displayName,
            description: "description",
            icon: <HomeIcon color="primary" />,
            handleClickSideBar: () => {
              columnMetasRef.current.get(store.site)?.focus();
            },
            columnInputRef: (node) =>
              columnMetasRef.current.set(store.site, node),
          };
          return timelineColumnMeta;
        case "keyword":
          const keywordColumnMeta: KeywordColumnMeta = {
            type: "keyword",
            title: store.keyword,
            sites: store.sites,
            keyword: store.keyword,
            description: "description",
            icon: <Search color="primary" />,
            handleClickSideBar: () => {
              columnMetasRef.current.get(store.keyword)?.focus();
            },
          };
          return keywordColumnMeta;
      }
    });

    return columnMetas;
  };

  // columnStateの初期化
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      columnSlice.actions.setColumns([
        {
          type: "timeline",
          site: "qiita",
          description: "description",
        },
        {
          type: "timeline",
          site: "zenn",
          description: "description",
        },
        {
          type: "keyword",
          sites: ["qiita", "zenn"],
          keyword: "keyword",
          description: "description",
        },
      ])
    );
  }, []);

  // columnStoresの取得
  const columnStores = useSelector((state) => state.column.columns);

  // columnMetasの作成
  const [ColumnMetas, setColumnMetas] = React.useState<ColumnMeta[]>([]);
  useEffect(() => {
    setColumnMetas(makeColumnMetasFromStores(columnStores));
  }, [columnStores]);

  return (
    <Stack direction="row" sx={{ overflow: "hidden", maxHeight: "100svh" }}>
      <SideBar
        sideBarElements={ColumnMetas.map((meta) => {
          return {
            title: meta.title,
            description: meta.description,
            icon: meta.icon,
            handleClick: meta.handleClickSideBar,
          };
        })}
      />
      <Stack
        direction="row"
        sx={{
          backgroundColor: "background.paper",
          overflowX: "scroll",
          maxHeight: "100svh",
        }}
      >
        {ColumnMetas.map((meta) => {
          switch (meta.type) {
            case "timeline":
              return (
                <ElementContextProvider key={meta.title} site={meta.site}>
                  <TimelineColumn
                    key={meta.title}
                    header={{
                      title: meta.title,
                      icon: meta.icon,
                    }}
                    ref={meta.type === "timeline" ? meta.columnInputRef : null}
                  />
                </ElementContextProvider>
              );
            case "keyword":
              return (
                <KeywordColumn
                  key={meta.title}
                  header={{
                    title: meta.title,
                    icon: meta.icon,
                    keyword: meta.keyword,
                  }}
                />
              );
          }
        })}
      </Stack>
    </Stack>
  );
}
