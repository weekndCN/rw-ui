<template>
  <v-container fluid fill-height>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card rounded="xl" elevation="10">
          <v-toolbar dark>
            <v-tabs
              v-model="tabs"
              slider-color="deep-orange"
              active-class="font-weight-bold"
              color="lighten-4"
            >
              <v-tab class="overline"> upload </v-tab>
              <v-tab class="overline"> download </v-tab>
            </v-tabs>
          </v-toolbar>
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <tab-upload />
            </v-tab-item>
            <v-tab-item>
              <tab-download />
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import TabDownload from "./download";
import TabUpload from "./upload";

export default {
  name: "tabs",
  components: {
    TabDownload,
    TabUpload,
  },
  data: () => ({
    tabs: null,
  }),
};
</script>


<style>
</style>