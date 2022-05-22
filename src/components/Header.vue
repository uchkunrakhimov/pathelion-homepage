<template>
  <nav class="nav sticky top-0 bg-chakra sm:z-0">
    <div
      class="
        nav__menu
        flex
        justify-between
        items-center
        sticky
        top-0
        bg-gradient-to-r
        to-transparent
      "
    >
      <router-link to="/">
        <img
          class="
            w-16
            rounded-full
            duration-500
            hover:rotate-0
            rotate-45
            brand-img
          "
          :src="require('../assets/img/logo.png')"
          :alt="notFound"
        />
      </router-link>
      <div class="w-312 sm-breakpoint">
        <router-link
          class="px-3.5 hover:underline hover:underline-offset-4"
          to="/works"
          >Works</router-link
        >
        <router-link
          class="pr-3.5 hover:underline hover:underline-offset-4"
          to="/contact"
          >Contact Us</router-link
        >
        <a
          class="hover:underline hover:underline-offset-4"
          href="https://github.com/uchkunrakhimov/pathelion-homepage"
          >Source</a
        >
      </div>

      <!-- Mobile menu -->
      <div
        class="
          bg-cyan-900
          p-3
          top-14
          w-40
          leading-10
          rounded
          right-0
          absolute
          ml-auto
          z-10
          flex flex-col
          2xl:hidden
          xl:hidden
          lg:hidden
          md:hidden
        "
        v-if="awesome"
      >
        <router-link
          class="hover:underline hover:underline-offset-4"
          to="/works"
          >Works</router-link
        >
        <router-link
          class="hover:underline hover:underline-offset-4"
          to="/contact"
          >Contact Us</router-link
        >
        <a
          class="hover:underline hover:underline-offset-4"
          href="https://github.com/uchkunrakhimov/pathelion-homepage"
          >Source</a
        >
      </div>

      <div
        class="
          p-2
          space-y-2
          rounded
          2xl:hidden
          xl:hidden
          lg:hidden
          md:hidden
          relative
          duration-300
          hover:bg-cyan-800
          focus:ring-4 focus:outline-none focus:bg-cyan-800
          dark:bg-cyan-800 dark:hover:bg-cyan-800 dark:focus:bg-cyan-800
        "
        @click="awesome = !awesome"
      >
        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      notFound: "Image not found",
      awesome: false,
    };
  },
};
</script>

<style>
</style>