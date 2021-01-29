<template>
  <div class="about" style="backround-color: black;">
    <loader></loader>
    <h1 style="text-color: white;">
      Portfolio
    </h1>
  </div>
</template>

<script>
import { Loader } from '../components/Loader.vue'
export default {
  name: 'AboutPage',
  setup() {
    return {}
  },
  components: { Loader }
}
</script>

<style scoped lang="scss">

</style>
