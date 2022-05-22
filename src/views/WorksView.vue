<template>
  <div
    class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <div
      class="
        grid grid-cols-2
        gap-y-10
        sm:grid-cols-3
        gap-x-6
        lg:grid-cols-4
        xl:grid-cols-4 xl:gap-x-8
      "
    >
      <a
        v-for="card in cards"
        :key="card.id"
        :href="card.href"
        class="group"
      >
        <div
          class="
            w-full
            aspect-w-1 aspect-h-1
            bg-gray-200
            rounded-lg
            overflow-hidden
            xl:aspect-w-7 xl:aspect-h-8
          "
        >
          <img
            :src="card.imageSrc"
            :alt="card.imageAlt"
            class="
              h-card
              object-center object-cover
              group-hover:opacity-75
            "
          />
        </div>
        <h3 class="mt-3 text-lg text-white">
          {{ card.name }}
        </h3>
        <p class="mt-3 text-sm font-medium text-white">
          {{ card.disc }}
        </p>
      </a>
    </div>
  </div>
</template>

<script setup>
import shop from '../assets/img/internet-shop.png'
import service from '../assets/img/topinfo.png'
import notFound from '../assets/img/notfound.png'
import ticTacToe from '../assets/img/tic-tac-toe.png'
import paperCross from '../assets/img/paper-cross.png'
import todo from '../assets/img/todo.png'
const cards = [
  {
    id: 1,
    name: "Internet shop (Hunarmand.uz)",
    href: "https://market.dgtl.uz",
    disc: "Here: HTML, CSS, Jquery, LanguageSwitcher, JS",
    imageSrc: shop,
    imageAlt:
      "Image not found",
  },
  {
    id: 2,
    name: "Services (Topinfo.uz)",
    href: "https://light.pro-service.uz/",
    disc: "Here: Vuejs(2), SCSS, CSS, Swiperjs, Bootstrap",
    imageSrc: service,
    imageAlt:
      "Image not found",
  },
  {
    id: 3,
    name: "FamilyTree",
    href: "#",
    disc: "Here: Vuejs(2), SCSS, CSS , Bootstrap, D3.js, OrgChart",
    imageSrc: notFound,
    imageAlt:
      "Image not found",
  },
  {
    id: 4,
    name: "Tic-Tac-Toe",
    href: "https://dashing-dolphin-d534f8.netlify.app",
    disc: "Here: Reactjs",
    imageSrc: ticTacToe,
    imageAlt:
      "Image not found",
  },
  {
    id: 5,
    name: "Rock Paper Scissors",
    href: "https://willowy-gaufre-685e53.netlify.app",
    disc: "Here: Reactjs",
    imageSrc: paperCross,
    imageAlt:
      "Image not found",
  },
  {
    id: 6,
    name: "Todo List",
    href: "https://spontaneous-heliotrope-f04aad.netlify.app",
    disc: "Here: Reactjs",
    imageSrc: todo,
    imageAlt:
      "Image not found",
  },
];
</script>