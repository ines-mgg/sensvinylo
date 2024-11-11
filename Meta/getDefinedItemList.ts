import type Vinyl from "~/interfaces/vinyl";
import getDefinedVinyl from "./getDefinedVinyl";

const getDefinedItemList = (vinyls: Vinyl[]) => {
  return defineListItem({
    numberOfItems: vinyls.length,
    itemListElement: [...vinyls.map((vinyl) => getDefinedVinyl(vinyl))],
  });
};

export default getDefinedItemList;
