<script setup lang="ts">
import database from '../assets/database.json'
useSeoMeta({
  title: "Trouvez le Magasin Sensvinylo le Plus Proche de Chez Vous",
  ogTitle: "Trouvez le Magasin Sensvinylo le Plus Proche de Chez Vous",
  description:
    "Trouvez le magasin Sensvinylo le plus proche de chez vous. Nous avons plusieurs points de vente à Paris et en Ile-de-France.",
  ogDescription: "Trouvez le magasin Sensvinylo le plus proche de chez vous. Nous avons plusieurs points de vente à Paris et en Ile-de-France.",
  ogImage: "/banner.webp",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    "@type": "WebPage",
    url: "https://sensvinylo-store.com/magasins",
    name: "Trouvez le Magasin Sensvinylo le Plus Proche de Chez Vous",
    description:
      "Trouvez le magasin Sensvinylo le plus proche de chez vous. Nous avons plusieurs points de vente à Paris et en Ile-de-France.",
    inLanguage: "fr-FR",
  }),
]);

interface Store {
  id: number;
  city: string;
  address: string;
  description: string;
}
const stores = ref<Store[]>([]);
onMounted(async () => {
  stores.value = database.stores;
})
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div>
            <h2 class="text-3xl font-bold tracking-tight">
              Sensvinylo - Votre passion du vinyle partagée
            </h2>
            <p class="mt-4 leading-7">
              Depuis 2001, Sensvinylo est votre passion du vinyle partagée.
              Découvrez nos magasins dans plusieurs villes françaises et plongez
              dans un univers musical unique.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            <div v-for="(store, index) in stores" :key="index" class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                {{ store.city }}
              </h3>
              <address class="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                <p>{{ store.address }}</p>
                <p>{{ store.description }}</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>