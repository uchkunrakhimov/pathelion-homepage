<template>
  <div
    class="
      bg-zinc-700
      mt-8
      2xl:w-2/4
      xl:w-2/4
      lg:w-2/4
      md:w-3/4
      text-center
      mx-auto
      p-3
      rounded-md
    "
  >
    Hello, I'm an frontend developer based in Tashkent
  </div>
  <div class="mt-12">
    <div>
      <p class="sm:text-3xl text-2xl ml-1 md:text-5xl xl:text-5xl 2xl:text-5xl">
        Uchkun Rakhimov
      </p>
      <p class="pl-1 md:text-lg">
        Frontend Developer (Vuejs • Nuxtjs • Reactjs)
      </p>
    </div>
  </div>

  <!-- Work -->
  <div>
    <div class="mt-12">
      <p
        class="
          md:text-3xl
          sm:text-2xl
          text-2xl
          underline underline-offset-8
          mb-3
          decoration-teal-900
        "
      >
        Work
      </p>
      <p class="md:text-xl mt-2">
        &nbsp;&nbsp;&nbsp; Uchkun is a Frontend and Vuejs developer based in
        Tashkent. I have been practicing this field for more than 1 year, during
        this time, I started working for Light Solutions as a frontend
        programmer. I gained 6 months of experience in this campaign. For the
        most part of my experience, I’ve been with an online store
      </p>
    </div>
    <div class="text-center mx-auto mt-11">
      <router-link
        class="
          inline-flex
          items-center
          py-2
          px-3
          md:text-xl
          font-medium
          text-center text-white
          bg-cyan-900
          rounded-lg
          duration-300
          hover:bg-cyan-800
          focus:ring-4 focus:outline-none focus:bg-cyan-800
          dark:bg-cyan-800 dark:hover:bg-cyan-800 dark:focus:bg-cyan-800
        "
        to="/works"
        >My portfolio
        <svg
          class="ml-2 w-4 h-4 pt-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="#fff"
            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
          />
        </svg>
      </router-link>
    </div>
  </div>

  <!-- Bio -->
  <div class="mt-4">
    <p
      class="
        md:text-3xl
        sm:text-2xl
        text-2xl
        underline underline-offset-8
        decoration-teal-900
        mb-3
      "
    >
      Bio
    </p>
    <div class="mt-3 md:text-xl">
      <div>
        <span class="font-bold mr-3">2002</span>
        Borin in (Kashkadarya) Karshi.
      </div>
      <div>
        <span class="font-bold mr-4">2021</span>
        I studied at an It-Home called IT-Labs. I learned the frontend here.
      </div>
      <div>
        <span class="font-bold mr-3">2021-2022</span>
        During these years, I worked as a Frontend developer in the Light
        Solutions campaign
      </div>
    </div>
  </div>

  <!-- I Liked -->
  <div class="mt-7">
    <p
      class="
        flex
        items-center
        md:text-3xl
        sm:text-2xl
        text-2xl
        underline underline-offset-8
        decoration-teal-900
        mb-3
      "
    >
      I liked it
    </p>
    <div class="md:text-xl mt-3">
      <p>&nbsp;&nbsp;&nbsp; Music, Movies, Codeing, Art</p>
    </div>
  </div>

  <!-- On the Web -->
  <div class="mt-8">
    <p
      class="
        flex
        items-center
        md:text-3xl
        sm:text-2xl
        text-2xl
        underline underline-offset-8
        mb-3
        decoration-teal-900
      "
    >
      My links
    </p>
    <div class="md:ml-2 sm:ml-2 ml-2 md:text-xl mt-4">
      <a
        class="hover:underline hover:underline-offset-4 flex items-center"
        href="https://github.com/uchkunrakhimov"
      >
        <svg
          class="ml-2 mr-3 w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="#fff"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
        Github</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      notFound: "Image not found",
    };
  },
};
</script>

<style>
</style>