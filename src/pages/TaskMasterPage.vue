<template>
  <div class="taskMaster custom-background">
    <div class="card custom-card mb-3 mt-5 mr-5 ml-5">
      <img src="../assets/img/Task-Master.png" style="height: 550px; width: content" class="card-img-top" alt="...">
      <div class="card-body custom-card-body">
        <h5 class="card-title custom-title">
          Task Master
        </h5>
        <p class="card-text custom-font">
          Task-Master is task manager app that will save to local storage. Therefore, all your tasks will be saved if you refresh the page. Also uses .swal alerts to confirm deleting a task once it is completed!
        </p>
        <button @click="navigateToTaskMaster()" class="btn btn-outline-success mr-4 custom-title" style="border: rounded; border-color: silver;">
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
  name: 'TaskMasterPage',
  setup() {
    return {
      navigateToTaskMaster() {
        window.open('')
      },
      navigateToGit() {
        window.open('https://github.com/TysonCWilliams/Task-master')
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
