import type Vinyl from "~/interfaces/vinyl";
import Database from "../data/database.json";

const getVinyl = (token: string[]): Vinyl | null => {
  return Database.vinyles.find((vinyl) =>
    token.includes(vinyl.token)
  ) as Vinyl | null;
};

export default getVinyl;
