<template>
  <v-app>
    <router-view />
    <!--
      global snacker bar
    -->
    <v-snackbar
      v-model="snack.show"
      :timeout="snack.timeout"
      absolute
      :color="snack.color"
      top
    >
      <div class="text-center capton">
      {{ snack.text }}
      </div>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  computed: {
    snack() {
      return this.$store.state.snack;
    },
  },
};
</script>
