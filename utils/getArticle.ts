import type Article from "~/interfaces/article";
import Database from "../data/database.json";

const getArticle = (slug: string[]): Article | null => {
  return Database.articles.find((article) =>
    slug.includes(article.slug)
  ) as Article | null;
};

export default getArticle;
