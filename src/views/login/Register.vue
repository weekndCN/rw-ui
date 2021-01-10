<template>
  <v-row>
    <v-col cols="6">
      <v-expand-x-transition>
        <v-card height="400" color="red"></v-card></v-expand-x-transition
    ></v-col>
    <v-col cols="6">
      <v-expand-x-transition origin="center left">
        <v-card height="400" color="green"></v-card
      ></v-expand-x-transition>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "register",
};
</script>

<style>