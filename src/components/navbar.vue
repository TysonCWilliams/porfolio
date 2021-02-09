<template>
  <nav class="navbar navbar-expand-lg custom-color">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <!-- <img
          alt="logo"
          src="../assets/img/cw-logo.png"
          height="45"
        /> -->
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <i class="fas fa-spinner fa-pulse fa-2x mr-3 custom-icon"></i>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link custom-font mr-3 ml-3">
            /Home/
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link custom-font mr-3">
            /About/
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Resume' }" class="nav-link custom-font">
            /Resume/
          </router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <div class="dropdown">
          <div
            class="dropdown-toggle"
            @click="state.dropOpen = !state.dropOpen"
          >
          </div>
          <div
            class="dropdown-menu p-0 list-group w-100"
            :class="{ show: state.dropOpen }"
            @click="state.dropOpen = false"
          >
          </div>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');

.custom-font{
  font-family: 'Rajdhani', sans-serif;
  font-weight: bolder;
  font: bolder;
  font-size: large;
  text-decoration: underline;
  text-decoration-color: rgba(192, 192, 192, 0.705);
}

.custom-icon{
  color: silver;
}

.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
  color: rgb(15, 247, 7);
}
/* .nav-item .nav-link.router-link-exact-active{
  color: var(--light);
} */

.custom-color{
  background-color: rgb(0, 0, 0);
  border: thin;
  border-color: rgba(192, 192, 192, 0.329);
  border-style: solid;
  position: sticky;
}
</style>
