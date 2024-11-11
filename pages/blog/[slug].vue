<script setup lang="ts">

import { useRoute } from 'vue-router'
import type Article from '~/interfaces/article';
import getArticle from '~/utils/getArticle';
import getOtherArticles from '~/utils/getOtherArticles';
import getSeoMeta from '~/meta/getSeoMeta';
import getDefinedPage from '~/meta/getDefinedPage';
import getDefinedArticle from '~/meta/getDefinedArticle';

const { slug } = useRoute().params
const article = ref<Article | null>(null)
const otherArtciles = ref<Article[]>([])

onMounted(async () => {
  try {
    article.value = getArticle(Array.isArray(slug) ? slug : [slug]);
    if (article.value) {
      otherArtciles.value = getOtherArticles(Array.isArray(slug) ? slug : [slug]) || [];

      const title = `${article.value.title} | article signé Sensvinylo, votre disquaire en ligne et en magasins physiques à Paris et en Île-de-France, vous propose une large sélection de vinyles neufs et d'occasion pour tous les goûts et tous les budgets.`;
      const description = article.value.synopsis;
      getSeoMeta(title, description);

      useSchemaOrg([
        getDefinedPage(
          `${window.location.origin}/blog/${article.value.slug}`,
          title,
          description
        ),
        getDefinedArticle(article.value),
        defineImage({
          url: article.value.image,
          caption: article.value.title,
          width: 1900,
          height: 1140,
          inLanguage: 'fr-FR',
        })
      ])
    } else {
      throw createError({
        statusCode: 404,
        fatal: true
      });
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
})
</script>

<template>
  <section class="flex flex-col items-center p-2">
    <NuxtPicture v-if="article" :src="article.image" :imgAttrs="{ alt: article.title, loading: 'lazy' }"
      sizes="sm:500px lg:1024" />
    <span class="font-bold text-xl xl:text-3xl">{{ article?.title }}</span>
    <p class="my-4 font-semibold xl:text-2xl">
      {{ article?.synopsis }} <br>
      <span class="font-normal bg-orange-500 px-1"> {{ article?.author }}</span> <br>
      <span class="font-normal text-lg">{{ article?.date }}</span>
    </p>
    <div v-html="article?.content"></div>
  </section>
  <span class="ml-2 font-bold text-xl xl:text-3xl">Plus d'articles à lire</span>
  <section class="p-2 flex flex-nowrap overflow-x-auto min-w-80">
    <AppBlogCard v-for="(card, index) in otherArtciles" :key="index" :cardId="card.id" :cardTitle="card.title"
      :cardAuthor="card.author" :cardDate="card.date" :cardImage="card.image" :cardSlug="card.slug" />
  </section>
</template>
