<template>
  <div class="inspire custom-background">
    <div class="card custom-card mb-3 mt-5 mr-5 ml-5">
      <img src="../assets/img/inspire.png" style="height: 550px; width: content" class="card-img-top" alt="...">
      <div class="card-body custom-card-body">
        <h5 class="card-title custom-title">
          Inspire
        </h5>
        <p class="card-text custom-font">
          Inspire is similar to Task-Master but instead uses a Back-End(API) of my own using bcw-sandbox.herokuapp. This application will give you the current weather, as well as on every page refresh it will also cycle through a different background picture and a daily quote. From there, you can also create as many ToDo's as you want. Once your finished with the task you can delete them.
        </p>
        <button @click="navigateToInspire()" class="btn btn-outline-success mr-4 custom-title" style="border: rounded; border-color: silver;">
          Demo:
        </button>
        <button @click="navigateToGit()" class="btn btn-outline-success custom-title" style="border: rounded; border-color: silver;">
          Code:
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InspirePage',
  setup() {
    return {
      navigateToInspire() {
        window.open('')
      },
      navigateToGit() {
        window.open('https://github.com/TysonCWilliams/Inspire')
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap');

.custom-title{
  font-family: 'Signika', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');

.custom-font{
  font-family: 'Rajdhani', sans-serif;
}

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
