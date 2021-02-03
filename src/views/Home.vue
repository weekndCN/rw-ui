<template>
  <v-app>
      <home-app-bar />
      <home-app-navigator />
      <home-view />
  </v-app>
</template>

<script>
import HomeAppBar from "@/components/core/AppBar";
import HomeAppNavigator from "@/components/core/AppNavigator";
import HomeView from "@/components/core/View";

export default {
  name: "home",
  components: {
    HomeAppBar,
    HomeAppNavigator,
    HomeView,
  },
  data: () => ({}),
  methods: {
      
  },
};
</script>
