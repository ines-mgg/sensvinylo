<script setup lang="ts">

import AppToggleList from '~/components/AppToggleList.vue';
import type Engagement from '~/interfaces/engagement';
import { getEngagements } from '#imports';
import getSeoMeta from '~/meta/getSeoMeta';
import getDefinedPage from '~/meta/getDefinedPage';

const title = "Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France";
const description = "Les engagements de Sensvinylo, votre disquaire de vinyles à Paris et en Ile-de-France. Découvrez notre mission, notre vision, nos valeurs et nos engagements.";
getSeoMeta(title, description);

useSchemaOrg([
  getDefinedPage(
    `${window.location.origin}/engagement`,
    title,
    description
  ),
])

const toggleLists: Array<Engagement> = getEngagements();
</script>

<template>
  <article class="flex flex-col items-center">
    <span class="text-2xl font-bold text-center md:text-3xl">Nos engagements</span>
  </article>
  <div>
    <AppToggleList v-for="(list, index) in toggleLists" :key="index" :toggleTitle="list.title"
      :toggleDescription="list.descriptions" />
  </div>
</template>