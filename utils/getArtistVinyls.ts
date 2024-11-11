import type Vinyl from "../interfaces/vinyl";
import Database from "../data/database.json";

const getArtistVinyls = (artistId: number): Array<Vinyl> | null => {
  return Database.vinyles.filter((vinyle) => vinyle.artist === artistId) as
    | Vinyl[]
    | null;
};

export default getArtistVinyls;
