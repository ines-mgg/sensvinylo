<script setup lang="ts">
const stores = ref([
  {
    id: 1,
    city: "Paris",
    address: "23 Rue de Turenne, 75004 Paris",
    description:
      "Découvrez notre large sélection de vinyles neufs et d'occasion à Paris, dans le 4ème arrondissement. Sensvinylo, un large choix pour les amateurs de musique de tous styles.",
  },
  {
    id: 2,
    city: "Montreuil",
    address: "12 Rue de Paris, 93100 Montreuil",
    description:
      "Plongez dans l'univers musical de Sensvinylo à Montreuil. Découvrez des vinyles rares et des pépites vintage.",
  },
  {
    id: 3,
    city: "Saint-Ouen",
    address: "Marché aux Puces de Saint-Ouen, Allée 2, 93400 Saint-Ouen",
    description:
      "Chinez parmi des milliers de vinyles au Marché aux Puces de Saint-Ouen, avec Sensvinylo.",
  },
  {
    id: 4,
    city: "Versailles",
    address: "26 Rue de la Pompe, 78000 Versailles",
    description:
      "Sensvinylo à Versailles, pour une expérience musicale raffinée. Vinyles classiques, jazz et musiques du monde.",
  },
  {
    id: 5,
    city: "Nanterre",
    address: "Centre Commercial Les Terrasses, 92000 Nanterre",
    description:
      "Retrouvez Sensvinylo à Nanterre pour une large sélection de vinyles et d'accessoires.",
  },
  {
    id: 6,
    city: "Créteil",
    address: "Centre Commercial Créteil Soleil, 94000 Créteil",
    description:
      "Sensvinylo à Créteil, votre destination pour les vinyles neufs et d'occasion.",
  },
  {
    id: 7,
    city: "Argenteuil",
    address: "15 Rue Voltaire, 95100 Argenteuil",
    description:
      "Découvrez Sensvinylo à Argenteuil et sa collection unique de vinyles.",
  },
  {
    id: 8,
    city: "Colombes",
    address: "5 Place du Général de Gaulle, 92700 Colombes",
    description: "Sensvinylo à Colombes, pour tous les passionnés de musique.",
  },
  {
    id: 9,
    city: "Pantin",
    address: "10 Rue du Canal, 93500 Pantin",
    description:
      "Sensvinylo à Pantin, une ambiance musicale unique et une large sélection de vinyles.",
  },
  {
    id: 10,
    city: "Bondy",
    address: "Centre Commercial Rosny 2, 93100 Bondy",
    description:
      "Retrouvez Sensvinylo à Bondy et sa collection de vinyles pour tous les goûts.",
  },
]);

useSeoMeta({
  title: "Trouvez le Magasin Sensvinylo le Plus Proche de Chez Vous",
  description:
    "Trouvez le magasin Sensvinylo le plus proche de chez vous. Nous avons plusieurs points de vente à Paris et en Ile-de-France.",
});
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none"
      >
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div>
            <h2 class="text-3xl font-bold tracking-tight">
              Sensvinylo - Votre passion du vinyle partagée
            </h2>
            <p class="mt-4 leading-7">
              Depuis 2001, Sensvinylo est votre passion du vinyle partagée.
              Découvrez nos magasins dans plusieurs villes françaises et plongez
              dans un univers musical unique.
            </p>
          </div>
          <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
          >
            <div
              v-for="store in stores"
              :key="store.id"
              class="rounded-2xl bg-gray-50 p-10"
            >
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                {{ store.city }}
              </h3>
              <address
                class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600"
              >
                <p>{{ store.address }}</p>
                <p>{{ store.description }}</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 
Texte à utiliser pour la page magasins.vue

Sensvinylo : Votre paradis du vinyle à Paris et en Île-de-France

Sensvinylo est heureux de vous proposer un large réseau de magasins physiques où vous pouvez découvrir notre collection de vinyles et rencontrer notre équipe passionnée.
Venez découvrir notre large sélection de vinyles neufs et d'occasion, tous styles confondus, dans l'un de nos magasins à Paris et en Île-de-France.

Que pouvez-vous trouver dans nos magasins ?

Une large sélection de vinyles neufs et d'occasion, tous styles confondus
Des produits dérivés tels que des platines, des casques, des affiches et des tee-shirts
Des conseils personnalisés de notre équipe de passionnés
Des événements spéciaux tels que des concerts et des DJ sets
Venez nous rendre visite !

Nos magasins:

