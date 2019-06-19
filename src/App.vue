<template>
  <div id="app">
    <div id="container">
      <app-header></app-header>
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="col-sm-10 col-md-4">
        <router-view name="ordingGuide"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="delivery"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="history"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Admin from "./components/Admin.vue";
import Login from "./components/Login.vue";
import Menu from "./components/Menu.vue";
import Register from "./components/Register.vue";
import About from "./components/about/About.vue";

export default {
  name: "App",
  components: {
    appHeader: Header,
    Home,
    Admin,
    Login,
    Menu,
    Register,
    About
  }
};
</script>

<style>
</style>
