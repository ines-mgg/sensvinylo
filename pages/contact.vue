<script setup lang="ts">
import { ref } from 'vue';
import getSeoMeta from '~/meta/getSeoMeta';
import getDefinedPage from '~/meta/getDefinedPage';

const title = "Sensvinylo - Contactez-nous pour toutes vos questions";
const description = "Contactez Sensvinylo par email, téléphone ou courrier pour toutes vos questions et demandes.";
getSeoMeta(title, description);

useSchemaOrg([
    getDefinedPage(
        `${window.location.origin}/contact`,
        title,
        description
    ),
])
const showMessage = ref(false)

const submitForm = () => {
    showMessage.value = true
}

</script>

<template>
    <section class="flex flex-col items-center my-4 px-2">
        <span class="text-center text-gray-500 text-sm italic dark:text-white md:text-base">Sensvinylo est à votre
            disposition pour répondre à toutes vos questions et vous aider à trouver le vinyle de vos rêves.</span>
        <p class="text-justify px-3 md:text-lg">
            N'hésitez pas à nous joindre directement via le formulaire de contact ci-dessous, ou par e-mail à
            sensvinylo@contact.fr. <br>
            Nous vous répondrons dans les meilleurs délais.
        </p>
    </section>
    <section class="flex flex-col items-center my-4 px-2">
        <form class="flex flex-col gap-4 items-center w-full max-w-lg p-4" @submit.prevent="submitForm">
            <fieldset class="flex justify-center font-bold md:flex-col md:w-full">
                <div class="md:flex md:flex-col md:w-full">
                    <label class="label-required">Nom</label>
                    <input required type="text" placeholder="Doe"
                        class="border rounded border-black dark:border-white dark:border-2 h-10 w-max text-sm pl-1 font-normal md:w-full"
                        aria-label="Votre nom">
                </div>
                <div class="md:flex md:flex-col md:w-full">
                    <label class="label-required">Prénom</label>
                    <input required type="text" placeholder="Jane"
                        class="border rounded border-black dark:border-white dark:border-2 h-10 w-max text-sm pl-1 font-normal md:w-full"
                        aria-label="Votre pprénom">
                </div>
            </fieldset>
            <fieldset class="flex justify-center font-bold md:flex-col md:w-full">
                <div class="md:flex md:flex-col md:w-full">
                    <label class="label-required">Email</label>
                    <input required type="email" placeholder="Votre email"
                        class="border rounded border-black dark:border-white dark:border-2 h-10 w-max text-sm pl-1 font-normal md:w-full"
                        aria-label="Votre adresse mail">
                </div>
                <div class="md:flex md:flex-col md:w-full">
                    <label class="">Téléphone</label>
                    <input type="tel" placeholder="06XXXXXXXX"
                        class="border rounded border-black dark:border-white dark:border-2 h-10 w-max text-sm pl-1 font-normal md:w-full"
                        aria-label="Votre numéro de téléphone">
                </div>
            </fieldset>
            <label class="label-required font-bold self-start">Votre message</label>
            <textarea cols="50" rows="100" maxlength="500" minlength="10"
                class="border rounded border-black dark:border-white dark:border-2 h-48 w-max text-sm pl-1 font-normal md:w-full"
                required aria-label="Entrez votre message"></textarea>
            <button type="submit" class="bg-orange-500 border-orange-500 font-bold rounded-md w-full p-2 text-black"
                aria-label="Envoyer votre message">Envoyer</button>
        </form>
        <div v-if="showMessage" class="flex flex-col items-center gap-1 text-sm text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="none" stroke="#16b70b" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" d="M5 11L11 17L21 7">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0" />
                </path>
            </svg>
            <span class="text-center">Nous vous remercions de votre intérêt pour Sensvinylo !</span>
            <span class="text-gray-400 dark:text-white">Nous vous répondrons dans les meilleurs délais.</span>
        </div>
    </section>
</template>