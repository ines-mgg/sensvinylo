import type Vinyl from "~/interfaces/vinyl";
import { getArtist } from "#imports";

const getDefinedProduct = (vinyl: Vinyl) => {
  return defineProduct({
    name: vinyl.title,
    description: vinyl.description,
    image: vinyl.image,
    offers: [
      {
        price: vinyl.price,
        priceCurrency: "EUR",
        availability: "InStock",
        url: window.location.href,
      },
    ],
    brand: {
      name: getArtist(vinyl.artist)?.name || "",
    },
    sku: vinyl.token,
    seller: {
      "@type": "Organization",
      name: "Sensvinylo",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Sensvinylo",
    },
  });
};

export default getDefinedProduct;
