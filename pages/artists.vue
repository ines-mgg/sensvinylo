<script setup lang="ts">

import AppArtistCard from '@/components/AppArtistCard.vue';
import type Artist from '~/interfaces/artist';
import { getArtists } from '#imports';
import getSeoMeta from '~/meta/getSeoMeta';
import getDefinedPage from '~/meta/getDefinedPage';

const title = "Artistes de Sensvinylo - Biographie, Discographie & Vinyles en Vente - Sensvinylo";
const description = "Découvrez les artistes de Sensvinylo, leur biographie, discographie et les vinyles disponibles à la vente sur sensvinylo-store.com.";
getSeoMeta(title, description);

useSchemaOrg([
    getDefinedPage(
        `${window.location.origin}/artists`,
        title,
        description
    ),
])


const artists = ref<Artist[]>([])
onMounted(async () => {
    try {
        artists.value = await getArtists();
    } catch (error) {
        console.error('Error loading data:', error);
    }
})
</script>

<template>
    <section class="flex flex-col items-center my-4">
        <article class="mt-4 grid grid-cols-2 gap-4 px-2 md:grid-cols-3 xl:grid-cols-4">
            <AppArtistCard v-for="(artist, index) in artists" :key="index" :cardName="artist.name"
                :cardImage="artist.image" :cardSlug="artist.slug" />
        </article>
    </section>
</template>