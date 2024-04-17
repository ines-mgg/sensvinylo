<script setup lang="ts">
import AppToggle from '~/components/AppToggle.vue';
useSeoMeta({ 
  title: 'Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France',
  description: 'Les réponses à vos questions sur Sensvinylo, votre disquaire de vinyles à Paris et en Ile-de-France. Découvrez notre FAQ pour tout savoir sur nos produits et services.'
}) 
</script>

<template>
  <section class="flex flex-col my-4 gap-1 px-2">
    <article class="flex flex-col items-center">
      <span class="text-2xl font-bold text-center md:text-3xl">Foire aux Questions</span>
    </article>
    <AppToggle
      :toggleTitle="'Comment puis-je commander un produit ?'"
      :toggleDescription="'Vous pouvez commander un produit sur notre site web https://sensvinylo-store.com/ en créant un compte ou en tant qu\'invité. Il vous suffit de sélectionner le produit que vous souhaitez acheter, de l\'ajouter à votre panier et de suivre les instructions de paiement.'"
    />
    <AppToggle
      :toggleTitle="'Quels sont les modes de paiement disponibles ?'"
      :toggleDescription="'Nous acceptons les paiements par carte bancaire, PayPal et virement bancaire.'"
    />
    <AppToggle
      :toggleTitle="'Quels sont les délais de livraison ?'"
      :toggleDescription="'Les commandes sont livrées en France métropolitaine dans un délai de 3 à 5 jours ouvrables à compter de la validation de la commande.'"
    />
    <AppToggle
      :toggleTitle="'Quels sont les frais de livraison ?'"
      :toggleDescription="'Les frais de livraison sont indiqués sur le Site avant la validation de la commande. Ils varient en fonction du montant de la commande et du mode de livraison choisi.'"
    />
    <AppToggle
      :toggleTitle="'Puis-je retourner un produit ?'"
      :toggleDescription="'Oui, vous disposez d\'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation. Pour exercer votre droit de rétractation, vous devez contacter notre service client par email ou par courrier. Vous trouverez toutes les informations nécessaires sur notre site web.'"
    />
    <AppToggle
      :toggleTitle="'Comment puis-je obtenir un remboursement ?'"
      :toggleDescription="'En cas de rétractation, nous vous rembourserons le montant total de votre commande, y compris les frais de livraison, dans un délai de 14 jours à compter de la réception des produits retournés.'"
    />
    <AppToggle
      :toggleTitle="'Que faire si mon produit est endommagé ou défectueux ?'"
      :toggleDescription="'Si votre produit est endommagé ou défectueux, veuillez contacter notre service client par email ou par courrier. Nous vous proposerons une solution de remplacement ou un remboursement.'"
    />
    <AppToggle
      :toggleTitle="'Comment puis-je contacter le service client ?'"
      :toggleDescription="'Vous pouvez contacter notre service client par email à sensvinylo@contact.fr ou par courrier à 242 Rue du Faubourg Saint-Antoine, 75012 Paris.'"
    />
    <AppToggle
      :toggleTitle="'Comment puis-je m\'inscrire à la newsletter ?'"
      :toggleDescription="'Vous pouvez vous inscrire à notre newsletter en renseignant votre adresse email sur notre site web. Vous recevrez ainsi régulièrement des informations sur nos nouveautés, nos promotions et nos événements.'"
    />
    <AppToggle
      :toggleTitle="'Comment puis-je suivre mes commandes ?'"
      :toggleDescription="'Vous pouvez suivre vos commandes en vous connectant à votre compte sur notre site web. Vous y trouverez également l\'historique de vos commandes et vos informations de livraison.'"
    />
  </section>
</template>
