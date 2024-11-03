<script setup lang="ts">
import AppArtistCard from '@/components/AppArtistCard.vue';
import database from '../assets/database.json'

useSeoMeta({
    title: 'Artistes de Sensvinylo - Biographie, Discographie & Vinyles en Vente - Sensvinylo',
    ogTitle: 'Artistes de Sensvinylo - Biographie, Discographie & Vinyles en Vente - Sensvinylo',
    description: 'Découvrez les artistes de Sensvinylo, leur biographie, discographie et les vinyles disponibles à la vente sur sensvinylo-store.com.',
    ogDescription: 'Découvrez les artistes de Sensvinylo, leur biographie, discographie et les vinyles disponibles à la vente sur sensvinylo-store.com.',
    ogImage: '/banner.webp',
    twitterCard: 'summary_large_image',
})

useSchemaOrg([
    defineWebPage({
        '@type': 'WebPage',
        url: 'https://sensvinylo-store.com/artists',
        name: 'Artistes de Sensvinylo - Biographie, Discographie & Vinyles en Vente - Sensvinylo',
        description: 'Découvrez les artistes de Sensvinylo, leur biographie, discographie et les vinyles disponibles à la vente sur sensvinylo-store.com.',
        inLanguage: 'fr-FR',
    }),

])

interface Artist {
    id: number;
    name: string;
    description: string;
    image: string;
    genre: number;
    slug: string;
    discography: {
        title: string;
        year: number;
    }[];
}

const cards = ref<Artist[]>([])
onMounted(async () => {
    cards.value = database.artists
})
</script>

<template>
    <section class="flex flex-col items-center my-4">
        <article class="mt-4 grid grid-cols-2 gap-4 px-2 md:grid-cols-3 xl:grid-cols-4">
            <AppArtistCard v-for="(card, index) in cards" :key="index" :cardName="card.name" :cardImage="card.image"
                :cardSlug="card.slug" />
        </article>
    </section>
</template>