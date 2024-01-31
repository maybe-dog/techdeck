import { site } from "@/type/types";

type ColumnType = "timeline" | "keyword";

// ColumnMetaに共通する型
type CommonColumnMeta = {
  type: ColumnType;
  title: string; // 表示されるカラム名
  icon: React.ReactNode; // カラムのアイコン
};

// タイムラインカラムのメタ情報の型
export type TimelineColumnMeta = {
  type: "timeline";
  site: site;
  description: string;
  handleClickSideBar: () => void;
  columnInputRef: React.Ref<any>;
} & CommonColumnMeta;

// キーワードのメタ情報の型
export type KeywordColumnMeta = {
  type: "keyword";
  sites: site[];
  keyword: string;
  description: string;
  handleClickSideBar: () => void;
} & CommonColumnMeta;

// ColumnMetaの型
export type ColumnMeta = TimelineColumnMeta | KeywordColumnMeta;

// ColumnStoreに共通する型
export type CommonColumnStore = {
  type: ColumnType;
};

// タイムラインカラムのストアの型
export type TimelineColumnStore = {
  type: "timeline";
  site: site;
  description: string;
} & CommonColumnStore;

export type KeywordColumnStore = {
  type: "keyword";
  sites: site[];
  keyword: string;
  description: string;
} & CommonColumnStore;

export type ColumnStore = TimelineColumnStore | KeywordColumnStore;
