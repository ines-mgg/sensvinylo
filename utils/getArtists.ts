import type Artist from "../interfaces/artist";
import Database from "../data/database.json";

const getArtists = (): Array<Artist> => {
  return Database.artists;
};

export default getArtists;
