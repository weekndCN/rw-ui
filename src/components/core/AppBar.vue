<template>
  <v-app-bar absolute app flat color="transparent">
    <v-spacer></v-spacer>
    <v-btn icon @click="changeMod()">
      <v-icon
        v-text="$vuetify.theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-6'"
        :color="$vuetify.theme.dark ? 'purple darken-2' : 'black'"
      ></v-icon>
    </v-btn>

    <v-menu offset-y v-model="menu1" transition="slide-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon class="mr-3">
          <v-icon>mdi-blur-linear</v-icon>
        </v-btn>
      </template>
      <home-apps />
    </v-menu>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      transition="scroll-y-reverse-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-avatar size="36" v-on="on">
          <img
            src="https://avatars0.githubusercontent.com/u/29080380?s=460&amp;u=8acc9973cc9614290d82de1ff6d182af02b09a69&amp;v=4"
            alt="John"
          />
        </v-avatar>
      </template>
      <home-profit />
    </v-menu>
  </v-app-bar>
</template>

<script>
import HomeProfit from "@/views/Profit";
import HomeApps from "@/views/apps/Apps";

export default {
  name: "HomeAppBar",
  components: {
    HomeProfit,
    HomeApps,
  },
  data: () => ({
    fav: true,
    menu: false,
    menu1: false,
    message: false,
    hints: true,
  }),
  computed: {},
  methods: {
    changeMod() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.dark = false;
      } else {
        this.$vuetify.theme.dark = true;
      }
    },
  },
};
</script>