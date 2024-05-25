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
  ]
})
</script>

<template>
  <div>
    <VitePwaManifest />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
