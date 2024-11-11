import type Vinyl from "../interfaces/vinyl";
import Database from "../data/database.json";

const getFirstVinyls = (): Array<Vinyl> => {
  return Database.vinyles.slice(0,10);
};

export default getFirstVinyls;
