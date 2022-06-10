<template>
  <div class="background">
    <div class="frame">
      <h1>{{profile.first_name}} {{profile.last_name}}</h1>
      <p>Né le {{profile.birth_date}}</p>
      <p>Mort le {{profile.death_date}}</p>
      <p>{{profile.biography}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const fetchProfile = async function() {
  axios.get(process.env.VUE_APP_API_URL + "profile/1").then((response) => {
    this.profile = response.data;
  });
};

export default {
  name: "ProfileView",
  data() {
    return {
      profile: {},
    };
  },
  methods: {
    fetchProfile,
  },
  mounted() {
    this.fetchProfile();
  },
};
</script>

<style scoped>

h1 {
  margin: 0;
}
.frame {
  background-color: var(--bg-color);
  width: 80%;
  margin: 1.5em auto;
  padding: 1em;
  border-radius: 0.8em;
  box-shadow: 0 0 0.5em #dddddd;
}
</style>
