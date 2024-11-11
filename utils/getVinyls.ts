import type Vinyl from "../interfaces/vinyl";
import Database from "../data/database.json";

const getVinyls = (): Array<Vinyl> => {
  return Database.vinyles;
};

export default getVinyls;
