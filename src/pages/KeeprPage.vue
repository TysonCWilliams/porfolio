<template>
  <div class="keepr custom-background">
    <div class="card custom-card mb-3 mt-5 mr-5 ml-5">
      <img src="../assets/img/keepr.png" style="height: 550px; width: content" class="card-img-top" alt="...">
      <div class="card-body custom-card-body">
        <h5 class="card-title custom-title">
          Keepr
        </h5>
        <p class="card-text custom-font">
          Keepr was our final project. We has 5 days to complete this application. keepr is a pinterest clone with a full functioning Back-End using C# and MySQL. On the front end uses Vue-3. The user is able to log-in with an auth-0 protected account. From the home page they can view all the "keeps". Each keep opens up a modal. The modal contains a title and a picture realted to that topic. There is also a description. Once the user has made an account they can create their own Keeps and Vaults. Keeps can go into a vault, which also contains a title and discription. You can navigate to a users page which will show that users total keeps and total vaults. For the user, if it is their own page they can also view the vaults they have set to private. If its not that user, the private vaults are hidden.
        </p>
        <button @click="navigateToKeepr()" class="btn btn-outline-success mr-4 custom-title" style="border: rounded; border-color: silver;">
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
  name: 'KeeprPage',
  setup() {
    return {
      navigateToKeepr() {
        window.open('')
      },
      navigateToGit() {
        window.open('https://github.com/TysonCWilliams/Keepr2')
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
