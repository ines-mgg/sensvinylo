<script setup lang="ts">
import AppCarousel from '@/components/AppCarousel.vue';

useHead({
  link: [
    { rel: 'canonical', href: 'https://sensvinylo-store.com/' }
  ],
})
useSeoMeta({
  title: 'Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
  ogTitle: 'Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
  description: 'Sensvinylo, le paradis des vinyles à Paris et en Ile-de-France. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus. Les vinyles de vos artistes préférés en exclusivité chez Sensvinylo.',
  ogDescription: 'Sensvinylo, le paradis des vinyles à Paris et en Ile-de-France. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus. Les vinyles de vos artistes préférés en exclusivité chez Sensvinylo.',
  ogImage: '/banner.webp',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
    url: 'https://sensvinylo-store.com/',
    name: 'Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
    description: 'Sensvinylo, le paradis des vinyles à Paris et en Ile-de-France. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus. Les vinyles de vos artistes préférés en exclusivité chez Sensvinylo.',
    inLanguage: 'fr-FR',
    primaryImageOfPage: '/banner.webp',
  }),
  defineItemList({
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          url: 'https://sensvinylo-store.com/vinyle/sabrina-espresso',
          name: 'espresso 7" brown vinyl',
          image: '/vinyles/Sanstitre-1_ac83f023-0c7d-4244-9f58-5499f020b64f.webp',
          description: "Après son dernier single \"feather\", \"espresso\" est le prochain triomphe de Sabrina. Vinyle de 7 pouces en brun chocolat. Veuillez noter que la couleur du vinyle peut varier légèrement par rapport à la photo.",
          sku: 'sabrina-espresso',
          brand: 'Sabrina Carpenter',
          aggregateRating: {
            '@type': 'AggregateRating',
          },
          review: {
            '@type': 'Review',
          },
          offers: {
            '@type': 'Offer',
            price: '10.99',
            priceCurrency: 'EUR',
            availability: 'InStock',
            priceValidUntil: '2024-12-31',
            url: 'https://sensvinylo-store.com/vinyle/sabrina-espresso',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                businessDays: "1-2",
              },
              cutoffTime: "12:00:15Z",
              shippingRate: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '4.65',
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              refundType: 'FullRefund',
              returnPolicyCategory: 'InStoreReturnPolicy',
              restockingFee: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '0.00',
              },
            },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          url: 'https://sensvinylo-store.com/vinyle/lana-ocean-blvd',
          name: 'Did you know that there\'s a tunnel under Ocean Blvd(festival edition) - Double vinyle orange',
          image: '/vinyles/LanaDelRey_ea7d36a2-0cb6-48a0-a5a9-c5d4657b0a1a.webp',
          description: "Did you know that there's a tunnel under Ocean Blvd est le neuvième album studio de la célèbre auteure-compositrice-interprète Lana Del Rey. Il comprend 16 titres et des interludes, avec notamment Father John Misty, Tommy Genesis, Jon Batiste, Bleachers et bien d'autres. Il fait suite aux albums Chemtrails Over The Country Club et Blue Banisters, sortis en 2021. La version festival en édition limitée comprend un artwork alternatif et un vinyle orange \"heavyweight\".",
          sku: 'lana-ocean-blvd',
          brand: 'Lana Del Rey',
          aggregateRating: {
            '@type': 'AggregateRating',
          },
          review: {
            '@type': 'Review',
          },
          offers: {
            '@type': 'Offer',
            price: '39.99',
            priceCurrency: 'EUR',
            availability: 'InStock',
            priceValidUntil: '2024-12-31',
            url: 'https://sensvinylo-store.com/vinyle/lana-ocean-blvd',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                businessDays: "1-2",
              },
              cutoffTime: "12:00:15Z",
              shippingRate: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '4.65',
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              refundType: 'FullRefund',
              returnPolicyCategory: 'InStoreReturnPolicy',
              restockingFee: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '0.00',
              },
            },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          url: 'https://sensvinylo-store.com/vinyle/aurora-heart',
          name: 'What Happened To The Heart? - Double vinyle exclusif',
          image: '/vinyles/D2CSplatter2LPvinyl_095bd0f3-0a87-465f-b60f-d73f24685853.webp',
          description: "En avril 2022, AURORA a lu une lettre qui a changé sa vie. Elle a été co-écrite par des militants autochtones, intitulé « Nous sommes la Terre », et appelait à une révolution : une réponse collective au réchauffement climatique – pour « guérir la terre ». Ils ont décrit être connectés à la terre « à travers notre cœur » et à la terre comme « le cœur qui palpite en nous ». La lettre a amené AURORA à réfléchir à une question : What Happened To The Heart? C’est ainsi qu’elle a commencé à étudier des livres sur l’anatomie humaine, voulant comprendre quand et pourquoi la culture occidentale a perdu contact avec le but le plus profond de notre organe le plus vital. What Happened To The Heart? est un voyage de la faiblesse à la force, de l'autodestruction à l'auto-guérison. Un voyage musical poignant et introspectif qui explore la perte de lien spirituel dans la société moderne, le pouvoir de guérison de la vulnérabilité et l'appel à déclencher le changement en réunissant le cœur avec la politique et la croissance personnelle.",
          sku: 'aurora-heart',
          brand: 'AURORA',
          aggregateRating: {
            '@type': 'AggregateRating',
          },
          review: {
            '@type': 'Review',
          },
          offers: {
            '@type': 'Offer',
            price: '37.99',
            priceCurrency: 'EUR',
            availability: 'InStock',
            priceValidUntil: '2024-12-31',
            url: 'https://sensvinylo-store.com/vinyle/aurora-heart',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                businessDays: "1-2",
              },
              cutoffTime: "12:00:15Z",
              shippingRate: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '4.65',
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              refundType: 'FullRefund',
              returnPolicyCategory: 'InStoreReturnPolicy',
              restockingFee: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '0.00',
              },
            },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Product',
          url: 'https://sensvinylo-store.com/vinyle/booba-ae',
          name: 'Æ - Vinyle rouge',
          image: '/vinyles/Vinyle1000_2.webp',
          description: "Vinyle édition limitée de l'album Æ de Booba. Disponible en rouge.",
          sku: 'booba-ae',
          brand: 'Booba',
          aggregateRating: {
            '@type': 'AggregateRating',
          },
          review: {
            '@type': 'Review',
          },
          offers: {
            '@type': 'Offer',
            price: '27.99',
            priceCurrency: 'EUR',
            availability: 'InStock',
            priceValidUntil: '2024-12-31',
            url: 'https://sensvinylo-store.com/vinyle/booba-ae',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                businessDays: "1-2",
              },
              cutoffTime: "12:00:15Z",
              shippingRate: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '4.65',
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              refundType: 'FullRefund',
              returnPolicyCategory: 'InStoreReturnPolicy',
              restockingFee: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '0.00',
              },
            },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Product',
          url: 'https://sensvinylo-store.com/vinyle/zayn-room',
          name: 'Room Under The Stairs - CD',
          image: '/vinyles/ZaynCD.webp',
          description: "Au cours des six dernières années, Zayn a écrit son quatrième album studio dans son studio en milieu rural en Pennsylvanie. Cet album marque sa sortie la plus personnelle à ce jour, reflétant où il en est dans sa vie tout en explorant les complexités de la guérison, du calme et de la croissance. Il voit également l'artiste qui plie les genres explorer un nouveau son, en s'appuyant sur sa voix émouvante, ses instruments live et son lyrisme poétique en tant qu'auteur-compositeur. L'album a été coproduit par Zayn avec le producteur de disques Dave Cobb, lauréat de 9 Grammy Awards. Ce sera le premier album de Zayn avec Mercury Records.",
          sku: 'zayn-room',
          brand: 'Zayn',
          aggregateRating: {
            '@type': 'AggregateRating',
          },
          review: {
            '@type': 'Review',
          },
          offers: {
            '@type': 'Offer',
            price: '44.99',
            priceCurrency: 'EUR',
            availability: 'InStock',
            priceValidUntil: '2024-12-31',
            url: 'https://sensvinylo-store.com/vinyle/zayn-room',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                businessDays: "1-2",
              },
              cutoffTime: "12:00:15Z",
              shippingRate: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '4.65',
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              refundType: 'FullRefund',
              returnPolicyCategory: 'InStoreReturnPolicy',
              restockingFee: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '0.00',
              },
            },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Product',
          url: 'https://sensvinylo-store.com/vinyle/amy-back-black',
          name: 'Back to Black: Songs from the Original Motion Picture - Vinyle couleur exclusif',
          image: '/vinyles/AW_BTB_1LP_PeachVinyl_Expanded_Packshot.webp',
          description: "La bande originale officielle du nouveau film d'Amy Winehouse, BACK TO BLACK, qui sortira au printemps 2024. Amy Winehouse est largement considérée comme l'une des plus grandes artistes de l'histoire récente.  Avec Plus de 30 millions de disques vendus dans le monde, son album Back to Black, autoproduit et acclamé, sorti en 2006, l'a propulsée au rang de star mondiale et lui a permis de remporter 5 Grammy Awards (un record à l'époque), dont celui du disque de l'année et celui de la chanson de l'année pour pour le single Rehab. Sorti sur un vinyle 1LP Couleur de 140g, couleur pêche, la liste des titres comprend une collection d'enregistrements originaux d'Amy et des morceaux de ses idoles, telles que The Shangri-Las, Billie Holiday et Dinah Washington, qui figurent dans le film, ainsi qu'un nouveau titre original chanté par Nick Cave. Le produit en vinyle est présenté dans une pochette simple avec des intérieurs imprimés comportant une note personnelle du réalisateur, Sam Taylor-Johnson.",
          sku: 'amy-back-black',
          brand: 'Amy Winehouse',
          aggregateRating: {
            '@type': 'AggregateRating',
          },
          review: {
            '@type': 'Review',
          },
          offers: {
            '@type': 'Offer',
            price: '29.99',
            priceCurrency: 'EUR',
            availability: 'InStock',
            priceValidUntil: '2024-12-31',
            url: 'https://sensvinylo-store.com/vinyle/amy-back-black',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                businessDays: "1-2",
              },
              cutoffTime: "12:00:15Z",
              shippingRate: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '4.65',
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              refundType: 'FullRefund',
              returnPolicyCategory: 'InStoreReturnPolicy',
              restockingFee: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '0.00',
              },
            },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 7,
        item: {
          '@type': 'Product',
          url: 'https://sensvinylo-store.com/vinyle/olivia-guts',
          name: 'GUTS (spilled) - Vinyle Splatter Version Deluxe',
          image: '/vinyles/Splatter_d7771153-ef5a-45b2-aacb-719133db4efd.webp',
          description: "L'artiste d'enregistrement primée à trois reprises aux GRAMMY®, Olivia Rodrigo, réédite GUTS sur un vinyle de luxe en édition extrêmement limitée. logé dans une veste gatefold, Présentant des illustrations retravaillées et 5 titres supplémentaires, ce vinyle éclaboussé en édition spéciale est le seul pressage contenant la collection complète des chansons de GUTS. Disponible en précommande maintenant. GUTS a été enregistré avec le producteur Daniel Nigro, qui a également collaboré avec Olivia sur SOUR, son premier album en tête des charts, 4x platine. \"Pour moi, cet album parle de douleurs de croissance et d'essayer de comprendre qui je suis à ce stade de ma vie et exactement ce que je veux dire dans mes chansons.\"",
          sku: 'olivia-guts',
          brand: 'Olivia Rodrigo',
          aggregateRating: {
            '@type': 'AggregateRating',
          },
          review: {
            '@type': 'Review',
          },
          offers: {
            '@type': 'Offer',
            price: '39.99',
            priceCurrency: 'EUR',
            availability: 'InStock',
            priceValidUntil: '2024-12-31',
            url: 'https://sensvinylo-store.com/vinyle/olivia-guts',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                businessDays: "1-2",
              },
              cutoffTime: "12:00:15Z",
              shippingRate: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '4.65',
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              refundType: 'FullRefund',
              returnPolicyCategory: 'InStoreReturnPolicy',
              restockingFee: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '0.00',
              },
            },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 8,
        item: {
          '@type': 'Product',
          url: 'https://sensvinylo-store.com/vinyle/billie-hit-me',
          name: 'HIT ME HARD AND SOFT - Vinyle exclusif milky white',
          image: '/vinyles/BILLIE-HIT-ME-HARD-Vinyl-IntD2C-3-Product-Shot-Milky-White-1000x1000.webp',
          description: "Le troisième album studio de Billie Eilish, \"HIT ME HARD AND SOFT\", sorti via Darkroom/Interscope Records, est son œuvre la plus audacieuse à ce jour, une collection de chansons à la fois diversifiée et cohérente - idéalement écoutée dans son intégralité du début à la fin - exactement comme le suggère le titre de l’album ; vous frappe fort et doucement, tant au niveau des paroles que du son, tout en contournant les genres et en défiant les tendances en cours de route. Avec l'aide de son frère et unique collaborateur, FINNEAS, le duo a écrit, enregistré et produit l'album ensemble dans leur ville natale de Los Angeles. Cet album fait suite à ses deux albums à succès « WHEN WE ALL FALL ASLEEP, WHERE DO WE GO ? » et « Happier Than Ever » et vise à développer davantage le monde de Billie Eilish.",
          sku: 'billie-hit-me',
          brand: 'Billie Eilish',
          aggregateRating: {
            '@type': 'AggregateRating',
          },
          review: {
            '@type': 'Review',
          },
          offers: {
            '@type': 'Offer',
            price: '34.99',
            priceCurrency: 'EUR',
            availability: 'InStock',
            priceValidUntil: '2024-12-31',
            url: 'https://sensvinylo-store.com/vinyle/billie-hit-me',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                businessDays: "1-2",
              },
              cutoffTime: "12:00:15Z",
              shippingRate: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '4.65',
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              refundType: 'FullRefund',
              returnPolicyCategory: 'InStoreReturnPolicy',
              restockingFee: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '0.00',
              },
            },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 9,
        item: {
          '@type': 'Product',
          url: 'https://sensvinylo-store.com/vinyle/the-weeknd-one-of-girls-popular',
          name: 'ONE OF THE GIRLS + POPULAR -  VINYLE 7”',
          image: '/vinyles/Image20240307213115.webp',
          description: "Obtenez une édition spéciale en vinyle 7\" des chansons à succès de The Weeknd",
          sku: 'the-weeknd-one-of-girls-popular',
          brand: 'The Weeknd',
          aggregateRating: {
            '@type': 'AggregateRating',
          },
          review: {
            '@type': 'Review',
          },
          offers: {
            '@type': 'Offer',
            price: '10.99',
            priceCurrency: 'EUR',
            availability: 'InStock',
            priceValidUntil: '2024-12-31',
            url: 'https://sensvinylo-store.com/vinyle/the-weeknd-one-of-girls-popular',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                businessDays: "1-2",
              },
              cutoffTime: "12:00:15Z",
              shippingRate: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '4.65',
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              refundType: 'FullRefund',
              returnPolicyCategory: 'InStoreReturnPolicy',
              restockingFee: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '0.00',
              },
            },
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 10,
        item: {
          '@type': 'Product',
          url: 'https://sensvinylo-store.com/vinyle/ariana-positions',
          name: 'POSITIONS - VINYLE',
          image: '/vinyles/visuellpcouleur.webp',
          description: "Ariana Grande fait partie de ces artistes précoces que les Etats Unis arrivent à mettre en lumière, comme avant elle Britney Spears ou Justin Timberlake, à travers les productions de sitcom Disney ou Nickelodeon. C’est donc très jeune que la jeune Ariana rencontre le succès mais surtout la rigueur qu’exige une vie rythmée par les tournages, les scènes et les opérations marketing intenses. Bien plus qu’un minois que l’on expose aux enfants d’outre-Atlantique, Mlle Grande a une voix et quelle voix ? C’est en 2013 que la carrière de la chanteuse va prendre un tournant définitif, quand elle sort son premier Album. Sortie fin 2020, « Position » est le 6e opus de l’artiste. Une fois de plus Ariana Grande met tout le monde d’accord et continue d’imposer au paysage Pop international, sa voix unique. Dans cet album la chanteuse s’appuie sur des productions efficaces et des featuring de poids tels que Dodja Cat, Ty Dolla $ign et The Weeknd. Retrouvez cette petite pépite Pop en édition vinyle couleur.",
          sku: 'ariana-positions',
          brand: 'Ariana Grande',
          aggregateRating: {
            '@type': 'AggregateRating',
          },
          review: {
            '@type': 'Review',
          },
          offers: {
            '@type': 'Offer',
            price: '19.99',
            priceCurrency: 'EUR',
            availability: 'InStock',
            priceValidUntil: '2024-12-31',
            url: 'https://sensvinylo-store.com/vinyle/ariana-positions',
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                businessDays: "1-2",
              },
              cutoffTime: "12:00:15Z",
              shippingRate: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '4.65',
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              refundType: 'FullRefund',
              returnPolicyCategory: 'InStoreReturnPolicy',
              restockingFee: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: '0.00',
              },
            },
          },
        },
      },
    ],
  })
])
</script>

