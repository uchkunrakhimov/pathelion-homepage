<template>
  <nav class="nav sticky top-0 bg-chakra">
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
          class="w-16 rounded-full duration-500 hover:rotate-0 rotate-45 brand-img"
          :src="require('../assets/img/logo.png')"
          :alt="notFound"
        />
      </router-link>
      <div class="w-312">
        <router-link class="px-3.5 hover:underline hover:underline-offset-4" to="/works">Works</router-link>
        <router-link class="pr-3.5 hover:underline hover:underline-offset-4" to="/contact">Contact Us</router-link>
        <a class="hover:underline hover:underline-offset-4" href="https://github.com/uchkunrakhimov/pathelion-homepage">Source</a>
      </div>
    </div>
  </nav>
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