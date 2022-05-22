<template>
  <MasterLayout />
</template>

<script lang="ts">
import MasterLayout from '@/components/MasterLayout.vue'
import { Options, Vue } from 'vue-class-component';
@Options({
  components: {
    MasterLayout
  },
})
export default class HomeView extends Vue {}
</script>
