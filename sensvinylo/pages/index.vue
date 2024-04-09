<script setup lang="ts">
import AppCarousel from '~/components/AppCarousel.vue';

useSeoMeta({ 
  title: 'Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
  description: 'Sensvinylo, le paradis des vinyles à Paris et en Ile-de-France. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus.',
})
</script>

<template>
  <!-- banner and slogan -->
  <section class="flex flex-col items-center justify-center my-4">
    <img src="/banner.webp" alt="Sensvinylo logo" class="" />
    <h1 class="text-lg md:text-4xl font-bold text-center absolute bg-gray-900 p-2">Sensvinylo, La passion du vinyle à votre portée.</h1>
  </section>
  <!-- carousel products -->
  <section class="flex flex-col items-center gap-8 my-4">
    <AppCarousel />
  </section>
  <!-- <section class="flex flex-col items-center gap-8 my-4">
  <h1 class="hidden text-4xl font-bold text-center xl:block">Sensvinylo, La passion du vinyle à votre portée.</h1>
  <AppCarousel />
  </section> -->
</template>
