<script setup lang="ts">

const props = defineProps({
    cardId: Number,
    cardTitle: String,
    cardDate: String,
    cardSynopsis: String,
    cardImage: String,
    cardSlug: String,
})
</script>

<template>
    <section class="flex flex-col items-center border-b border-gray-400 gap-1 md:text-xl">
        <img :src="cardImage" :alt="cardTitle" class="self-center w-48 h-48 my-2 md:w-[75%] md:h-[75%]">
        <aside class="flex flex-col self-start">
            <span class="font-bold">{{ cardTitle }}</span>
            <span class="font-semibold">{{ cardDate }}</span>
        </aside>
        <p class="text-justify text-gray-500">{{ cardSynopsis }}</p>
        <NuxtLink :to="`/blog/${props.cardId}-${props.cardSlug}`" class="self-end mt-2 mr-2">Voir →</NuxtLink>
    </section>
</template>