<script setup lang="ts">
import AppToggleList from '~/components/AppToggleList.vue';

useSeoMeta({ 
  title: 'Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
  description: 'Les engagements de Sensvinylo, votre disquaire de vinyles à Paris et en Ile-de-France. Découvrez notre mission, notre vision, nos valeurs et nos engagements.'
}) 
</script>

<template>
    <article class="flex flex-col items-center">
      <span class="text-2xl font-bold text-center md:text-3xl">Nos engagements</span>
    </article>
    <AppToggleList
      :toggleTitle="'Notre mission'"
      :toggleDescription="[{value: 'Faire découvrir la magie du vinyle à tous'}, 
        {value: 'Offrir une expérience musicale unique'}, 
        {value: 'Contribuer à la pérennité du support vinyle'}]"
    />
    <AppToggleList
      :toggleTitle="'Notre vision'"
      :toggleDescription="[{value: 'Devenir le leader incontesté de la vente de vinyles en France'}, 
        {value: 'Développer une communauté active de passionnés'}, 
        {value: 'Faire du vinyle un élément incontournable de la vie quotidienne'}]"
    />
    <AppToggleList
      :toggleTitle="'Nos valeurs fondamentales'"
      :toggleDescription="[{value: 'Passion'}, 
        {value: 'Qualité'}, 
        {value: 'Service'}, 
        {value: 'Respect'}, 
        {value: 'Engagement'}]"
    />
    <AppToggleList
      :toggleTitle="'Nos engagements envers nos clients'"
      :toggleDescription="[{value: 'Satisfaction garantie'}, 
        {value: 'Livraison rapide et sécurisée'}, 
        {value: 'Conseils personnalisés'}, 
        {value: 'Service client accessible et réactif'}]"
    />
    <AppToggleList
      :toggleTitle="'Notre contribution à la préservation du patrimoine musical'"
      :toggleDescription="[{value: 'Soutien aux artistes et labels indépendants'}, 
        {value: 'Promotion de la culture du vinyle'}, 
        {value: 'Participation à des événements et festivals'}]"
    />
    <AppToggleList
      :toggleTitle="'Notre engagement pour l\'environnement'"
      :toggleDescription="[{value: 'Utilisation de matériaux durables et éco-responsables'}, 
        {value: 'Réduction de notre empreinte carbone'}, 
        {value: 'Sensibilisation de nos clients aux enjeux environnementaux'}]"
    />
</template>