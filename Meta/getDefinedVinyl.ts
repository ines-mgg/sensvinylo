import type Vinyl from "~/interfaces/vinyl";
import { getArtist } from "#imports";

const getDefinedVinyl = (vinyl: Vinyl) => {
  return {
    "@type": "ListItem",
    position: vinyl.id,
    item: {
      "@type": "Product",
      url: `${window.location.origin}/vinyle/${vinyl.token}`,
      name: vinyl.title,
      image: vinyl.image,
      description: vinyl.description,
      sku: vinyl.token,
      brand: getArtist(vinyl.artist)?.name,
      aggregateRating: {
        "@type": "AggregateRating",
      },
      review: {
        "@type": "Review",
      },
      offers: {
        "@type": "Offer",
        price: vinyl.old_price ?? vinyl.price,
        priceCurrency: "EUR",
        availability: "InStock",
        priceValidUntil: "2024-12-31",
        url: `${window.location.origin}/vinyle/${vinyl.token}`,
        shippingDetails: {
          "@type": "OfferShippingDetails",
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            businessDays: "1-2",
          },
          cutoffTime: "12:00:15Z",
          shippingRate: {
            "@type": "MonetaryAmount",
            currency: "EUR",
            value: "4.65",
          },
        },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          refundType: "FullRefund",
          returnPolicyCategory: "InStoreReturnPolicy",
          restockingFee: {
            "@type": "MonetaryAmount",
            currency: "EUR",
            value: "0.00",
          },
        },
      },
    },
  };
};

export default getDefinedVinyl;
