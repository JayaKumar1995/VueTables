<template>
  <v-app>
    <v-app-bar app color="primary" dark>Costing</v-app-bar>
    <v-main>
      <Report v-bind:name="name"></Report>
    </v-main>
  </v-app>
</template>

<script>
import Report from "./components/Report/Reports";

export default {
  components: {
    Report
  },
  data: function() {
    return {
      name: "App"
    };
  }
};
</script>
