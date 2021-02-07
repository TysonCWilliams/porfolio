<template>
  <div class="capstone custom-background">
    <div class="card custom-card mb-3 mt-5 mr-5 ml-5">
      <img src="../assets/img/capstone.png" style="height: 550px; width: content" class="card-img-top" alt="...">
      <div class="card-body custom-card-body">
        <h5 class="card-title">
          Capstone/Dungeons and Dragons
        </h5>
        <p class="card-text">
          This is the app myself and 3 others decided on for our group Capstone. We wanted to make something fun and interactive but also something new. We went with a Dungeons and Dragons game. We knew time was limited to complete this but it didn't stop us from trying to go above and beyond. It ended up being a fairly large app and we all contributed to different parts. If you've never played before we have detailed instructions. Full chat is available and you can host a campaign and invite any of your friends. Full DnD dice options. Character creation, and interactive map or the ability to bring in your own. There are lots of areas to explore and features to check out so feel free to give a try!
        </p>
        <button @click="navigateToCapstone()" class="btn btn-success mr-4" style="border: rounded; border-color: silver;">
          Demo
        </button>
        <button @click="navigateToGit()" class="btn btn-success" style="border: rounded; border-color: silver;">
          Code
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CapstonePage',
  setup() {
    return {
      navigateToCapstone() {
        window.open('https://critical-failure-1.herokuapp.com/')
      },
      navigateToGit() {
        window.open('https://github.com/cunningdan/capstone-dnd')
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

.custom-background{
  background-color: black;
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
