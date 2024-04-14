<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    cardBanner: String,
    cardImage: String,
    cardTitle: String,
    cardPrice: String,
    cardOldPrice: String,
    
})
</script>

<template>
    <NuxtLink to="/produit/1" class="flex flex-col items-center">
        <aside v-if="cardBanner === 'Nouveauté'" class="bg-orange-500 w-44 text-center font-semibold">{{ props.cardBanner}}</aside>
        <aside v-else-if="cardBanner === 'Promotion'" class="bg-yellow-400 w-44 text-center font-semibold">{{ props.cardBanner}}</aside>
        <aside v-else-if="cardBanner === 'Occasion'" class="bg-red-600 w-44 text-center font-semibold">{{ props.cardBanner}}</aside>
        <img :src="cardImage" alt="Vinyle de test" class="self-center rounded-full w-48 h-48 my-2"/>
        <section class="self-center flex flex-col items-center">
            <span class="font-bold text-center">{{ props.cardTitle }}</span>
            <!-- Price -->
            <div v-if="cardBanner === 'Promotion' && cardOldPrice !== ''" class="flex gap-1 font-semibold">
                <span class="line-through">{{ props.cardOldPrice }}</span>
                <span class="text-red-500">{{ props.cardPrice }}</span>
            </div>
            <div v-else class="font-semibold">{{ props.cardPrice }}</div>
        </section>
    </NuxtLink>
</template>