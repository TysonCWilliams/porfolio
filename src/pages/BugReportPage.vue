<template>
  <div class="bugReport custom-background">
    <div class="card custom-card mb-3 mt-5 mr-5 ml-5">
      <img src="../assets/img/bug-report.png" style="height: 550px; width: content" class="card-img-top" alt="...">
      <div class="card-body custom-card-body">
        <h5 class="card-title custom-title">
          Bug Report
        </h5>
        <p class="card-text custom-font">
          Bug-Report is an app created for users to first log-in using auth-0. They will create a username and password if logging in for the first time. From there they will be allowed to Post bugs and issues that need resolved. After posting a bug it will show up on the home screen for all users to see. From there you can click on that bug to get more details.. as well as make comments on the specific bug to suggest potential solutions.
        </p>
        <button @click="navigateToBugReport()" class="btn btn-outline-success mr-4 custom-title" style="border: rounded; border-color: silver;">
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
  name: 'BugReportPage',
  setup() {
    return {
      navigateToBugReport() {
        window.open('https://tyson-bug-report.herokuapp.com/#/')
      },
      navigateToGit() {
        window.open('https://github.com/TysonCWilliams/bug-report')
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
