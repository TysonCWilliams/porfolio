<template>
  <div class="portfolioPage" style="position: relative; width: 100%; background-color: black;">
    <div class="row"
         style="align-content: center; justify-content: center;"
    >
      <h1>Portfolio</h1>
    </div>
    <div class="
         custom-class"
    >
      <div class="axis">
        <div class="box">
          <div class="text">
            Bug Report
          </div>
          <img src="../assets/img/bug-report.png">
        </div>
        <div class="box">
          <div class="text">
            Moon-Miner
          </div>
          <img src="../assets/img/moon-miner.png">
        </div>
        <div class="box">
          <img src="">
          <div class="text">
            Text
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

 .custom-class {
  margin: 50px 10px;
  text-align: center;
  background: #080808;
  position: relative;
  width: 100%;
}

.box {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 250px;
  height: 140px;
  background: #080808;
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
