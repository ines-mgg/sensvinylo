<script setup lang="ts">
import AppCarousel from '~/components/AppCarousel.vue';

useSeoMeta({ 
  title: 'Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
  description: 'Sensvinylo, le paradis des vinyles à Paris et en Ile-de-France. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus. Les vinyles de vos artistes préférés en exclusivité chez Sensvinylo.',
})
</script>

<template>
  <!-- banner and slogan -->
  <section class="flex flex-col items-center justify-center my-4">
    <NuxtPicture
      src="/banner.webp"
      :imgAttrs="{alt:'image pour la bannière du slogan'}"
    />

    <h1 class="text-lg md:text-4xl font-bold text-center absolute bg-gray-900 p-2 text-white">Sensvinylo, La passion du vinyle à votre portée.</h1>
  </section>
  <!-- carousel products -->
  <section class="flex flex-col items-center my-4">
    <span class="text-2xl font-bold md:text-4xl">Découvrez nos produits</span>
    <AppCarousel />
  </section>
  <!-- sensvinylo history -->
  <section class="flex flex-col items-center my-6 gap-1 p-2 md:gap-3">
    <span class="text-xl font-bold text-center md:text-4xl md:mt-3">Sensvinylo, bien plus qu'un simple disquaire</span>
      <span class="custom-title text-lg font-semibold relative md:text-3xl">Notre histoire</span>
      <div class="text-justify p-4 pt-0 md:text-2xl">
        Sensvinylo est né d'une passion commune pour la musique et les vinyles. <br>
        Fondé en 2001 par Inès et Stéphane, notre objectif est de partager notre amour du vinyle avec le plus grand nombre. <br>
        Depuis nos débuts, nous avons parcouru un long chemin et nous sommes fiers d'être aujourd'hui l'un des leaders de la vente de 
        vinyles en France. <br>
        Nous proposons une large sélection de vinyles neufs et d'occasion, tous styles confondus, ainsi que des services de qualité à 
        nos clients.
      </div>
  </section>

    <div class="w-full h-36 md:h-48 bg-black flex flex-col items-center justify-center text-white font-bold dark:bg-transparent dark:border-t dark:border-b dark:border-white">
      <span class="md:text-3xl">Des vinyles pour tous les goûts et tous les budgets !</span>
      <span class="font-semibold text-sm md:text-xl">Ne manquez pas nos dernières actualités et promotions</span>
      <div class="flex justify-between items-center gap-4 mt-4 md:gap-11 md:text-xl">
        <NuxtLink to="/produits" class="border-orange-500 border p-2 md:p-4">Voir nos produits →</NuxtLink>
        <NuxtLink to="/blog" class="border-yellow-400 border p-2 md:p-4">Découvrir notre blog →</NuxtLink>
      </div>
    </div>

</template>