import type Artist from "~/interfaces/artist";
import Database from "../data/database.json";

const getArtist = (slug: string[] | number): Artist | null => {
  return Array.isArray(slug)
    ? (Database.artists.find((artist) =>
        slug.includes(artist.slug)
      ) as Artist | null)
    : (Database.artists.find((artist) => artist.id === slug) as Artist | null);
};

export default getArtist;
