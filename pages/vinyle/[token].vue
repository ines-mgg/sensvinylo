<script setup lang="ts">

import { useRoute } from 'vue-router'
import type Vinyl from '~/interfaces/vinyl';
import type Artist from '~/interfaces/artist';
import type Genre from '~/interfaces/genre';
import getVinyl from '~/utils/getVinyl';
import getGenre from '~/utils/getGenre';
import getArtist from '~/utils/getArtist';
import getSeoMeta from '~/meta/getSeoMeta';
import getDefinedPage from '~/meta/getDefinedPage';
import getDefinedProduct from '~/meta/getDefinedProduct';
import updateDimensions from '~/utils/updateDimensions';


const { token } = useRoute().params
const vinyl = ref<Vinyl | null>(null)
const artist = ref<Artist | null>(null)
const genre = ref<Genre | null>(null)
const quantity = ref(1)

const increaseQuantity = () => {
  if (quantity.value < 10) {
    quantity.value++
  }
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const { width, height } = updateDimensions();

onMounted(async () => {

  window.addEventListener('resize', updateDimensions);
  updateDimensions();

  vinyl.value = getVinyl(Array.isArray(token) ? token : [token]);
  if (vinyl.value) {
    artist.value = getArtist(vinyl.value.artist);
    genre.value = getGenre(vinyl.value.genre);
    if (artist.value) {
      const title = `${vinyl.value.title} par ${artist.value.name} chez Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France`;
      const description = `${vinyl.value.title} par ${artist.value.name} chez Sensvinylo. Découvrez notre large choix de vinyles neufs et d'occasion, tous styles confondus. Les vinyles de ${artist.value.name} en exclusivité chez Sensvinylo.`;
      getSeoMeta(title, description);

      useSchemaOrg([
        getDefinedPage(
          `${window.location.origin}/vinyle/${vinyl.value.token}`,
          title,
          description
        ),
        getDefinedProduct(vinyl.value),
        defineImage({
          url: vinyl.value.image,
          caption: vinyl.value.title,
          inLanguage: 'fr-FR',
        }),
      ])
    }
  } else {
    throw createError({
      status: 404,
    });
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateDimensions);
});
</script>

<template>
  <section class="flex flex-col items-center my-4 p-2">
    <NuxtPicture v-if="vinyl" :src="vinyl.image" :imgAttrs="{ alt: vinyl.title, loading: 'lazy' }" :width="width"
      :height="height" sizes="sm:100vw md:100vw" />
    <div v-if="vinyl?.status === 'Nouveauté'"
      class="bg-orange-500 w-44 text-center font-semibold -mt-2 md:w-1/2 md:text-xl text-black">{{ vinyl?.status }}
    </div>
    <div v-else-if="vinyl?.status === 'Promotion'"
      class="bg-yellow-400 w-44 text-center font-semibold -mt-2 md:w-1/2 md:text-xl text-black">{{ vinyl?.status }}
    </div>
    <div v-else-if="vinyl?.status === 'Occasion'"
      class="bg-red-600 w-44 text-center font-semibold -mt-2 md:w-1/2 md:text-xl text-black">{{ vinyl?.status }}</div>
    <span class="text-xl font-bold text-center md:text-xl">
      <NuxtLink v-if="artist" :to="`/artist/${artist.slug}`" class="text-orange-500 underline">{{
        artist.name }}</NuxtLink>
      - {{ vinyl?.title }}
    </span>
    <span class="text-xs font-bold text-center italic md:text-lg">{{ vinyl?.year }} - {{ genre?.name }}</span>
    <div v-if="vinyl?.status === 'Promotion' && vinyl?.old_price !== null" class="flex gap-1 font-semibold md:text-xl">
      <span class="line-through">{{ vinyl?.old_price }}€</span>
      <span class="text-red-600">{{ vinyl?.price }}€</span>
    </div>
    <div v-else class="font-semibold md:text-xl">{{ vinyl?.price }}€</div>
    <div class="flex gap-2 my-2 md:mt-4">
      <button class="border dark:text-white dark:border-white p-2" @click="decreaseQuantity"
        aria-label="Réduire la quantité">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <span class="p-2 md:text-xl">{{ quantity }}</span>
      <button class="border dark:text-white dark:border-white p-2" @click="increaseQuantity"
        aria-label="Augmenter la quantité">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
    <button class="p-2 rounded-lg w-full border font-bold my-2 md:w-1/2 md:text-xl"
      aria-label="Ajouter le vinyle au panier">Ajouter au panier</button>
  </section>
  <section class="flex flex-col items-center my-4 p-2 md:text-xl">
    <p class="text-justify">{{ vinyl?.description }}</p>
    <hr class="w-1/2 my-4 md:*" />
    <p class="text-justify">{{ artist?.description }}</p>
  </section>
</template>
