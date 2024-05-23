<script setup lang="ts">

const props = defineProps({
    cardName: String,
    cardImage: String,
    cardSlug: String,
});
</script>

<template>
    <NuxtLink :to="`/artist/${props.cardSlug}`" class="flex flex-col items-center">
        <aside
            class="bg-gradient-to-l from-yellow-400 to-orange-500 w-44 text-center font-semibold md:w-1/2 md:text-xl">
            {{ props.cardName }}
        </aside>
        <NuxtPicture :src="cardImage" :imgAttrs="{ alt: cardName, loading: 'lazy' }" width="500" height="500"
            sizes="sm:100vw md:100vw" />
    </NuxtLink>
</template>