<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue'

const route = useRoute()
const item = ref(null)
const artistItem = ref(null)
const genreItem = ref(null)
const quantity = ref(1)

onMounted(async () => {
  const { token } = route.params
  const response = await fetch('/database.json')
  const data = await response.json()
  item.value = data.vinyles.find(vinyl => vinyl.token === token)
  artistItem.value = data.artists.find(artist => artist.id === item.value?.artist)
  genreItem.value = data.genres.find(genre => genre.id === item.value?.genre)

  if (!item.value) {
    throw createError({
      statusCode: 404,
      fatal: true
    });
  }
})

watchEffect(() => {
  if (item.value && artistItem.value) {
    useSeoMeta({
      title: `${item.value.title} par ${artistItem.value.name} chez Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France`,
      description: `${item.value.title} par ${artistItem.value.name} chez Sensvinylo. Découvrez notre large choix de vinyles neufs et d'occasion, tous styles confondus. Les vinyles de ${artistItem.value.name} en exclusivité chez Sensvinylo.`
    })
  }
})

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

const width = ref(250);
const height = ref(250);

const updateDimensions = () => {
  switch (true) {
    case window.innerWidth >= 1280:
      width.value = 700;
      height.value = 700;
      break;
    case window.innerWidth >= 768:
      width.value = 500;
      height.value = 500;
      break;
    default:
      width.value = 250;
      height.value = 250;
      break;
  }
}

onMounted(() => {
  window.addEventListener('resize', updateDimensions);
  updateDimensions();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateDimensions);
});
</script>

<template>
  <section class="flex flex-col items-center my-4 p-2">
    <NuxtPicture v-if="item" :src="item.image" :imgAttrs="{ alt: item.title, loading: 'lazy' }" :width="width"
      :height="height" sizes="sm:100vw md:100vw" />
    <div v-if="item?.status === 'Nouveauté'"
      class="bg-orange-500 w-44 text-center font-semibold -mt-2 md:w-1/2 md:text-xl text-black">{{ item?.status }}</div>
    <div v-else-if="item?.status === 'Promotion'"
      class="bg-yellow-400 w-44 text-center font-semibold -mt-2 md:w-1/2 md:text-xl text-black">{{ item?.status }}</div>
    <div v-else-if="item?.status === 'Occasion'"
      class="bg-red-600 w-44 text-center font-semibold -mt-2 md:w-1/2 md:text-xl text-black">{{ item?.status }}</div>
    <span class="text-xl font-bold text-center md:text-xl">
      <NuxtLink v-if="artistItem" :to="`/artist/${artistItem.slug}`" class="text-orange-500 underline">{{ artistItem.name }}</NuxtLink>
      - {{ item?.title }}
    </span>
    <span class="text-xs font-bold text-center italic md:text-lg">{{ item?.year }} - {{ genreItem?.name }}</span>
    <div v-if="item?.status === 'Promotion' && item?.old_price !== ''" class="flex gap-1 font-semibold md:text-xl">
      <span class="line-through">{{ item?.old_price }}€</span>
      <span class="text-red-600">{{ item?.price }}€</span>
    </div>
    <div v-else class="font-semibold md:text-xl">{{ item?.price }}€</div>
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
    <p class="text-justify">{{ item?.description }}</p>
    <hr class="w-1/2 my-4 md:*" />
    <p class="text-justify">{{ artistItem?.description }}</p>
  </section>
</template>
