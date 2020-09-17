<template>
  <div id="app">
    <div class="logo-central">
      <img
        alt="pokemon-logo"
        style="width: 30%; padding: 0.5%; margin-top: 5%;"
        src="../assets/icons/pokemon-logo.png"
      />
    </div>
    <div class="card-constainer">
      <div v-for="item of pokemons" :key="item.id" style="width: 10%">
        <img alt="pokemon-logo" :src="item.imageUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../services/axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      pokemons: [],
    };
  },
  async created() {
    this.getPokemons();
  },
  methods: {
    async getPokemons() {
      try {
        const resp = await axios.get("/cards");
        this.pokemons = resp.data.cards;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.logo-central {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.card-constainer {
  display: block;
  flex-direction: row;
  justify-content: center;
}
</style>
