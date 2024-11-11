import type Engagement from "../interfaces/engagement";
import Database from "../data/database.json";

const getEngagements = (): Array<Engagement> => {
  return Database.engagements;
};

export default getEngagements;
