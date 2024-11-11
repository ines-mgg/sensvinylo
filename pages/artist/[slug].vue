<script setup lang="ts">

import { useRoute } from 'vue-router'
import type Artist from '~/interfaces/artist';
import type Genre from '~/interfaces/genre';
import type Vinyl from '~/interfaces/vinyl';
import { getArtist, getGenre, getArtistVinyls } from '#imports';
import getSeoMeta from '~/Meta/getSeoMeta';
import getDefinedPage from '~/Meta/getDefinedPage';

const { slug } = useRoute().params
const artist = ref<Artist | null>(null)
const genre = ref<Genre | null>(null)
const vinyls = ref<Vinyl[] | null>(null)

onMounted(async () => {
    try {
        artist.value = getArtist(Array.isArray(slug) ? slug : [slug])
        if (artist.value) {
            genre.value = getGenre(artist.value.id);
            vinyls.value = getArtistVinyls(artist.value.id);

            const title = `${artist.value.name} chez Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France`;
            const description = `${artist.value.name} chez Sensvinylo. Découvrez sa biographie et discographie. Les vinyles de ${artist.value.name} en exclusivité chez Sensvinylo.`;
            getSeoMeta(title, description);

            useSchemaOrg([
                getDefinedPage(
                    `${window.location.origin}/artist/${artist.value.slug}`,
                    title,
                    description
                ),
                defineImage({
                    url: artist.value.image,
                    caption: artist.value.name,
                    width: 500,
                    height: 500,
                }),
            ])
        } else {
            throw createError({
                statusCode: 404,
                fatal: true
            });
        }

    } catch (error) {
        console.error('Error loading data:', error);
    }
})
</script>

<template>
    <section class="flex flex-col items-center my-4 p-2">
        <NuxtPicture v-if="artist" :src="artist.image" :imgAttrs="{ alt: artist.name, loading: 'lazy' }" width="500"
            height="500" sizes="sm:100vw md:100vw"></NuxtPicture>
        <span class="text-3xl font-semibold">{{ artist?.name }}</span>
        <span class="text-xl font-medium">{{ genre?.name }}</span>
        <p class="text-lg my-4 p-2">{{ artist?.description }}</p>
        <span class="text-2xl font-semibold my-4">Discographie</span>
        <div class="timeline">
            <div v-for="(album, index) in artist?.discography" :key="index" class="timeline-artist">
                <div class="flex flex-col items-center">
                    <span>{{ album.year }}</span>
                    <span>{{ album.title }}</span>
                </div>
            </div>
        </div>
        <span v-if="vinyls !== null" class="text-2xl font-semibold my-4">Vinyles disponibles chez Sensvinylo</span>
        <div class="grid md:grid-cols-2 xl:grid-cols-3">
            <div v-for="(vinyle, index) in vinyls" :key="index">
                <NuxtLink :to="`/vinyle/${vinyle.token}`" class="flex flex-col items-center">
                    <NuxtPicture :src="vinyle.image" :imgAttrs="{ alt: vinyle.title, loading: 'lazy' }" width="250"
                        height="250" sizes="sm:100vw md:100vw"></NuxtPicture>
                    <span class="text-lg text-center font-semibold">{{ vinyle.title }}</span>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>