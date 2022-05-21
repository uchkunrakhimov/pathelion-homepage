<template>
  <div class="container-lg mx-auto mt-3 px-4 pl-4">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>


<style lang="scss">
</style>
