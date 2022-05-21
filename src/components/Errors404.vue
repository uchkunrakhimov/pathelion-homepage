<template>
  <div class="mt-8 mb-8 text-center">
    <svg class="text-9xl" viewBox="0 0 1000 400">
      <text id="willie" x="50%" y="50%" text-anchor="middle" fill="none">
        404
      </text>
      <use xlink:href="#willie" class="will will1"></use>
      <use xlink:href="#willie" class="will will2"></use>
      <use xlink:href="#willie" class="will will3"></use>
      <use xlink:href="#willie" class="will will4"></use>
      <use xlink:href="#willie" class="will will5"></use>
    </svg>
    <p
      class="
        text-white
        2xl:text-3xl
        xl:text-3xl
        lg:text-3xl
        sm:text-3xl
        text-base
        pb-4
      "
    >
      😭 Page Not Found
    </p>
    <p>Sorry, but the page you were trying to view does not exist.</p>
    <div class="mt-8">
      <router-link
        to="/"
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
      >
        Back to Home 🏃🏻‍♂️
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.will {
  fill: none;
  stroke: #555;
  stroke-width: 3px;
  stroke-dasharray: 8% 30%;
  stroke-dashoffset: 0;
  animation: textanimation 6s linear infinite;
}
@keyframes textanimation {
  100% {
    stroke-dashoffset: -35%;
  }
}
.will1 {
  stroke: #fff;
  animation-delay: -1s;
}
.will2 {
  stroke: #0088cc;
  animation-delay: -2s;
}
.will3 {
  stroke: aquamarine;
  animation-delay: -3s;
}
.will4 {
  stroke: darkcyan;
  animation-delay: -4s;
}
.will5 {
  stroke: blue;
  animation-delay: -5s;
}
</style>