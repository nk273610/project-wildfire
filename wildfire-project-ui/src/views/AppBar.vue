<template>
  <v-app-bar
  fixed
    style="background-color: white; height: 4rem"
  >
    <div>
        <a href="/">
          <img
            src="../../static/images/Telus-Logo.jpg"
            width="180"
            class="logo"
            style="float: left; margin-top: 0.188rem; margin-right: 0.313rem;"
          />
        </a>
    </div>
  </v-app-bar>

</template>


<script>
export default {
  name: "AppBar",
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  },
};
</script>

<style scoped>
.logo {
  padding-left: 0.5rem;
  margin-bottom: 1rem;
}
</style>