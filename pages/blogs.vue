<script setup lang="ts">

import AppBlogCard from '~/components/AppBlogCard.vue';
import { getArticles } from '#imports';
import type Article from '~/interfaces/article';
import getSeoMeta from '~/Meta/getSeoMeta';
import getDefinedPage from '~/Meta/getDefinedPage';

const title = "Découvrez les articles de blog signé Sensvinylo";
const description = "Lisez les derniers articles du blog Sensvinylo. Retrouvez des conseils et astuces pour les collectionneurs de vinyles, des interviews d\'artistes et des actualités du monde du vinyle.";
getSeoMeta(title, description);

useSchemaOrg([
  getDefinedPage(
    `${window.location.origin}/blogs`,
    title,
    description
  ),
])

const articles = ref<Article[]>([]);
onMounted(async () => {
  try {
    articles.value = await getArticles();
  } catch (error) {
    console.error('Error loading data:', error);
  }
})
</script>

<template>
  <section class="flex flex-col items-center my-4 md:items-start">
    <article class="grid md:grid-cols-2 xl:grid-cols-3">
      <AppBlogCard v-for="(article, index) in articles" :key="index" :cardTitle="article.title"
        :cardAuthor="article.author" :cardDate="article.date" :cardImage="article.image" :cardSlug="article.slug" />
    </article>
  </section>
</template>
