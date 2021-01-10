<template>
  <v-app>
      <home-app-bar />
      <home-view />
  </v-app>
</template>

<script>
import HomeAppBar from "@/components/core/AppBar";
import HomeView from "@/components/core/View";

export default {
  name: "home",
  components: {
    HomeAppBar,
    HomeView,
  },
  data: () => ({}),
  methods: {
      
  },
};
</script>
