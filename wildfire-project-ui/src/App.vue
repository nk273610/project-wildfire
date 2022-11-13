<template>
  <v-app>
    <v-main>
      <div class="mx-6-rem pb-0 header">
        <AppBar />
      </div>
      <div class="app-body">
        <div class="main-content">
          <div class="main-content-inner">
            <v-subheader class = "text_content">WildFire Data</v-subheader>
            <v-spacer class="mt-8"></v-spacer>
            <router-view />
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "./views/AppBar.vue";

export default Vue.extend({
  name: "App",
  components: { AppBar }
});
</script>

<style scoped>
.text_content {
  justify-content: center;
  font-size: xxx-large;
  -webkit-text-fill-color: purple;
}
.app-body {
  display: flex;
  padding-top: 3rem;
  height: 100%;
  width: 100%;
}

.main-content {
  height: 100%;
  flex-grow: 1;
}

.main-content-inner {
  padding: 2rem;
}
</style>
