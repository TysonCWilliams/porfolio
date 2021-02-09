<template>
  <div class="moonMiner custom-background">
    <div class="card custom-card mb-3 mt-5 mr-5 ml-5">
      <img src="../assets/img/moon2.png" style="height: 550px; width: content" class="card-img-top" alt="...">
      <div class="card-body custom-card-body">
        <h5 class="card-title custom-title">
          Moon Miner
        </h5>
        <p class="card-text custom-font">
          Moon-Miner is based on the clicker games you can play on the internet. I had a lot of fun with this one. The objective is to Mine a resource by clicking it. Each click in my game represents mining stars out of a black hole. As you progress and reach a certain amount of stars.. power-up's will be available. There are 2 different types of upgrades. Automatic upgrades which allows stars to be mined automatically while also gaining your click count stars. The 2nd upgrade are click upgrades which allows a multiplier for every click. 10x per click for example. The total stars mined will always show as well as your uprgrades being used. I really loved making this I'm excited to go back and make improvements.
        </p>
        <button @click="navigateToMoonMiner()" class="btn btn-outline-success mr-4 custom-title" style="border: rounded; border-color: silver;">
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
  name: 'MoonMinerPage',
  setup() {
    return {
      navigateToMoonMiner() {
        window.open('https://tysoncwilliams.github.io/Moon-checkpoint2/')
      },
      navigateToGit() {
        window.open('https://github.com/TysonCWilliams/Moon-checkpoint2')
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
  text-decoration: underline;
  text-decoration-color: rgba(192, 192, 192, 0.596)
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
