import type Genre from "../interfaces/genre";
import Database from "../data/database.json";

const getGenre = (id: number): Genre | null => {
  return (Database.genres.find((genre) => genre.id === id) as Genre | null);
};

export default getGenre;
