<template>
  <Body />
</template>

<script lang="ts">
import Body from '@/components/Body.vue'
import { Options, Vue } from 'vue-class-component';
@Options({
  components: {
    Body
  },
})
export default class HomeView extends Vue {}
</script>
