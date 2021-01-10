<template>
  <v-row>
    <v-col cols="6">
      <v-scale-transition hide-on-leave>
        <v-card height="400" color="green"></v-card> </v-scale-transition
    ></v-col>
    <v-col cols="6">
      <v-scale-transition hide-on-leave>
        <v-card height="400" color="red"></v-card></v-scale-transition
    ></v-col>
  </v-row>
</template>

<script>
export default {
  name: "signin",
  login: true,
};
</script>

<style>
</style>