<template>
  <main>
    <!-- banner and slogan -->
    <section class="flex flex-col items-center justify-center my-4">
      <NuxtPicture src="/banner.webp" :imgAttrs="{ alt: 'image pour la bannière du slogan', loading: 'lazy' }"
        width="1470" height="773" sizes="sm:200px md:500px lg:1024" />
      <h1 class="md:text-4xl font-bold text-center absolute bg-gray-900 p-2 text-white">
        Sensvinylo, La passion du vinyle à votre portée.
      </h1>
    </section>
    <!-- carousel products -->
    <section class="flex flex-col items-center my-4">
      <span class="text-2xl font-bold md:text-4xl">Découvrez nos produits</span>
      <AppCarousel />
      <article class="flex flex-col my-6 gap-1 p-2 md:gap-3">
        <span class="text-xl font-bold text-center md:text-4xl md:mt-3">Sensvinylo : Votre spécialiste du vinyle depuis
          2001</span>
        <p> Sensvinylo, né en 2001 de la passion commune d'Inès et Stéphane pour la musique et les vinyles, est
          aujourd'hui
          l'un
          des leaders de la vente de vinyles en France. Notre mission ? Partager notre amour du vinyle avec le plus
          grand
          nombre
          et vous offrir une expérience d'achat unique.</p>
        <span class="text-lg font-semibold md:text-3xl">Un large choix de vinyles pour tous les goûts</span>
        <p>Que vous soyez à la recherche du dernier album de votre artiste préféré ou d'un vinyle rare et vintage, vous
          trouverez forcément votre bonheur chez Sensvinylo. Nous proposons une large sélection de vinyles neufs et
          d'occasion, tous styles confondus : rock, pop, jazz, classique, électro, bandes originales de films...</p>

        <span class="text-lg font-semibold md:text-3xl">Des services de qualité pour une expérience client
          optimale</span>
        <p class="xl:self-start">En plus de notre large sélection de vinyles, nous vous proposons des services de
          qualité
          pour vous accompagner
          tout au long de votre expérience d'achat :</p>
        <ul>
          <li class="xl:self-start"><span class="font-semibold">Conseils personnalisés</span>: notre équipe de
            passionnés
            est
            à votre disposition
            pour vous conseiller et vous aider à
            trouver le vinyle parfait pour vos besoins.</li>
          <li class="xl:self-start"><span class="font-semibold">Livraison rapide et sécurisée</span>: nous expédions vos
            vinyles dans les meilleurs
            délais et avec le plus grand soin.</li>
          <li class="xl:self-start"><span class="font-semibold">Paiement sécurisé</span>: vous pouvez régler votre
            commande
            en
            toute sécurité par
            carte bancaire, PayPal ou virement bancaire.</li>
          <li class="xl:self-start"><span class="font-semibold">Service après-vente</span>: nous sommes à votre
            disposition
            pour répondre à toutes
            vos questions et pour vous aider en cas de problème.</li>
        </ul>
        <span class="text-lg font-semibold md:text-3xl">Sensvinylo : bien plus qu'un simple magasin de vinyles</span>
        <p>Sensvinylo, c'est aussi <b>une communauté de passionnés de vinyles</b>. Nous organisons régulièrement des
          événements
          dans
          notre boutique, tels que des soirées d'écoute, des concerts et des rencontres avec des artistes.</p>
        <span class="text-lg font-semibold md:text-3xl">Votre passion du vinyle, notre expertise</span>
        <p class="xl:self-start"> Que vous soyez un collectionneur chevronné ou un simple amateur de musique, Sensvinylo
          est
          votre adresse
          incontournable pour tout ce qui concerne le vinyle. <br>
          Rendez-nous visite dans notre boutique ou consultez notre site web pour
          découvrir notre univers.
        </p>
        <span class="text-lg font-semibold md:text-3xl">Sensvinylo : le paradis des amoureux du vinyle</span>
      </article>
      <article
        class="w-full h-36 md:h-48 bg-black flex flex-col items-center justify-center text-white font-bold dark:bg-transparent dark:border-t dark:border-b dark:border-white">
        <span class="md:text-3xl">Des vinyles pour tous les goûts et tous les budgets !</span>
        <span class="font-semibold text-sm md:text-xl">Ne manquez pas nos dernières actualités et promotions</span>
        <div class="flex justify-between items-center gap-4 mt-4 md:gap-11 md:text-xl">
          <NuxtLink to="produits" class="border-orange-500 border p-2 md:p-4">Voir nos produits →</NuxtLink>
          <NuxtLink to="blogs" class="border-yellow-400 border p-2 md:p-4">Découvrir notre blog →</NuxtLink>
        </div>
      </article>
    </section>
  </main>
</template>