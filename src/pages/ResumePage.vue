<template>
  <div class="resume custom-background">
    <button @click="navigateToResume()" class="btn btn-success ml-4 mt-4" style="border: rounded; border-color: silver;">
      <i class="far fa-file"></i>
      View Resume
    </button>
  </div>
</template>

<script>
export default {
  name: 'ResumePage',
  setup() {
    return {
      navigateToResume() {
        window.open('https://www.dropbox.com/s/ua95dnphv017ya7/Tyson_Williams_Resume.pdf?dl=0')
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

.custom-background{
  background-color: black;
  height: cover;
  width: 100%;
  position: relative;
}

.custom-card{
  border: solid;
  border-style: solid;
  border-color: chartreuse;
}

.custom-card-body{
  color:rgb(35, 247, 7);
  background-color: rgb(12, 12, 12);
}

</style>
