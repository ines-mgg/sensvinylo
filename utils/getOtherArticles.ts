import type Article from "~/interfaces/article";
import Database from "~/data/database.json";

const getOtherArticles = (slug: string[]): Array<Article> | null => {
  return Database.articles
    .filter((article) => !slug.includes(article.slug))
    .slice(0, 3);
};

export default getOtherArticles;