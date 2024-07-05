<script setup lang="ts">
import AppToggle from '~/components/AppToggle.vue';

useSeoMeta({
  title: 'Sensvinylo FAQ - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
  description: 'Les réponses à vos questions sur Sensvinylo, votre disquaire de vinyles à Paris et en Ile-de-France. Découvrez notre FAQ pour tout savoir sur nos produits et services.'
})

const faqs = ref([])
onMounted(async () => {
  const response = await fetch('/database.json')
  const data = await response.json()
  faqs.value = data.faqs
})

useSchemaOrg([
  defineWebPage({
    '@type': 'FAQPage',
    url: 'https://sensvinylo-store.com/FAQ',
    name: 'Sensvinylo FAQ - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
    description: 'Les réponses à vos questions sur Sensvinylo, votre disquaire de vinyles à Paris et en Ile-de-France. Découvrez notre FAQ pour tout savoir sur nos produits et services.',
    inLanguage: 'fr-FR',
  }),
  defineQuestion({
    name: 'Comment puis-je commander un produit ?',
    acceptedAnswer: 'Vous pouvez commander un produit sur notre site web https://sensvinylo-store.com/ en créant un compte ou en tant qu\'invité.Il vous suffit de sélectionner le produit que vous souhaitez acheter, de l\'ajouter à votre panier et de suivre les instructions de paiement.',
  }),
  defineQuestion({
    name: 'Quels sont les modes de paiement disponibles ?',
    acceptedAnswer: 'Nous acceptons les paiements par carte de crédit, carte de débit, PayPal et virement bancaire. Vous pouvez choisir le mode de paiement qui vous convient le mieux lors du processus de commande.',
  }),
  defineQuestion({
    name: 'Quels sont les délais de livraison ?',
    acceptedAnswer: 'Les délais de livraison varient en fonction de votre emplacement et du mode de livraison choisi. En général, les commandes sont livrées en France métropolitaine et sont expédiées dans les 1 à 3 jours ouvrables suivant la confirmation de la commande. Vous recevrez un e-mail de confirmation d\'expédition avec un numéro de suivi une fois que votre commande aura été expédiée.',
  }),
  defineQuestion({
    name: 'Quels sont les frais de livraison ?',
    acceptedAnswer: 'Les frais de livraison sont indiqués sur le site avant la validation de la commande. Ils varient en fonction du montant de la commande et du mode de livraison choisi.',
  }),
  defineQuestion({
    name: 'Puis-je retourner un produit ?',
    acceptedAnswer: 'Oui, vous disposez d\'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation. Pour exercer votre droit de rétractation, vous devez contacter notre service client par email ou par courrier. Vous trouverez toutes les informations nécessaires sur notre site web.',
  }),
  defineQuestion({
    name: 'Comment puis-je obtenir un remboursement ?',
    acceptedAnswer: 'En cas de rétractation, nous vous rembourserons le montant total de votre commande, y compris les frais de livraison, dans un délai de 14 jours à compter de la réception des produits retournés.',
  }),
  defineQuestion({
    name: 'Que faire si mon produit est endommagé ou défectueux ?',
    acceptedAnswer: 'Si votre produit est endommagé ou défectueux, veuillez contacter notre service client par email ou par courrier. Nous vous proposerons une solution de remplacement ou un remboursement.',
  }),
  defineQuestion({
    name: 'Comment puis-je contacter le service client ?',
    acceptedAnswer: 'Vous pouvez contacter notre service client par email à sensvinylo@contact.fr ou par courrier à 270 Rue du Faubourg Saint - Antoine, 75012 Paris.Nous nous efforçons de répondre à toutes les demandes dans les plus brefs délais.'
  }),
  defineQuestion({
    name: 'Comment puis-je m\'inscrire à la newsletter ?',
    acceptedAnswer: 'Vous pouvez vous inscrire à notre newsletter en renseignant votre adresse email sur notre site web. Vous recevrez ainsi régulièrement des informations sur nos nouveautés, nos promotions et nos événements.'
  }),
  defineQuestion({
    name: 'Comment puis-je suivre mes commandes ?',
    acceptedAnswer: 'Vous pouvez suivre vos commandes en vous connectant à votre compte sur notre site web. Vous y trouverez également l\'historique de vos commandes et vos informations de livraison.'
  })
])
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
