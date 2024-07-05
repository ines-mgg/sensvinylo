<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
    { rel: 'manifest', href: '/manifest.webmanifest' },
  ],
  meta : [
    { name: 'theme-color', content: '#e97c2f'},
  ],
  htmlAttrs: {
    lang: 'fr',
  },
})

useSchemaOrg([
  defineWebSite({
    '@type': 'WebSite',
    url: 'https://sensvinylo-store.com/',
    name: 'Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
    description: 'Sensvinylo, votre disquaire en ligne et en magasins physiques à Paris et en Île-de-France, vous propose une large sélection de vinyles neufs et d\'occasion pour tous les goûts et tous les budgets. Sensvinylo, le paradis des vinyles à Paris et en Ile-de-France. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus. Les vinyles de vos artistes préférés en exclusivité chez Sensvinylo.',
    inLanguage: 'fr-FR',
  }),
  defineOrganization({
    '@type': 'Organization',
    name: 'Sensvinylo',
    url: 'https://sensvinylo-store.com/',
    logo: 'https://sensvinylo-store.com/logo.webp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '225ter Rue du Faubourg Saint-Antoine',
      postalCode: '75012',
      addressLocality: 'Paris',
      addressCountry: 'France',
    },
  }),
])
</script>

<template>
  <div>
    <VitePwaManifest />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
