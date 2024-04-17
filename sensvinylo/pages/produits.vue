<script setup lang="ts">
import AppCard from '~/components/AppCard.vue';

useSeoMeta({ 
  title: 'Vinyles Pop, Rock, Rap & Musique du Monde – Sensvinylo',
  description: 'Achetez des vinyles pas chers en ligne sur sensvinylo-store.com. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus.',
})

const cards = ref([])
onMounted(async () => {
  const response = await fetch('/database.json')
  const data = await response.json()
  cards.value = data.vinyles
})
</script>

<template>
  <section class="flex flex-col items-center my-4">
    <article class="mt-4 grid grid-cols-2 gap-4">
      <div v-for="(card, index) in cards" :key="index">
        <AppCard
          :cardId="card.id"
          :cardBanner="card.status"
          :cardImage="card.image"
          :cardTitle="card.title"
          :cardPrice="card.price"
          :cardOldPrice="card.old_price"
          :cardToken="card.token"
        />
      </div>
    </article>
  </section>
</template>
