<script setup lang="ts">

import updateDimensions from '~/utils/updateDimensions';
const props = defineProps({
    cardBanner: String,
    cardImage: String,
    cardTitle: String,
    cardPrice: Number,
    cardOldPrice: Number,
    cardToken: String,
})

const { width, height } = updateDimensions();

onMounted(() => {
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
});

onUnmounted(() => {
    window.removeEventListener('resize', updateDimensions);
});
</script>

<template>
    <NuxtLink :to="`/vinyle/${props.cardToken}`" class="flex flex-col items-center">
        <aside v-if="cardBanner === 'Nouveauté'"
            class="bg-orange-500 w-44 text-center font-semibold md:w-1/2 md:text-xl text-black">{{ props.cardBanner }}
        </aside>
        <aside v-else-if="cardBanner === 'Promotion'"
            class="bg-yellow-400 w-44 text-center font-semibold md:w-1/2 md:text-xl text-black">{{ props.cardBanner }}
        </aside>
        <aside v-else-if="cardBanner === 'Occasion'"
            class="bg-red-600 w-44 text-center font-semibold md:w-1/2 md:text-xl text-black">{{ props.cardBanner }}
        </aside>
        <aside v-else class="w-44 text-center font-semibold md:w-1/2 md:text-xl text-black"> ‎
        </aside>
        <NuxtPicture :src="cardImage"
            :imgAttrs="{ alt: cardTitle, class: 'self-center rounded-full my-2', loading: 'lazy' }" :width="width"
            :height="height" sizes="sm:100vw md:100vw" />
        <section class="self-center flex flex-col items-center md:text-2xl">
            <span class="font-bold text-center">{{ props.cardTitle }}</span>
            <div v-if="cardBanner === 'Promotion' && cardOldPrice !== undefined" class="flex gap-1 font-semibold">
                <span class="line-through">{{ props.cardOldPrice }}€</span>
                <span class="text-red-600">{{ props.cardPrice }}€</span>
            </div>
            <div v-else class="font-semibold">{{ props.cardPrice }}€</div>
        </section>
    </NuxtLink>
</template>