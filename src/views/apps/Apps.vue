<template>
  <v-card max-height="700" width="300">
    <v-container fluid>
      <v-row class="mb-3">
        <v-col cols="4" v-for="(app, i) in apps" :key="i">
          <v-btn
            color="transparent"
            depressed
            height="70"
            width="70"
            :href="app.href"
            :target="app.href"
          >
            <div>
              <v-avatar class="mt-3">
                <v-icon v-text="app.icon" :color="app.color"></v-icon>
              </v-avatar>
              <p class="text-center overline">{{ app.name }}</p>
            </div>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row align="center" justify="center">
        <v-col cols="8">
          <v-btn
            dense
            outlined
            class="overline mt-3"
            rounded
            block
            color="orange"
            >显示更多的应用</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script>
import {menu} from './app'

export default {
  name: "apps",
  data: () => ({
    apps: menu,
  }),
  methods: {},
};
</script>


<style>
</style>