export type Article = {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | undefined;
  description: string | null;
  url: string | undefined;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};