<template>
  <nav>
    <div id="title">
      <router-link to="/">
        <unicon name="angle-left-b" fill="white"
      /></router-link>
      |
      <h1>Généalogie d'Hébrail</h1>
    </div>
    <div>
      <unicon name="search" fill="white" />
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding: 1.5em;
  background-color: var(--main-blue);
  color: var(--bg-color);
  display: flex;
  justify-content: space-between;
}

#title {
  display: flex;
  flex-direction: row;
}

#title > element {
  margin: auto 0.5em;
}

h1 {
  margin: 0;
}
</style>

<script>
export default {
  name: "NavBar",
};
</script>
