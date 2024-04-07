<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>


<template>
  <header class="flex justify-between items-center">
    <!-- Burger menu -->
    <UButton
    icon="i-heroicons-bars-3"
    size="sm"
    color="primary"
    square
    variant="solid"
    @click="toggleMenu"
  />
    <nav v-show="isMenuOpen">
      <ul>
        <li><NuxtLink to="/produits">Notre catalogue</NuxtLink></li>
        <li><NuxtLink to="/magasins">Nos magasins</NuxtLink></li>
        <li><NuxtLink to="/blog">Notre blog</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
