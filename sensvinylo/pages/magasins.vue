<script setup lang="ts">
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

useSeoMeta({
  title: "Trouvez le Magasin Sensvinylo le Plus Proche de Chez Vous",
  description:
    "Trouvez le magasin Sensvinylo le plus proche de chez vous. Nous avons plusieurs points de vente à Paris et en Ile-de-France.",
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-6">
      Sensvinylo : Votre paradis du vinyle à Paris et en Île-de-France
    </h1>
    <p class="text-lg leading-relaxed mb-4">
      Sensvinylo est heureux de vous proposer un large réseau de magasins
      physiques où vous pouvez découvrir notre collection de vinyles et
      rencontrer notre équipe passionnée. Venez découvrir notre large sélection
      de vinyles neufs et d'occasion, tous styles confondus, dans l'un de nos
      magasins à Paris et en Île-de-France.
    </p>
    <div class="my-8">
      <h2 class="text-2xl font-semibold mb-3">
        Que pouvez-vous trouver dans nos magasins ?
      </h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          Une large sélection de vinyles neufs et d'occasion, tous styles
          confondus
        </li>
        <li>
          Des produits dérivés tels que des platines, des casques, des affiches
          et des tee-shirts
        </li>
        <li>Des conseils personnalisés de notre équipe de passionnés</li>
        <li>Des événements spéciaux tels que des concerts et des DJ sets</li>
      </ul>
    </div>
    <h2 class="text-2xl font-semibold mb-3">Venez nous rendre visite !</h2>
    <section class="space-y-8">
      <div v-for="store in stores" :key="store.id" class="rounded-lg p-6">
        <h3 class="text-xl font-semibold">{{ store.name }}</h3>
        <p><span class="font-medium">Adresse:</span> {{ store.address }}</p>
        <p>
          <span class="font-medium">Horaires d'ouverture:</span>
          {{ store.hours }}
        </p>
        <p><span class="font-medium">Téléphone:</span> {{ store.phone }}</p>
        <p><span class="font-medium">Accès:</span> {{ store.access }}</p>
        <p>
          <span class="font-medium">Services:</span>
          {{ store.services.join(", ") }}
        </p>
      </div>
    </section>
    <p class="mt-8">
      En plus de nos magasins physiques, nous proposons également un service de
      vente en ligne sur notre site web.
    </p>
    <p class="mb-6">
      N'hésitez pas à nous contacter si vous avez des questions ou si vous
      souhaitez plus d'informations sur nos magasins.
    </p>
    <p class="font-semibold">
      Nous vous attendons avec impatience dans l'un de nos magasins Sensvinylo !
    </p>
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
