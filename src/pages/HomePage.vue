<template>
  <div class="text-effect home container-fluid" style="width: 100%; position: relative;">
    <div class="container">
      <div class="row mt-4" style="justify-content: center">
        <section class="hero-bg hero-content neon-hero neon hero-header" style="height:100%;">
          <div class="hero-text">
            <div class="title">
              Tyson Williams
            </div>
          </div>
        </section>
        <div class="gradient"></div>
        <div class="spotlight"></div>
      </div>
      <div class="row" style="margin-top: 50px;">
        <div class=" col-6 d-flex flex-column align-items-center">
          <div style="opacity: .75; width: fit-content; height: fit-content; position: relative;">
            <img
              src="../assets/img/me.png"
              style="width: auto; position: relative; height: 535px;"
            />
            <!-- <div style="position: absolute; width: 100%; height: 100%;
            background: radial-gradient(circle at bottom, rgba(223, 1, 171, 0.25) 15%, transparent); top: 0px;"
            ></div> -->
          </div>
        </div>
        <div class="col-6">
          <p class="neon-two">
            Full Stack Software Development
          </p>
          <div class="row" style="position: relative; width: 100%;">
            <button class="customButton" @click="navigateTo('/portfolio')">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              ENTER
            </button>
          </div>
        </div>
      </div>
      <div class="navbar" style="justify-content: center;">
        <button @click="navigateToGithub()" class="btn my-links mr-2">
          <i class="fab fa-github fa-3x"></i>
        </button>
        <button @click="navigateToLinkedIn()" class="btn my-links mr-5 ml-5">
          <i class="fab fa-linkedin fa-3x"></i>
        </button>
        <button @click="navigateToEmail()" class="btn my-links ml-2">
          <i class="fas fa-paper-plane fa-3x"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'Home',
  setup() {
    return {
      navigateToGithub() {
        window.open('https://github.com/TysonCWilliams')
      },
      navigateToLinkedIn() {
        window.open('https://www.linkedin.com/in/tysonchadwilliams/')
      },
      navigateToEmail() {
        window.open('mailto:tdub8@me.com')
      },
      navigateTo(route) {
        router.push(route)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@media only screen and (max-width: 300px) {

}

.btn:hover {opacity: 1; background-color: #0c0c0c; color: #83ff00;}

.navbar {
  // background-color: rgb(36, 35, 35);
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-bottom: 100px;
}

button {
  float: left;
  display: block;
  // color: #f2f2f2;
  text-align: center;
  // padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.my-links{
  background-color: #84ff00;
  color:#080808;
}

// NOTE Midnight effect
@import url(https://fonts.googleapis.com/css?family=Quicksand);

body { background-color:#000; }
.neon-two {
  text-align: center;
  margin: 10px auto;
  font-family: "Quicksand";
  font-size: 70px;
  text-transform: uppercase;
  color: #fff;
  -webkit-animation:pulse 1s ease-in-out infinite alternate;
  -webkit-backface-visibility: hidden;
}

// @-webkit-keyframes pulse {
//  from {
//     text-shadow: 0 0 10px #fff,
//                0 0 20px #fff,
//                0 0 30px #fff,
//                0 0 40px rgba(255, 255, 255, 0.2),
//                0 0 70px rgba(255, 255, 255, 0.2),
//                0 0 80px rgba(255, 255, 255, 0.2),
//                0 0 100px rgba(255, 255, 255, 0.2),
//                0 0 150px rgba(255, 255, 255, 0.2);
//   }
//   to {
//     text-shadow: 0 0 5px #fff,
//                0 0 10px #fff,
//                0 0 15px #fff,
//                0 0 20px rgba(255, 255, 255, 0.2),
//                0 0 35px rgba(255, 255, 255, 0.2),
//                0 0 40px rgba(255, 255, 255, 0.2),
//                0 0 50px rgba(255, 255, 255, 0.2),
//                0 0 75px rgba(255, 255, 255, 0.2);
//   }
// }

/* CSS3 Neon Text Effect */
.hero-bg.neon-hero .title {
    color: rgb(10, 248, 2);

}
.hero-bg.neon-hero .title:hover {
    color: #83ff00;
}

.hero-bg .title {
    font-size: 2.7em;
    letter-spacing: 0px;
    color: #ffffff;
}

.hero-bg .hero-content,
.hero-bg.hero-content {
    flex-direction: row
}
.neon-hero {
    font-size: 2.5em !important;
}
.neon-hero.hero-content>* {
    z-index: 1;
    position: relative
}
.hero-bg.neon-hero .title {
    opacity: 1;
    z-index: 1
}
.hero-bg.neon-hero:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 0
}

/* RESET AND BASIC STYLES */

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-weight: 400
}

.hero-bg {
    font-family: Source Sans Pro, Arial, sans-serif;
    overflow: hidden;
    position: relative;
    margin: 0;
    text-align: center;
    font-size: 16px;
    box-sizing: border-box
}
.hero-bg *,
.hero-bg:after,
.hero-bg:before {
    box-sizing: inherit
}
.hero-bg .title {
    color: hsla(0, 0%, 100%, .8);
    font-weight: 300
}

.neon {
    font-family: neon_tubesregular, sans-serif
}

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.customButton{
    position: relative;
    border: 0px;
    // display: inline-block;
    background: transparent;
    padding: 25px 30px;
    // margin: 40px 40px;
    color: #03e9f4;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    // overflow: hidden;
    margin-right: 20px;
    margin-top: 50px;

}
.customButton:hover{
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}
.customButton:nth-child(1){
    filter: hue-rotate(270deg);
}
.customButton:nth-child(2){
    filter: hue-rotate(110deg);
}
.customButton span{
    position: absolute;
    display: block;
}
.customButton span:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#03e9f4);
    animation: animate1 1s linear infinite;
}
@keyframes animate1{
    0%{
        left: -100%;
    }
    50%,100%{
        left: 100%;
    }
}
.customButton span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,#03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}
@keyframes animate2{
    0%{
        top: -100%;
    }
    50%,100%{
        top: 100%;
    }
}
.customButton span:nth-child(3){
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;
}
@keyframes animate3{
    0%{
        right: -100%;
    }
    50%,100%{
        right: 100%;
    }
}

.customButton span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}
@keyframes animate4{
    0%{
        bottom: -100%;
    }
    50%,100%{
        bottom: 100%;
    }
}

.home{
  height: 110vh;
  width: auto;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  background: black;
  // display: flex;
  min-height: 100vh;
  min-width: 100vh;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1610648888194-e410f3d6828b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
}

// Change the colors
$color1: rgb(9, 255, 0);
$color2: rgb(132, 0, 255);

.text-effect {
  overflow: hidden;
  position: relative;

  // The blend modes mute the colors, so let's bump them up
  filter: contrast(110%) brightness(190%);
}

.neon {
  position: relative;

  // Only works on a black background, sorry {BACKGROUND COLOR}
  // background: black;

  // The actual text inside the div is superfluous, only data-text matters. The text is added so you can easily edit the preview
  color: transparent;

  &::before,
  &::after {
    // Add two copies of the text on their own layer
    content: attr(data-text);

    // White, so we can paint them later
    // color: white;

    // And blur them to create the neon effect with the blend-mode below
    filter: blur(0.02em);

    position: absolute;
    top: 0; left: 0;
    pointer-events: none;
  }

  // Set the top copy to difference. This creates the knock-out effect with a bit of glow
  &::after {
    mix-blend-mode: difference;
  }
}

// Position our two effect layers
.gradient,
.spotlight {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  pointer-events: none;
  z-index: 10;
}

.gradient {
  background: linear-gradient(45deg, $color1, $color2);

  // Multiply mode will paint only the white text
  mix-blend-mode: multiply;
}

// .spotlight {
//   animation: light 5s infinite linear;

//   // These are the lights, color-dodge needs a black bg for optimum effect
//   background:
//     radial-gradient(circle, white, transparent 25%) 0 0 / 25% 25%,
//     radial-gradient(circle, white, black 25%) 50% 50% / 12.5% 12.5%;
//   top: -100%; left: -100%;

//   // Color dodge gives the lights that shimmer effect
//   mix-blend-mode: color-dodge;
// }

@keyframes light {
  100% {
    transform: translate3d(50%, 50%, 0);
  }
}

.neon {
  font: 500 100px 'Lato', sans-serif;
  text-transform: uppercase;
  // text-align: justify;
  justify-content: center;
  margin: 0;
  font-weight: bold;
  font: x-large;
  font-style: normal;
  text-shadow: #83ff00;
  box-shadow: transparent;

  &:focus { outline: none; border: 1px dotted rgb(255, 255, 255); }
}

</style>
