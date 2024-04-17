<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue'

const route = useRoute()
const item = ref(null)

onMounted(async () => {
  const { id, slug } = route.params
  const response = await fetch('/database.json')
  const data = await response.json()
  item.value = data.articles.find(article => article.id === Number(id) && article.slug === slug)

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
      description: item.value.synopsis
    })
  }
})
</script>

<template>
    <section class="flex flex-col items-center my-4 p-2 gap-2">
        <aside class="flex flex-col self-start mb-4">
            <span class=" font-bold">{{ item?.title }}</span>
            <span class="text-xs font-bold italic">par {{item?.author}}, {{ item?.date }}</span>
        </aside>
        <img :src="item?.image" :alt="item?.title" class="w-1/2" />
        <div v-html="item?.content"></div>
    </section>
</template>
