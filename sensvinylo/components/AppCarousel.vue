<script setup lang="ts">
import AppCard from './AppCard.vue';
import { ref, onMounted } from 'vue';

const cards = ref([])
onMounted(async () => {
  const response = await fetch('/database.json')
  const data = await response.json()
  cards.value = data.vinyles.slice(0, 10)
})


const currentIndex = ref(0);

const nextSlide = () => {
  if (cards.value) {
    currentIndex.value = (currentIndex.value + 1) % cards.value.length;
  }
};
const prevSlide = () => {
  if (cards.value) {
    currentIndex.value = (currentIndex.value - 1 + cards.value.length) % cards.value.length;
  }
};

defineExpose({
  nextSlide,
  prevSlide
});
</script>

<template>
  <div class="carousel relative my-2">
    <div class="carousel-inner pt-2" :style="{ 'transform': `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(card, index) in cards" :key="index" class="carousel-item">
        <AppCard
          :cardBanner="card.status"
          :cardImage="card.image"
          :cardTitle="card.title"
          :cardPrice="card.price"
          :cardOldPrice="card.old_price"
          :cardToken="card.token"
        />
      </div>
    </div>
    <button @click="prevSlide" 
      class="absolute top-1/2 
      transform -translate-y-1/2 
      left-0 border dark:text-white 
      dark:border-white p-4 ml-4" 
      v-if="currentIndex > 0"
      aria-label="Bouton précédant">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
    </button>
    <button @click="nextSlide" 
      class="absolute top-1/2 
      transform -translate-y-1/2 
      right-0 border dark:text-white 
      dark:border-white p-4 mr-4" 
      v-if="currentIndex < cards.length - 1"
      aria-label="Bouton suivant">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
    </button>
  </div>
  <NuxtLink to="/produits/" class="md:mt-4" aria-label="Voir la page Notre catalogue">
    <span class="text-sm rounded-lg font-bold border-2 p-2 md:text-2xl md:p-3">Voir tous les produits</span>
  </NuxtLink>
</template>

<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-item {
  flex: 0 0 100%;
}
</style>