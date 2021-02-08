<template>
  <div class="portfolioPage" style="position: relative; width: 100%; background-color: black;">
    <Navbar />
    <div class="row"
         style="align-content: center; justify-content: center;"
    >
      <h1 class="custom-title">
        Portfolio
      </h1>
    </div>
    <div class="
         custom-class"
    >
      <div class="axis">
        <div class="row mr-4 ml-4">
          <div class="col-12">
            <div @click="navigateTo('/projects/bugreport')" class="box">
              <div class="text">
                Bug Report
              </div>
              <img src="../assets/img/bug-report.png">
            </div>
            <div @click="navigateTo('/projects/moonminer')" class="box">
              <div class="text">
                Moon-Miner
              </div>
              <img src="../assets/img/moon-miner.png">
            </div>
            <div @click="navigateTo('/projects/capstone')" class="box">
              <div class="text">
                Capstone-DnD
              </div>
              <img src="../assets/img/capstone.png">
            </div>
          </div>
        </div>
        <div @click="navigateTo('/projects/taskmaster')" class="box">
          <div class="text">
            Task Master
          </div>
          <img src="../assets/img/Task-Master.png">
        </div>
        <div @click="navigateTo('/projects/inspire')" class="box">
          <div class="text">
            Inspire
          </div>
          <img src="../assets/img/inspire.png">
        </div>
        <div @click="navigateTo('/projects/keepr')" class="box">
          <div class="text">
            Keepr
          </div>
          <img src="../assets/img/keepr.png">
        </div>
      </div>
      <img src="../assets/img/random.gif" style="width: 600px; height: 140px; opacity: .5;" alt="">
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'PortfolioPage',
  setup() {
    return {
      navigateTo(route) {
        router.push(route)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap');

.custom-title{
  color: rgb(3, 247, 16);
  font: bolder;
  font-family: 'Signika', sans-serif;
}

 .custom-class {
  margin: 50px 10px;
  text-align: center;
  background: transparent;
  position: relative;
  width: 100%;
  background-size: cover;
  justify-content: center;
}

.box {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 250px;
  height: 140px;
  background:  #000000;
  margin: 50px 10px;
  box-shadow: white 0 0px 80px 0px;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 1;
  vertical-align: top;
  overflow: hidden;
  transform: rotateX(54deg) rotateY(20deg) rotateZ(-38deg);
  margin-left: 50px;
  margin-right: 50px;
}
.box img {
  width: 100%;
  height: auto;
  opacity: 0.7;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.box .text {
  opacity: 0;
  vertical-align: bottom;
  font-size: 20px;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-style: italic;
}
.box:hover {
  margin: 30px -20px;
  width: 310px;
  height: 210px;
  z-index: 2;
  transform: rotateX(0) rotateY(0) rotateZ(0);
}
.box:hover img {
  opacity: 1;
}
.box:hover .text {
  opacity: 1;
}
</style>
