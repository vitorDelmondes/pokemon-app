<template>
  <div id="app">
    <HorizontalNavMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import HorizontalNavMenu from "./components/horizontalNavMenu.vue";
import './css/global.css';

export default {
  name: "App",
  components: {
    HorizontalNavMenu,
  },
};
</script>

<style>
#app {
  margin: 0% !important;  
}
</style>
