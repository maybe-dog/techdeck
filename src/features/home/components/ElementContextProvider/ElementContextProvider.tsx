"use client";
import { site } from "@/type/types";
import { getItems as getQiitaItems } from "@/features/home/api/qiita";
import { Props as ColumnElementProps } from "@/features/home/components/ColumnElement/ColumnElement";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ZennArticle } from "@/app/api/zenn/articles/route";

type Props = {
  site: site;
  children: React.ReactNode;
};

export const ElementContext = React.createContext<ColumnElementProps[]>([]);

export default function ElementContextProvider({ site, children }: Props) {
  const [elements, setElements] = useState<ColumnElementProps[]>([]);

  useEffect(() => {
    const doFetchElements = async () => {
      const data = await fetchElements(site);
      setElements((old) => data);
    };
    doFetchElements();
  }, []);

  return (
    <ElementContext.Provider value={elements}>
      {children}
    </ElementContext.Provider>
  );
}

const fetchElements = async (site: site): Promise<ColumnElementProps[]> => {
  switch (site) {
    case "qiita":
      return await fetchQiitaElements();
    case "zenn":
      return await fetchZennElements();
    default:
      return [];
  }
};

const fetchQiitaElements = async (): Promise<ColumnElementProps[]> => {
  const data = await getQiitaItems({});
  const elements: ColumnElementProps[] = data.map((item) => {
    return {
      avator: <Avatar alt={item.user.id} src={item.user.profile_image_url} />,
      title: item.title,
      url: item.url,
      author: item.user.id,
    };
  });
  return elements;
};

const fetchZennElements = async (): Promise<ColumnElementProps[]> => {
  const res = await fetch("/api/zenn/articles");
  const articles: ZennArticle[] = await res.json();
  const zennBaseUrl = "https://zenn.dev";
  const elements: ColumnElementProps[] = articles.map((item) => {
    return {
      avator: <Avatar alt={item.user.name} src={item.user.avatar_small_url} />,
      title: item.title,
      url: zennBaseUrl + item.path,
      author: item.user.username,
    };
  });
  return elements;
};
