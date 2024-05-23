<script setup lang="ts">

const props = defineProps({
    cardTitle: String,
    cardAuthor: String,
    cardDate: String,
    cardImage: String,
    cardSlug: String,
})
</script>

<template>
    <NuxtLink :to="`/blog/${props.cardSlug}`" class="flex flex-col p-4">
        <NuxtPicture :src="cardImage" :imgAttrs="{ alt: cardTitle, loading: 'lazy' }" sizes="sm:100vw md:100vw"
            width="398" height="350" />
        <aside class=" flex flex-col -mt-12 md:m-0">
            <span class="font-bold bg-orange-500 md:bg-transparent">{{ cardTitle }}</span>
            <span class="text-sm">{{ cardDate }} - {{ cardAuthor }}</span>
        </aside>
    </NuxtLink>
</template>