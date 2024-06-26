<script setup lang="ts">
const peoples = [
  {
    name: "Inès MAGANGA",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Inès a toujours eu une oreille fine pour la musique, passion qu'elle a héritée de ses parents collectionneurs de vinyles. Avant de cofonder Sensvinylo, elle a travaillé dans l'industrie musicale où elle a développé une compréhension profonde des tendances musicales et des besoins des mélomanes. Inès est le cœur créatif de Sensvinylo, s'assurant que chaque collection reflète diversité et qualité. Elle est également en charge des partenariats artistiques, contribuant à enrichir constamment notre offre de vinyles rares et collectors.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Stéphan GUEORGUIEFF",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Stéphan a débuté sa carrière en tant qu'ingénieur du son, une expérience qui lui a permis d'acquérir une expertise technique inégalée dans le domaine du son de haute fidélité. Co-fondateur de Sensvinylo, il est la force motrice derrière la qualité exceptionnelle de nos services. Stéphan est passionné par l'optimisation de l'expérience client, depuis la navigation sur notre site jusqu'à la satisfaction post-achat. Il est également à l'avant-garde des initiatives éco-responsables de Sensvinylo, cherchant toujours à minimiser notre impact environnemental.",
    xUrl: "#",
    linkedinUrl: "#",
  },
];

useSeoMeta({
  title: "Rencontrez Notre Équipe - Sensvinylo, Experts en Vinyles à Paris",
  description:
    "Découvrez l'équipe experte de Sensvinylo, dirigée par Inès et Stéphan, passionnés de musique et spécialistes des vinyles. Explorez les coulisses de notre boutique en ligne et nos magasins à Paris et en Île-de-France, et rencontrez les professionnels qui font de Sensvinylo votre disquaire de confiance.",
});
</script>

<template>
  <div class="py-24 md:py-32">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5"
    >
      <div class="max-w-2xl xl:col-span-2">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Notre Équipe Sensvinylo
        </h2>
        <p class="mt-6 text-lg leading-8">
          Rencontrez l'équipe passionnée de Sensvinylo, votre disquaire de
          référence à Paris et en Ile-de-France. Fondée en 2001 par Inès et
          Stéphan, notre boutique offre une sélection variée de vinyles neufs et
          d'occasion, allant du pop et rock au rap et à la musique du monde.
          Chaque membre de notre équipe apporte une expertise unique à la
          curation de notre collection diversifiée, assurant un service de
          qualité et une expérience client exceptionnelle. Visitez notre site,
          sensvinylo-store.com, pour découvrir des disques vinyles authentiques
          et bénéficier de conseils personnalisés par des experts qui partagent
          votre amour pour la musique.
        </p>
      </div>
      <ul role="list" class="-mt-12 space-y-12 divide-y xl:col-span-3">
        <li
          v-for="person in peoples"
          :key="person.name"
          class="flex flex-col gap-10 pt-12 sm:flex-row"
        >
          <img
            class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
            :src="person.imageUrl"
            :alt="`photo de ${person.name}`"
          />
          <div class="max-w-xl flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight">
              {{ person.name }}
            </h3>
            <p class="text-base leading-7">{{ person.role }}</p>
            <p class="mt-6 text-base leading-7">
              {{ person.bio }}
            </p>
            <ul role="list" class="mt-6 flex gap-x-6">
              <li>
                <a
                  :href="person.xUrl"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">X</span>
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  :href="person.linkedinUrl"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
