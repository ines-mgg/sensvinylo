<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue'

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
    useSeoMeta({
      title: `${item.value.title} | article signé Sensvinylo, votre disquaire en ligne et en magasins physiques à Paris et en Île-de-France, vous propose une large sélection de vinyles neufs et d'occasion pour tous les goûts et tous les budgets.`,
      description: item.value.synopsis,
      author: item.value.author,
    })
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
  <section class="p-2 flex flex-nowrap overflow-x-auto">
    <div v-for="(card, index) in otherArtciles" :key="index" class="min-w-80">
      <AppBlogCard :cardId="card.id" :cardTitle="card.title" :cardAuthor="card.author" :cardDate="card.date"
        :cardImage="card.image" :cardSlug="card.slug" />
    </div>
  </section>
</template>
