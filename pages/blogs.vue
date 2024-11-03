<script setup lang="ts">
import AppBlogCard from '~/components/AppBlogCard.vue';
import database from '../assets/database.json'
useSeoMeta({
  title: 'Découvrez les articles de blog signé Sensvinylo',
  ogTitle: 'Découvrez les articles de blog signé Sensvinylo',
  description: 'Lisez les derniers articles du blog Sensvinylo. Retrouvez des conseils et astuces pour les collectionneurs de vinyles, des interviews d\'artistes et des actualités du monde du vinyle.',
  ogDescription: 'Lisez les derniers articles du blog Sensvinylo. Retrouvez des conseils et astuces pour les collectionneurs de vinyles, des interviews d\'artistes et des actualités du monde du vinyle.',
  ogImage: '/banner.webp',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
    url: 'https://sensvinylo-store.com/blogs',
    name: 'Découvrez les articles de blog signé Sensvinylo',
    description: 'Lisez les derniers articles du blog Sensvinylo. Retrouvez des conseils et astuces pour les collectionneurs de vinyles, des interviews d\'artistes et des actualités du monde du vinyle.',
    inLanguage: 'fr-FR',
  }),
])

interface Article {
  id: number;
  title: string;
  synopsis: string;
  image: string;
  slug: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}
const cards = ref<Article[]>([]);
onMounted(async () => {
  cards.value = database.articles
})
</script>

<template>
  <section class="flex flex-col items-center my-4 md:items-start">
    <article class="grid md:grid-cols-2 xl:grid-cols-3">
      <AppBlogCard v-for="(card, index) in cards" :key="index" :cardTitle="card.title" :cardAuthor="card.author"
        :cardDate="card.date" :cardImage="card.image" :cardSlug="card.slug" />
    </article>
  </section>
</template>
