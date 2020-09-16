<template>
  <div id="app">
    <span>aushdaushduashd</span>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import axios from "../services/axios";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  async created() {},
  methods: {
    async getPokemons() {
      try {
        const resp = axios.get("/cards");
        console.log(resp);
        // this.pokemons = resp.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
