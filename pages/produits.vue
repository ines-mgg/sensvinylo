<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import { getVinyls } from '#imports';
import type Vinyl from '~/interfaces/vinyl';
import getSeoMeta from '~/meta/getSeoMeta';
import getDefinedPage from '~/meta/getDefinedPage';

const title = "Vinyles Pop, Rock, Rap & Musique du Monde – Sensvinylo";
const description = "Achetez des vinyles pas chers en ligne sur sensvinylo-store.com. Découvrez notre large choix de vinyles neufs et d'occasion, tous styles confondus.";
getSeoMeta(title, description);

useSchemaOrg([
  getDefinedPage(
    `${window.location.origin}/produits`,
    title,
    description
  ),
])

const vinyls = ref<Vinyl[]>([])
onMounted(async () => {
  try {
    vinyls.value = await getVinyls();
  } catch (error) {
    console.error('Error loading data:', error);
  }
})
</script>

<template>
  <section class="flex flex-col items-center my-4">
    <article class="mt-4 grid grid-cols-2 gap-2 px-2 md:grid-cols-3 xl:grid-cols-4">
      <AppCard v-for="(vinyl, index) in vinyls" :key="index" :cardBanner="vinyl.status ?? ''" :cardImage="vinyl.image"
        :cardTitle="vinyl.title" :cardPrice="vinyl.price" :cardOldPrice="vinyl.old_price ?? undefined"
        :cardToken="vinyl.token" />
    </article>
  </section>
</template>
