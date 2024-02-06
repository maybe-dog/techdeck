import { NextRequest, NextResponse } from "next/server";

const zennSearchEndpoint = "https://zenn.dev/api/search";
const zennArticlesEndpoint = "https://zenn.dev/api/articles";

export type ZennArticle = {
  id: number;
  post_type: "Article";
  title: string;
  slug: string;
  published: boolean;
  comments_count: number;
  liked_count: number;
  body_letters_count: number;
  article_type: "tech" | "idea";
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: string;
  path: string;
  user: User;
  publication: Publication | null;
};

type User = {
  id: number;
  username: string;
  name: string;
  avatar_small_url: string;
};

type Publication = {
  id: number;
  name: string;
  avatar_small_url: string;
  display_name: string;
  beta_stats: boolean;
  avatar_registered: boolean;
};

type SearchResponse = {
  articles: ZennArticle[];
  next_page: number | null;
};

type SearchOptions = {
  q?: string;
  source: "articles" | "books" | "scraps" | "users";
  page?: number;
  order: "daily" | "alltime" | "latest";
};

// TODO: to be implemented
const serach = async ({ q, source, page, order }: SearchOptions) => {
  return;
};

type GetArticlesOptions = {
  order?: "daily" | "alltime" | "latest";
  count?: number;
  page?: number;
};

type GetArticlesRsponse = {
  articles: ZennArticle[];
  next_page: number | null;
};

const getArticles = async ({
  order = "latest",
  count = 100,
  page = 1,
}: GetArticlesOptions): Promise<ZennArticle[]> => {
  const queryString = new URLSearchParams({
    order,
    count: count.toString(),
    page: page.toString(),
  }).toString();

  const res = await fetch(`${zennArticlesEndpoint}?${queryString}`);
  const articles: ZennArticle[] = ((await res.json()) as GetArticlesRsponse)
    .articles;
  return articles;
};

// zenn側にno-corsが設定されているためサーバ側でAPIを叩く
export async function GET(request: NextRequest) {
  const articles = await getArticles({});
  return NextResponse.json(articles);
}