Magasin Paris 1er arrondissement:
Adresse: [Adresse du magasin Paris 1]
Horaires d'ouverture: [Horaires d'ouverture du magasin Paris 1]
Téléphone: [Numéro de téléphone du magasin Paris 1]
Accès: [Informations sur l'accès au magasin Paris 1]
Services: [Services disponibles au magasin Paris 1]

Magasin Paris 2e arrondissement:
Adresse: [Adresse du magasin Paris 2]
Horaires d'ouverture: [Horaires d'ouverture du magasin Paris 2]
Téléphone: [Numéro de téléphone du magasin Paris 2]
Accès: [Informations sur l'accès au magasin Paris 2]
Services: [Services disponibles au magasin Paris 2]

Magasin Paris 10e arrondissement:
Adresse: [Adresse du magasin Paris 10]
Horaires d'ouverture: [Horaires d'ouverture du magasin Paris 10]
Téléphone: [Numéro de téléphone du magasin Paris 10]
Accès: [Informations sur l'accès au magasin Paris 10]
Services: [Services disponibles au magasin Paris 10]

Magasin Vincennes:
Adresse: [Adresse du magasin Vincennes]
Horaires d'ouverture: [Horaires d'ouverture du magasin Vincennes]
Téléphone: [Numéro de téléphone du magasin Vincennes]
Accès: [Informations sur l'accès au magasin Vincennes]
Services: [Services disponibles au magasin Vincennes]

Magasin Saint-Ouen:
Adresse: [Adresse du magasin Saint-Ouen]
Horaires d'ouverture: [Horaires d'ouverture du magasin Saint-Ouen]
Téléphone: [Numéro de téléphone du magasin Saint-Ouen]
Accès: [Informations sur l'accès au magasin Saint-Ouen]
Services: [Services disponibles au magasin Saint-Ouen]

Magasin Lyon:
Adresse: [Adresse du magasin Lyon]
Horaires d'ouverture: [Horaires d'ouverture du magasin Lyon]
Téléphone: [Numéro de téléphone du magasin Lyon]
Accès: [Informations sur l'accès au magasin Lyon]
Services: [Services disponibles au magasin Lyon]

Magasin Marseille:
Adresse: [Adresse du magasin Marseille]
Horaires d'ouverture: [Horaires d'ouverture du magasin Marseille]
Téléphone: [Numéro de téléphone du magasin Marseille]
Accès: [Informations sur l'accès au magasin Marseille]
Services: [Services disponibles au magasin Marseille]


En plus de nos magasins physiques, nous proposons également un service de vente en ligne sur notre site web https://sensvinylo.store/.

N'hésitez pas à nous contacter si vous avez des questions ou si vous souhaitez plus d'informations sur nos magasins.

Nous vous attendons avec impatience dans l'un de nos magasins Sensvinylo ! -->

<!--
  const stores = ref([
  {
    id: 1,
    name: "Magasin Paris 1er arrondissement",
    address: "[Adresse du magasin Paris 1]",
    hours: "[Horaires d'ouverture du magasin Paris 1]",
    phone: "[Numéro de téléphone du magasin Paris 1]",
    access: "[Informations sur l'accès au magasin Paris 1]",
    services: ["Service 1", "Service 2"],
  },
  {
    id: 2,
    name: "Magasin Paris 2e arrondissement",
    address: "[Adresse du magasin Paris 2]",
    hours: "[Horaires d'ouverture du magasin Paris 2]",
    phone: "[Numéro de téléphone du magasin Paris 2]",
    access: "[Informations sur l'accès au magasin Paris 2]",
    services: ["Service 1", "Service 2"],
  },
  {
    id: 3,
    name: "Magasin Paris 10e arrondissement",
    address: "[Adresse du magasin Paris 10]",
    hours: "[Horaires d'ouverture du magasin Paris 10]",
    phone: "[Numéro de téléphone du magasin Paris 10]",
    access: "[Informations sur l'accès au magasin Paris 10]",
    services: ["Service 1", "Service 2"],
  },
  {
    id: 4,
    name: "Magasin Vincennes",
    address: "[Adresse du magasin Vincennes]",
    hours: "[Horaires d'ouverture du magasin Vincennes]",
    phone: "[Numéro de téléphone du magasin Vincennes]",
    access: "[Informations sur l'accès au magasin Vincennes]",
    services: ["Service 1", "Service 2"],
  },
  {
    id: 5,
    name: "Magasin Saint-Ouen",
    address: "[Adresse du magasin Saint-Ouen]",
    hours: "[Horaires d'ouverture du magasin Saint-Ouen]",
    phone: "[Numéro de téléphone du magasin Saint-Ouen]",
    access: "[Informations sur l'accès au magasin Saint-Ouen]",
    services: ["Service 1", "Service 2"],
  },
  {
    id: 6,
    name: "Magasin Lyon",
    address: "[Adresse du magasin Lyon]",
    hours: "[Horaires d'ouverture du magasin Lyon]",
    phone: "[Numéro de téléphone du magasin Lyon]",
    access: "[Informations sur l'accès au magasin Lyon]",
    services: ["Service 1", "Service 2"],
  },
  {
    id: 7,
    name: "Magasin Marseille",
    address: "[Adresse du magasin Marseille]",
    hours: "[Horaires d'ouverture du magasin Marseille]",
    phone: "[Numéro de téléphone du magasin Marseille]",
    access: "[Informations sur l'accès au magasin Marseille]",
    services: ["Service 1", "Service 2"],
  },
]);
-->
