<template>
  <div class="resume custom-background">
    <button @click="navigateToResume()" class="btn btn-outline-success ml-4 mt-4 custom-font" style="border: rounded;">
      <i class="far fa-file fa-2x mb-2 mr-1"></i>
      Resume
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

@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');

.custom-font{
  font-family: 'Rajdhani', sans-serif;
  font-weight: bolder;
  font: bolder;
  font-size: large;
}

.custom-background{
  background-color: black;
  height: cover;
  width: 100%;
  position: relative;
}

</style>
