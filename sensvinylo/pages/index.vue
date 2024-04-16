<script setup lang="ts">
import AppCarousel from '~/components/AppCarousel.vue';

useSeoMeta({ 
  title: 'Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
  description: 'Sensvinylo, votre disquaire de vinyles à Paris et en Ile-de-France. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus. Les vinyles de vos artistes préférés en exclusivité chez Sensvinylo.',
})
</script>

<template>
  <!-- banner and slogan -->
  <section class="flex flex-col items-center justify-center my-4">
    <img src="/banner.webp" alt="Sensvinylo logo" class="" />
    <h1 class="text-lg md:text-4xl font-bold text-center absolute bg-gray-900 p-2 text-white">Sensvinylo, La passion du vinyle à votre portée.</h1>
  </section>
  <!-- carousel products -->
  <section class="flex flex-col items-center my-4">
    <span class="text-2xl font-bold">Découvrez nos produits</span>
    <AppCarousel />
  </section>
  <!-- sensvinylo history -->
  <section class="flex flex-col items-center my-4 gap-1" id="history">
    <article class="flex flex-col">
      <span class="text-2xl font-bold text-center">Sensvinylo, bien plus qu'un simple disquaire</span>
    </article>
    <article class="flex flex-col items-center">
      <span class="custom-title text-lg bold relative">Notre histoire</span>
      <p class="text-justify p-4 pt-0">
        Sensvinylo est né d'une passion commune pour la musique et les vinyles. <br>
        Fondé en 2001 par Inès et Stéphane, notre objectif est de partager notre amour du vinyle avec le plus grand nombre. <br>
        Depuis nos débuts, nous avons parcouru un long chemin et nous sommes fiers d'être aujourd'hui l'un des leaders de la vente de 
        vinyles en France. <br>
        Nous proposons une large sélection de vinyles neufs et d'occasion, tous styles confondus, ainsi que des services de qualité à 
        nos clients.
      </p>
    </article>
    <article class="flex flex-col items-center">
      <span class="custom-title text-lg bold relative">Nos valeurs</span>
      <p class="text-justify p-4 pt-0 flex flex-col">
        Chez Sensvinylo, nous sommes convaincus que la musique est un élément essentiel de la vie. <br>
        C'est pourquoi nous nous engageons à :
        <aside class="p-4 pt-0 flex flex-col text-sm custom-list">
        <span class="relative">Offrir une large sélection de vinyles à des prix abordables</span>
        <span class="relative">Proposer des services de qualité à nos clients</span>
        <span class="relative">Contribuer à la préservation du patrimoine musical</span>
        <span class="relative">Promouvoir la culture du vinyle</span>
        </aside>
      </p>
    </article>
    <article class="flex flex-col items-center">
      <span class="custom-title text-lg bold relative">Nos engagements</span>
      <aside class="pb-4 flex flex-col text-sm custom-list">
        <span class="relative">Proposer des vinyles de qualité</span>
        <span class="relative">Offrir un service client irréprochable</span>
        <span class="relative">Respecter l'environnement</span>
        <span class="relative">Soutenir les artistes et les labels indépendants</span>
      </aside>
    </article>
  </section>

</template>