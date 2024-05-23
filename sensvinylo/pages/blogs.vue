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
  <section class="flex flex-col items-center my-4 md:items-start">
    <article class="grid md:grid-cols-2 xl:grid-cols-3">
      <div v-for="(card, index) in cards" :key="index">
        <AppBlogCard 
            :cardTitle="card.title" 
            :cardAuthor="card.author"
            :cardDate="card.date"
            :cardImage="card.image" 
            :cardSlug="card.slug"
          />
      </div>
    </article>
  </section>
</template>
