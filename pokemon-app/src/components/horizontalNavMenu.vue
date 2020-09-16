<template>
  <div class="header">
    <img alt="pokemon-logo" style="width: 6%" src="../assets/icons/pokemon-logo.png" />
  </div>
</template>

<script>
export default {
  name: "HorizontalNavMenu",
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.header {
  display: flex;
  flex-direction: row;
  background-color: #3166ae;
  /* height: 20%; */
  padding: 1%;
  border-radius: 8px;
}
</style>
