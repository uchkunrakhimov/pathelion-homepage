<template>
  <div class="container-lg mx-auto mt-3 px-4 pl-4">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>


<style lang="scss">
</style>
