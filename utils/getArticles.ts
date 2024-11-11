import type Article from "../interfaces/article";
import Database from "../data/database.json";

const getArticles = (): Array<Article> => {
  return Database.articles;
};

export default getArticles;
