<script setup lang="ts">
import AppCard from './AppCard.vue';
import { ref, defineExpose } from 'vue';

const cards = [
  {
    cardBanner: 'Nouveauté',
    cardImage: '/vinyles/BILLIE-HIT-ME-HARD-Vinyl-D2C-Excl-Product-Shot-1000x1000_600x.webp',
    cardTitle: 'Billie Eilish - HIT ME HARD AND SOFT - Vinyle exclusif D2C',
    cardPrice: '34,99€',
  },
  {
    cardBanner: 'Promotion',
    cardImage: '/vinyles/Sanstitre-1_ac83f023-0c7d-4244-9f58-5499f020b64f_600x.webp',
    cardTitle: 'Sabrina Carpenter - espresso 7\' brown vinyl',
    cardPrice: '10,99€',
    cardOldPrice: '14,99€',
  },
  {
    cardBanner: 'Nouveauté',
    cardImage: '/vinyles/LanaDelRey_ea7d36a2-0cb6-48a0-a5a9-c5d4657b0a1a_600x.webp',
    cardTitle: 'Lana Del Rey - Did you know that there\'s a tunnel under Ocean Blvd (festival edition) - Double vinyle orange',
    cardPrice: '39,99€',
  },
  {
    cardImage: '/vinyles/D2CSplatter2LPvinyl_095bd0f3-0a87-465f-b60f-d73f24685853_600x.webp',
    cardTitle: 'Aurora - What Happened To The Heart? - Double vinyle exclusif',
    cardPrice: '37,99€',
  },
  {
    cardImage: '/vinyles/Vinyle1000_2_600x.webp',
    cardTitle: 'Booba - Æ - Vinyle rouge',
    cardPrice: '27,99€',
  },
  {
    cardImage: '/vinyles/Zayn2_600x.webp',
    cardTitle: 'Zayn - Room Under The Stairs - Double vinyle',
    cardPrice: '44,99€',
  },
  {
    cardImage: '/vinyles/AW_BTB_1LP_PeachVinyl_Expanded_Packshot_600x.webp',
    cardTitle : 'Amy Winehouse - Back to Black: Songs from the Original Motion Picture - Vinyle couleur exclusif',
    cardPrice: '29,99€',
  },
  {
    cardImage: '/vinyles/Splatter_d7771153-ef5a-45b2-aacb-719133db4efd_600x.webp',
    cardTitle: 'Olivia Rodrigo - GUTS (spilled) - Vinyle Splatter Version Deluxe',
    cardPrice: '39,99€',
  },
  {
    cardBanner: 'Occasion',
    cardImage: '/vinyles/Image20240307213115_1028x.webp',
    cardTitle: 'The Weeknd - ONE OF THE GIRLS + POPULAR -  VINYLE 7”',
    cardPrice: '14,99€',
  },
];
const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.length;
};
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.length) % cards.length;
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
          :cardBanner="card.cardBanner"
          :cardImage="card.cardImage"
          :cardTitle="card.cardTitle"
          :cardPrice="card.cardPrice"
          :cardOldPrice="card.cardOldPrice"
        />
      </div>
    </div>
    <button @click="prevSlide" class="absolute top-1/2 transform -translate-y-1/2 left-0 border dark:text-white dark:border-white p-2 ml-2" v-if="currentIndex > 0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
    </button>
    <button @click="nextSlide" class="absolute top-1/2 transform -translate-y-1/2 right-0 border dark:text-white dark:border-white p-2 mr-2" v-if="currentIndex < cards.length - 1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
    </button>
  </div>
  <NuxtLink to="/produits">
    <span class="text-sm bold border-2 p-2">Voir tous les produits</span>
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