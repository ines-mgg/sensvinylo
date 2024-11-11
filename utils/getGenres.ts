import type Genre from "../interfaces/genre";
import Database from "../data/database.json";

const getGenres = (): Array<Genre> => {
  return Database.genres;
};

export default getGenres;
