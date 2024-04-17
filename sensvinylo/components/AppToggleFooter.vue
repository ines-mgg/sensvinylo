<script setup lang="ts">
import { ref } from 'vue'

const isToggleOpen = ref(false);
const openToggle = () => {
  isToggleOpen.value = !isToggleOpen.value;
}

const props = defineProps({
  buttonTitle: String,
  links: {
    type: Array,
    default: () => [],
    required: true,
  },
})
</script>

<template>
    <section class="mt-2">
        <span class="flex gap-2">
            {{ props.buttonTitle }}
            <button @click="openToggle" class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" fill="none" viewBox="0 0 21 22">
                    <path fill="#f0e52b" d="m10.495 14.793 4.202-4.227-1.47-1.48-1.681 1.691V6.34H9.445v4.437l-1.681-1.69-1.47 1.479 4.201 4.226Zm0 6.34c-1.453 0-2.819-.278-4.097-.834a10.598 10.598 0 0 1-3.335-2.258 10.666 10.666 0 0 1-2.245-3.354 10.335 10.335 0 0 1-.828-4.121c0-1.462.276-2.835.828-4.12A10.667 10.667 0 0 1 3.063 3.09 10.613 10.613 0 0 1 6.398.83 10.184 10.184 0 0 1 10.495 0c1.453 0 2.819.277 4.097.832a10.613 10.613 0 0 1 3.335 2.259c.946.95 1.694 2.069 2.245 3.354.552 1.286.828 2.66.828 4.121 0 1.462-.276 2.835-.828 4.12a10.668 10.668 0 0 1-2.245 3.355 10.598 10.598 0 0 1-3.335 2.258 10.174 10.174 0 0 1-4.097.833Zm0-2.114c2.346 0 4.333-.819 5.962-2.457 1.628-1.638 2.442-3.636 2.442-5.996 0-2.36-.814-4.358-2.442-5.996-1.629-1.638-3.616-2.457-5.962-2.457-2.346 0-4.333.82-5.961 2.457C2.905 6.208 2.09 8.206 2.09 10.566c0 2.36.814 4.358 2.443 5.996 1.628 1.638 3.615 2.457 5.961 2.457Z"/>
                </svg>
            </button>
        </span>
        <transition name="slide">
            <div v-if="isToggleOpen" class="flex flex-col gap-1 text-gray-500">
                <div v-for="(link, index) in links" :key="index">
                    <NuxtLink :to="`/${link.link}`" class="w-max">{{ link.title }}</NuxtLink>
                </div>
            </div>
        </transition>
        <div class="hidden md:flex flex-col gap-1 text-gray-500 text-sm">
                <div v-for="(link, index) in links" :key="index">
                    <NuxtLink :to="`/${link.link}`" class="w-max">{{ link.title }}</NuxtLink>
                </div>
        </div> 
    </section>
</template>