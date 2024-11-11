import type Store from "../interfaces/store";
import Database from "../data/database.json";

const getStores = (): Array<Store> => {
  return Database.stores;
};

export default getStores;
