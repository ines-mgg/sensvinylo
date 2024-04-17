<script setup lang="ts">
import AppBlogCard from '~/components/AppBlogCard.vue';

useSeoMeta({ 
  title: 'Découvrez les articles de blog signé Sensvinylo',
  description: 'Lisez les derniers articles du blog Sensvinylo. Retrouvez des conseils et astuces pour les collectionneurs de vinyles, des interviews d\'artistes et des actualités du monde du vinyle.',
})

const cards = ref([])
onMounted(async () => {
  const response = await fetch('/database.json')
  const data = await response.json()
  cards.value = data.articles
})
</script>

<template>
  <section class="flex flex-col items-center my-4 gap-2 px-2">
    <div v-for="(card, index) in cards" :key="index">
      <AppBlogCard
        :cardId="card.id"
        :cardTitle="card.title"
        :cardDate="card.date"
        :cardSynopsis="card.synopsis"
        :cardImage="card.image"
        :cardSlug="card.slug"
      />
    </div>
      <div class="my-4 text-center">
        <span class="p-2">1</span> 
        <span class="p-2">2</span> 
        <span class="p-2">3</span> 
        <span class="deco">…</span> 
        <span class="p-2">13</span> 
        <span class="next">Suivant »</span>
      </div>
  </section>
</template>
