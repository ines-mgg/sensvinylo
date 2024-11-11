<script setup lang="ts">

import getSeoMeta from '~/Meta/getSeoMeta';
import getDefinedPage from '~/Meta/getDefinedPage';

const title = "Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France";
const description = "Les mentions légales et conditions de ventes de Sensvinylo, votre disquaire de vinyles à Paris et en Ile-de-France.";
getSeoMeta(title, description);

useSchemaOrg([
  getDefinedPage(
    `${window.location.origin}/mentions-legales`,
    title,
    description
  ),
])
</script>

<template>

  <section class="flex flex-col items-center my-4">
    <span class="text-2xl font-bold md:text-3xl">Mentions légales</span>
    <p class="text-justify px-4 md:self-start md:text-xl">
      Sensvinylo <br>
      Société par actions simplifiée <br>
      Siège social: 270 Rue du Faubourg Saint-Antoine, 75012 Paris <br>
      Capital social: 36.000.000 € <br>
      RCS: Paris B 000 000 000 <br>
      Hébergeur: sensvinylo-store.com <br>
      Contact: sensvinylo@contact.fr  <br>
    </p>
  </section>
  <section class="flex flex-col items-center my-4 md:items-start">
    <span class="text-2xl font-bold md:text-3xl md:self-center">Conditions générales de vente</span>
    <article class="flex flex-col p-4">
      <span class="text-lg font-semibold md:text-xl">Article 1 - Objet</span>
      <p class="text-justify pt-0">
        Les présentes conditions générales de vente (ci-après les "CGV") ont pour
        objet de définir les modalités de vente en ligne de produits proposés par
        la société Sensvinylo (ci-après le "Vendeur") sur le site internet
        (https://sensvinylo-store.com/) (ci-après le "Site").
      </p>
    </article>
    <article class="flex flex-col p-4">
      <span class="text-lg font-semibold md:text-xl">Article 2 - Prix</span>
      <p class="text-justify pt-0">
        Les prix des produits sont indiqués en euros (€) toutes taxes comprises
        (TTC), hors frais de livraison. Les frais de livraison sont indiqués sur
        le Site avant la validation de la commande.
      </p>
    </article>
    <article class="flex flex-col p-4">
      <span class="text-lg font-semibold md:text-xl">Article 3 - Commande</span>
      <p class="text-justify pt-0">
        Le client peut passer commande sur le Site en créant un compte ou en tant
        qu'invité. Le client doit renseigner les informations nécessaires à la
        livraison de sa commande, y compris son nom, son adresse et ses coordonnées.
      </p>
    </article>
    <article class="flex flex-col p-4">
      <span class="text-lg font-semibold md:text-xl">Article 4 - Paiement</span>
      <p class="text-justify pt-0">
        Le paiement des commandes s'effectue par carte bancaire, PayPal ou virement
        bancaire. Le paiement est sécurisé par un système de paiement en ligne agréé.
      </p>
    </article>
    <article class="flex flex-col p-4">
      <span class="text-lg font-semibold md:text-xl">Article 5 - Livraison</span>
      <p class="text-justify pt-0">
        Les commandes sont livrées en France métropolitaine dans un délai de 3 à 5
        jours ouvrables à compter de la validation de la commande. Les livraisons
        sont effectuées par un transporteur indépendant.
      </p>
    </article>
    <article class="flex flex-col p-4">
      <span class="text-lg font-semibold md:text-xl">Article 6 - Droit de rétractation</span>
      <p class="text-justify pt-0">
        Le client dispose d'un délai de 14 jours à compter de la réception de sa
        commande pour exercer son droit de rétractation sans avoir à justifier de
        motif. Pour exercer son droit de rétractation, le client doit contacter le
        Vendeur par email ou par courrier. Le client doit ensuite retourner les
        produits à ses frais dans un délai de 14 jours à compter de la notification
        de son intention de rétractation.
      </p>
    </article>
    <article class="flex flex-col p-4">
      <span class="text-lg font-semibold md:text-xl">Article 7 - Remboursement</span>
      <p class="text-justify pt-0">
        En cas de rétractation, le Vendeur remboursera au client le montant total de
        sa commande, y compris les frais de livraison, dans un délai de 14 jours à
        compter de la réception des produits retournés.
      </p>
    </article>
    <article class="flex flex-col p-4">
      <span class="text-lg font-semibold md:text-xl">Article 8 - Garantie légale</span>
      <p class="text-justify pt-0">
        Les produits sont garantis contre les vices cachés conformément aux articles
        L.217-1 et suivants du Code de la consommation. Le client peut exercer son
        droit à la garantie légale en contactant le Vendeur par email ou par courrier.
      </p>
    </article>
    <article class="flex flex-col p-4">
      <span class="text-lg font-semibold md:text-xl">Article 9 - Propriété intellectuelle</span>
      <p class="text-justify pt-0">
        Le Site et tous ses éléments (textes, images, vidéos, etc.) sont protégés par
        le droit d'auteur et le droit de la propriété intellectuelle. Toute
        reproduction, représentation, modification, adaptation, distribution ou
        diffusion du Site ou de ses éléments est interdite sans l'autorisation
        expresse et écrite du Vendeur.
      </p>
    </article>
    <article class="flex flex-col p-4">
      <span class="text-lg font-semibold md:text-xl">Article 10 - Droit applicable et juridiction compétente</span>
      <p class="text-justify pt-0">
        Les présentes CGV sont régies par le droit français. En cas de litige, les
        tribunaux français seront seuls compétents.
      </p>
    </article>
  </section>
</template>