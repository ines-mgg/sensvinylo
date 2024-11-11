import type FAQ from "../interfaces/FAQ";
import Database from "../data/database.json";

const getFAQ = (): Array<FAQ> => {
  return Database.faqs;
};

export default getFAQ;
