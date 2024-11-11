<script setup lang="ts">

import AppToggle from '~/components/AppToggle.vue';
import { getFAQ } from '#imports';
import type FAQ from '~/interfaces/FAQ';
import getSeoMeta from '~/meta/getSeoMeta';
import getDefinedPage from '~/meta/getDefinedPage';
import getDefinedQuestion from '~/meta/getDefinedQuestion';

const title = "Sensvinylo FAQ - Votre Disquaire de Vinyles à Paris et en Ile-de-France";
const description = "Les réponses à vos questions sur Sensvinylo, votre disquaire de vinyles à Paris et en Ile-de-France. Découvrez notre FAQ pour tout savoir sur nos produits et services.";
getSeoMeta(title, description);


const faqs = ref<FAQ[]>([])
onMounted(async () => {
  try {
    faqs.value = await getFAQ();
    useSchemaOrg([
      getDefinedPage(
        `${window.location.origin}/FAQ`,
        title,
        description
      ),
      ...faqs.value.map(faq => getDefinedQuestion(faq))
    ])
  } catch (error) {
    console.error('Error loading data:', error);
  }
})
</script>

<template>
  <section class="flex flex-col my-4 gap-1 px-2">
    <article class="flex flex-col items-center">
      <span class="text-2xl font-bold text-center md:text-3xl">Foire aux Questions</span>
    </article>
    <AppToggle v-for="(faq, index) in faqs" :key="index" :toggleTitle="faq.title"
      :toggleDescription="faq.description" />
  </section>
</template>
