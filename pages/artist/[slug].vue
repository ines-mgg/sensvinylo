<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue'
import database from '../../assets/database.json'

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
interface Vinyle {
    id: number;
    status: string | null;
    image: string;
    title: string;
    artist: number;
    year: number;
    genre: number;
    price: number;
    old_price: number | null;
    description: string;
    token: string;
}
const route = useRoute()
const item = ref<Artist | null>(null)
const genreItem = ref<{ id: number; name: string } | null>(null)

const vinylesItem = ref<Vinyle[]>([])

onMounted(async () => {
    const { slug } = route.params
    item.value = database.artists.find(artist => artist.slug === slug) as Artist | null
    genreItem.value = database.genres.find(genre => genre.id === item.value?.genre) || null
    vinylesItem.value = database.vinyles.filter((vinyle) => vinyle.artist === item.value?.id && vinyle.year !== undefined) as Vinyle[]

    if (!item.value) {
        throw createError({
            statusCode: 404,
            fatal: true
        });
    } else {
        console.log(vinylesItem.value)
    }
})

watchEffect(() => {
    if (item.value) {
        useSeoMeta({
            title: `${item.value.name} chez Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France`,
            ogTitle: `${item.value.name} chez Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France`,
            description: `${item.value.name} chez Sensvinylo. Découvrez sa biographie et discographie. Les vinyles de ${item.value.name} en exclusivité chez Sensvinylo.`,
            ogDescription: `${item.value.name} chez Sensvinylo. Découvrez sa biographie et discographie. Les vinyles de ${item.value.name} en exclusivité chez Sensvinylo.`,
            ogImage: item.value.image,
            twitterCard: 'summary_large_image',
        })
        useSchemaOrg([
            defineWebPage({
                '@type': 'WebPage',
                url: `https://sensvinylo-store.com/artist/${item.value.slug}`,
                name: `${item.value.name} chez Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France`,
                description: `${item.value.name} chez Sensvinylo. Découvrez sa biographie et discographie. Les vinyles de ${item.value.name} en exclusivité chez Sensvinylo.`,
                inLanguage: 'fr-FR',
            }),
            defineImage({
                url: item.value.image,
                caption: item.value.name,
                width: 500,
                height: 500,
            }),
        ])
    }
})
</script>

<template>
    <section class="flex flex-col items-center my-4 p-2">
        <NuxtPicture v-if="item" :src="item.image" :imgAttrs="{ alt: item.name, loading: 'lazy' }" width="500"
            height="500" sizes="sm:100vw md:100vw"></NuxtPicture>
        <span class="text-3xl font-semibold">{{ item?.name }}</span>
        <span class="text-xl font-medium">{{ genreItem?.name }}</span>
        <p class="text-lg my-4 p-2">{{ item?.description }}</p>
        <span class="text-2xl font-semibold my-4">Discographie</span>
        <div class="timeline">
            <div v-for="(album, index) in item?.discography" :key="index" class="timeline-item">
                <div class="flex flex-col items-center">
                    <span>{{ album.year }}</span>
                    <span>{{ album.title }}</span>
                </div>
            </div>
        </div>
        <span v-if="vinylesItem !== null" class="text-2xl font-semibold my-4">Vinyles disponibles chez Sensvinylo</span>
        <div class="grid md:grid-cols-2 xl:grid-cols-3">
            <div v-for="(vinyle, index) in vinylesItem" :key="index">
                <NuxtLink :to="`/vinyle/${vinyle.token}`" class="flex flex-col items-center">
                    <NuxtPicture :src="vinyle.image" :imgAttrs="{ alt: vinyle.title, loading: 'lazy' }" width="250"
                        height="250" sizes="sm:100vw md:100vw"></NuxtPicture>
                    <span class="text-lg text-center font-semibold">{{ vinyle.title }}</span>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>