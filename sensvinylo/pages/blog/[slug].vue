<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue'

function dateConverter(dateString: any) {
  const parts = dateString.split('.');
  const newDate = new Date(parts[2], parts[1] - 1, parts[0]);
  return newDate.toISOString();
}
const route = useRoute()
const item = ref(null)
const otherArtciles = ref([])

onMounted(async () => {
  const { slug } = route.params
  const response = await fetch('/database.json')
  const data = await response.json()
  item.value = data.articles.find(article => article.slug === slug)
  otherArtciles.value = data.articles.filter(article => article.slug !== slug).slice(0, 3)

  if (!item.value) {
    throw createError({
      statusCode: 404,
      fatal: true
    });
  }
})

watchEffect(() => {
  if (item.value) {
    const isoDate = dateConverter(item.value.date);
    useSeoMeta({
      title: `${item.value.title} | article signé Sensvinylo, votre disquaire en ligne et en magasins physiques à Paris et en Île-de-France, vous propose une large sélection de vinyles neufs et d'occasion pour tous les goûts et tous les budgets.`,
      ogTitle: `${item.value.title} | article signé Sensvinylo, votre disquaire en ligne et en magasins physiques à Paris et en Île-de-France, vous propose une large sélection de vinyles neufs et d'occasion pour tous les goûts et tous les budgets.`,
      description: item.value.synopsis,
      ogDescription: item.value.synopsis,
      author: item.value.author,
      ogImage: item.value.image,
      twitterCard: 'summary_large_image',
    })
    useSchemaOrg([
      defineWebPage({
        '@type': 'WebPage',
        url: window.location.href,
        name: `${item.value.title} | article signé Sensvinylo, votre disquaire en ligne et en magasins physiques à Paris et en Île-de-France, vous propose une large sélection de vinyles neufs et d'occasion pour tous les goûts et tous les budgets.`,
        description: item.value.synopsis,
        inLanguage: 'fr-FR',
      }),
      defineArticle({
        '@type': 'BlogPosting',
        headline: item.value.title,
        description: item.value.synopsis,
        image: item.value.image,
        thumbnailUrl: item.value.image,
        wordCount: item.value.content.split(' ').length,
        inLanguage: 'fr-FR',
        keywords: item.value.tags,
        datePublished: isoDate,
        dateModified: item.value.date,
        author: [
          {
            name: item.value.author,
            url: 'https://sensvinylo-store.com/',
          }
        ],
        publisher: {
          name: 'Sensvinylo',
          logo: {
            '@type': 'ImageObject',
            url: 'https://sensvinylo-store.com/logo.webp',
          }
        },
      }),
      defineImage({
        url: item.value.image,
        caption: item.value.title,
        width: 1900,
        height: 1140,
        inLanguage: 'fr-FR',
      })
    ])
  }
})
</script>

<template>
  <section class="flex flex-col items-center p-2">
    <NuxtPicture v-if="item" :src="item.image" :imgAttrs="{ alt: item.title, loading: 'lazy' }"
      sizes="sm:500px lg:1024" />
    <span class="font-bold text-xl xl:text-3xl">{{ item?.title }}</span>
    <p class="my-4 font-semibold xl:text-2xl">
      {{ item?.synopsis }} <br>
      <span class="font-normal bg-orange-500 px-1"> {{ item?.author }}</span> <br>
      <span class="font-normal text-lg">{{ item?.date }}</span>
    </p>
    <div v-html="item?.content"></div>
  </section>
  <span class="ml-2 font-bold text-xl xl:text-3xl">Plus d'articles à lire</span>
  <section class="p-2 flex flex-nowrap overflow-x-auto min-w-80">
    <AppBlogCard v-for="(card, index) in otherArtciles" :key="index" :cardId="card.id" :cardTitle="card.title"
      :cardAuthor="card.author" :cardDate="card.date" :cardImage="card.image" :cardSlug="card.slug" />
  </section>
</template>
