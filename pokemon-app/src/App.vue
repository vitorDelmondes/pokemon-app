<template>
  <div id="app">
    <HorizontalNavMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import HorizontalNavMenu from "./components/horizontalNavMenu.vue";

export default {
  name: "App",
  components: {
    HorizontalNavMenu,
  },
};
</script>
