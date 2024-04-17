<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue'

const route = useRoute()
const item = ref(null)
const artistItem = ref(null)
const genreItem = ref(null)
const quantity = ref(1)

onMounted(async () => {
  const { id, token } = route.params
  const response = await fetch('/database.json')
  const data = await response.json()
  item.value = data.vinyles.find(vinyl => vinyl.id === Number(id) && vinyl.token === token)
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
</script>

<template>
    <section class="flex flex-col items-center my-4 p-2">
        <img :src="item?.image" :alt="item?.title" class="w-1/2 md:h-1/2" />
        <div v-if="item?.status === 'Nouveauté'" class="bg-orange-500 w-44 text-center font-semibold -mt-2 md:w-1/2 md:text-xl">{{ item?.status }}</div>
        <div v-else-if="item?.status === 'Promotion'" class="bg-yellow-400 w-44 text-center font-semibold -mt-2 md:w-1/2 md:text-xl">{{ item?.status }}</div>
        <div v-else-if="item?.status === 'Occasion'" class="bg-red-600 w-44 text-center font-semibold -mt-2 md:w-1/2 md:text-xl">{{ item?.status }}</div>
        <span class="text-xl font-bold text-center md:text-xl">{{ artistItem?.name }} - {{ item?.title }}</span>
        <span class="text-xs font-bold text-center italic md:text-lg">{{ item?.year }} - {{ genreItem?.name }}</span>
        <div v-if="item?.status === 'Promotion' && item?.old_price !== ''" class="flex gap-1 font-semibold md:text-xl">
            <span class="line-through">{{ item?.old_price }}€</span>
            <span class="text-red-500">{{ item?.price }}€</span>
        </div>
        <div v-else class="font-semibold md:text-xl">{{ item?.price }}€</div>
        <div class="flex gap-2 my-2 md:mt-4">
            <button class="border dark:text-white dark:border-white p-2" @click="decreaseQuantity">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                </svg>
            </button>
            <span class="p-2 md:text-xl">{{ quantity }}</span>
            <button class="border dark:text-white dark:border-white p-2" @click="increaseQuantity">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
        <button class="p-2 rounded-lg w-full border font-bold my-2 md:w-1/2 md:text-xl">Ajouter au panier</button>
    </section>
    <section class="flex flex-col items-center my-4 p-2 md:text-xl">
        <p class="text-justify">{{ item?.description }}</p>
        <hr class="w-1/2 my-4 md:*"/>
        <p class="text-justify">{{ artistItem?.description }}</p>
    </section>
</template>
