const ItemEndpoint = "https://qiita.com/api/v2/items";

type QiitaItem = {
  title: string;
  url: string;
  user: {
    id: string;
    profile_image_url: string;
  };
};

type getItemsOptions = {
  query?: string;
  page?: number;
  per_page?: number;
};

export const getItems = async ({
  query,
  page = 1,
  per_page = 100,
}: getItemsOptions): Promise<QiitaItem[]> => {
  const searchParams = new URLSearchParams();
  if (query) searchParams.append("query", query);
  searchParams.append("page", page.toString());
  searchParams.append("per_page", per_page.toString());
  const queryString = searchParams.toString();
  const url = `${ItemEndpoint}` + (queryString ? `?${queryString}` : "");
  const res = await fetch(url);
  const items: QiitaItem[] = await res.json();
  return items;
};
