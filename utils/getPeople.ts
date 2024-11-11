import type People from "../interfaces/people";
import Database from "../data/database.json";

const getPeople = (): Array<People> => {
  return Database.peoples;
};

export default getPeople;
