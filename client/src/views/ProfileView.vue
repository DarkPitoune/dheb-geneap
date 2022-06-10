<template>
  <div class="background">
    <div class="frame">
      Yo
      <p>Profile value is {{ this.profile }}</p>
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
.frame {
  background-color: var(--bg-color);
  width: 80%;
  margin: 1.5em auto;
  border-radius: 0.5em;
  box-shadow: 0 0 0.5em #dddddd;
}
</style>
