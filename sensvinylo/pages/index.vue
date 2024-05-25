<script setup lang="ts">
import AppCarousel from '~/components/AppCarousel.vue';

useSeoMeta({
  title: 'Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
  description: 'Sensvinylo, le paradis des vinyles à Paris et en Ile-de-France. Découvrez notre large choix de vinyles neufs et d\'occasion, tous styles confondus. Les vinyles de vos artistes préférés en exclusivité chez Sensvinylo.',
})
</script>

<template>
  <!-- banner and slogan -->
  <section class="flex flex-col items-center justify-center my-4">
    <NuxtPicture src="/banner.webp" :imgAttrs="{ alt: 'image pour la bannière du slogan', loading: 'lazy' }"
      width="1470" height="773" sizes="sm:200px md:500px lg:1024" />
    <h1 class="md:text-4xl font-bold text-center absolute bg-gray-900 p-2 text-white">
      Sensvinylo, La passion du vinyle à votre portée.
    </h1>
  </section>
  <!-- carousel products -->
  <section class="flex flex-col items-center my-4">
    <span class="text-2xl font-bold md:text-4xl">Découvrez nos produits</span>
    <AppCarousel />
  </section>
  <!-- sensvinylo history -->
  <section class="flex flex-col items-center my-6 gap-1 p-2 md:gap-3">
    <span class="text-xl font-bold text-center md:text-4xl md:mt-3">Sensvinylo : Votre spécialiste du vinyle depuis
      2001</span>
    <p> Sensvinylo, né en 2001 de la passion commune d'Inès et Stéphane pour la musique et les vinyles, est aujourd'hui
      l'un
      des leaders de la vente de vinyles en France. Notre mission ? Partager notre amour du vinyle avec le plus grand
      nombre
      et vous offrir une expérience d'achat unique.</p>

    <span class="text-lg font-semibold md:text-3xl">Un large choix de vinyles pour tous les goûts</span>
    <p>Que vous soyez à la recherche du dernier album de votre artiste préféré ou d'un vinyle rare et vintage, vous
      trouverez forcément votre bonheur chez Sensvinylo. Nous proposons une large sélection de vinyles neufs et
      d'occasion, tous styles confondus : rock, pop, jazz, classique, électro, bandes originales de films...</p>

    <span class="text-lg font-semibold md:text-3xl">Des services de qualité pour une expérience client optimale</span>
    <p class="xl:self-start">En plus de notre large sélection de vinyles, nous vous proposons des services de qualité
      pour vous accompagner
      tout au long de votre expérience d'achat :</p>
    <ul>
      <li class="xl:self-start"><span class="font-semibold">Conseils personnalisés</span>: notre équipe de passionnés
        est
        à votre disposition
        pour vous conseiller et vous aider à
        trouver le vinyle parfait pour vos besoins.</li>
      <li class="xl:self-start"><span class="font-semibold">Livraison rapide et sécurisée</span>: nous expédions vos
        vinyles dans les meilleurs
        délais et avec le plus grand soin.</li>
      <li class="xl:self-start"><span class="font-semibold">Paiement sécurisé</span>: vous pouvez régler votre commande
        en
        toute sécurité par
        carte bancaire, PayPal ou virement bancaire.</li>
      <li class="xl:self-start"><span class="font-semibold">Service après-vente</span>: nous sommes à votre disposition
        pour répondre à toutes
        vos questions et pour vous aider en cas de problème.</li>
    </ul>
    <span class="text-lg font-semibold md:text-3xl">Sensvinylo : bien plus qu'un simple magasin de vinyles</span>
    <p>Sensvinylo, c'est aussi <b>une communauté de passionnés de vinyles</b>. Nous organisons régulièrement des
      événements
      dans
      notre boutique, tels que des soirées d'écoute, des concerts et des rencontres avec des artistes.</p>
    <span class="text-lg font-semibold md:text-3xl">Votre passion du vinyle, notre expertise</span>
    <p class="xl:self-start"> Que vous soyez un collectionneur chevronné ou un simple amateur de musique, Sensvinylo est
      votre adresse
      incontournable pour tout ce qui concerne le vinyle. <br>
      Rendez-nous visite dans notre boutique ou consultez notre site web pour
      découvrir notre univers.
    </p>
    <span class="text-lg font-semibold md:text-3xl">Sensvinylo : le paradis des amoureux du vinyle</span>
  </section>
  <div
    class="w-full h-36 md:h-48 bg-black flex flex-col items-center justify-center text-white font-bold dark:bg-transparent dark:border-t dark:border-b dark:border-white">
    <span class="md:text-3xl">Des vinyles pour tous les goûts et tous les budgets !</span>
    <span class="font-semibold text-sm md:text-xl">Ne manquez pas nos dernières actualités et promotions</span>
    <div class="flex justify-between items-center gap-4 mt-4 md:gap-11 md:text-xl">
      <NuxtLink to="/produits/" class="border-orange-500 border p-2 md:p-4">Voir nos produits →</NuxtLink>
      <NuxtLink to="/blogs/" class="border-yellow-400 border p-2 md:p-4">Découvrir notre blog →</NuxtLink>
    </div>
  </div>

</template>