<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import database from '../assets/database.json'

useSeoMeta({
  title: 'Vinyles Pop, Rock, Rap & Musique du Monde – Sensvinylo',
  ogTitle: 'Vinyles Pop, Rock, Rap & Musique du Monde – Sensvinylo',
  description: 'Achetez des vinyles pas chers en ligne sur sensvinylo-store.com. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus.',
  ogDescription: 'Achetez des vinyles pas chers en ligne sur sensvinylo-store.com. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus.',
  ogImage: '/banner.webp',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
    url: 'https://sensvinylo-store.com/produits',
    name: 'Vinyles Pop, Rock, Rap & Musique du Monde – Sensvinylo',
    description: 'Achetez des vinyles pas chers en ligne sur sensvinylo-store.com. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus.',
    inLanguage: 'fr-FR',
  }),
])

interface Vinyl {
  id: number;
  status: string | null;
  image: string;
  title: string;
  artist: number;
  year: number;
  genre: number;
  price: number;
  old_price: number | null;
  description: string;
  token: string;
}

const cards = ref<Vinyl[]>([])
onMounted(async () => {
  try {
    cards.value = database.vinyles.map(vinyl => ({
      ...vinyl,
      year: vinyl.year ?? 0
    }));
  } catch (error) {
    console.error('Error loading data:', error);
  }
})
</script>

<template>
  <section class="flex flex-col items-center my-4">
    <article class="mt-4 grid grid-cols-2 gap-2 px-2 md:grid-cols-3 xl:grid-cols-4">
      <AppCard v-for="(card, index) in cards" :key="index" :cardBanner="card.status ?? ''" :cardImage="card.image"
        :cardTitle="card.title" :cardPrice="card.price" :cardOldPrice="card.old_price ?? undefined" :cardToken="card.token" />
    </article>
  </section>
</template>
