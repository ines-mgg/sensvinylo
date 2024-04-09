<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
  ],
})
</script>

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
