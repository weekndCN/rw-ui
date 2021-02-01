<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" v-for="(item, index) in appLabs" :key="index"
        ><v-card elevation="10" rounded="xl"
          ><v-list
            ><v-list-item three-line
              ><v-list-item-avatar
                ><v-icon
                  x-large
                  :color="item.color"
                  v-text="item.icon"
                ></v-icon></v-list-item-avatar
              ><v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle
                  class="caption mt-1"
                  v-text="item.desc"
                ></v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-btn
                    outlined
                    rounded
                    small
                    class="caption mt-3 mr-3"
                    :color="item.color"
                    :target="item.url"
                    :href="item.url"
                    >Discover {{ item.name }} Services
                    <v-icon small>mdi-arrow-right</v-icon></v-btn
                  >
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item></v-list
          ></v-card
        ></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import { appLabs } from "@/api/labs";
const gradients = ["#f72047", "#ffd200", "#1feaea"];

export default {
  name: "labs",
  data: () => ({
    appLabs: appLabs,
    gradients: gradients,
  }),
};
</script>

<style>
.fontcolor {
  background-image: linear-gradient(to bottom, #f72047, #ffd200, #1feaea);
  -webkit-background-clip: text;
  font-size: 32px;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.1666666667em !important;
}
</style>