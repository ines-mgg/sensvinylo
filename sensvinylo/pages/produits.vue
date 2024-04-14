<script setup lang="ts">
import AppCard from '~/components/AppCard.vue';

useSeoMeta({ 
  title: 'Vinyles Pop, Rock, Rap & Musique du Monde – Sensvinylo',
  description: 'Achetez des vinyles pas chers en ligne sur sensvinylo-store.com. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus.',
})

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
</script>

<template>
  <section class="flex flex-col items-center my-4">
    <button class="text-xl font-bold">Very sexy bouton filtre à faire</button>
    <article class="mt-4 grid grid-cols-2 gap-4">
      <div v-for="(card, index) in cards" :key="index">
        <AppCard
          :cardBanner="card.cardBanner"
          :cardImage="card.cardImage"
          :cardTitle="card.cardTitle"
          :cardPrice="card.cardPrice"
          :cardOldPrice="card.cardOldPrice"
        />
      </div>
    </article>
  </section>
</template>
