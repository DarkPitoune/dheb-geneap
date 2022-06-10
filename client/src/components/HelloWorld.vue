<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Cette page est en travaux, revenez plus tard 😁</p>
    <p>
      Naviguez vers une url comme
      <router-link to="/profile/1"> /profile/1</router-link> pour voir des
      trucs
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
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
</style>
