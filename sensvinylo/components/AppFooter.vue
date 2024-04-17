<script setup lang="ts">
import AppToggleFooter from './AppToggleFooter.vue';
</script>

<template>
  <footer class="border-t border-solid border-t-black px-2 mb-2 gap-3 flex flex-col text-lg font-semibold md:flex-row md:h-36 md:justify-between">
    <AppToggleFooter 
      :buttonTitle="'À propos'" 
      :links="[{ link: 'equipe', title: 'L\'équipe Sensvinylo' }, 
        {link: 'engagement', title: 'Nos engagements' }, 
        {link: 'mentions-legales', title: 'Mentions légales et conditions générales de vente' }]"/>
    <AppToggleFooter 
      :buttonTitle="'Contact'" 
      :links="[{ link: 'contact', title: 'Contactez-nous' }, 
        {link: 'FAQ', title: 'Foire à questions' }]"/>     
    <div class="flex flex-col">
      <span class="mb-2">Joindre notre newsletter</span>
      <section class="flex gap-2">
        <input type="email" placeholder="Votre email" class="border border-solid rounded border-black dark:border-white dark:border-2 mr-1 h-10 w-max text-sm pl-1"/>
        <button class="border-yellow-400 border rounded-lg text-center font-bold px-3 ">S'inscrire</button>
      </section>
    </div>
  </footer>
</template>