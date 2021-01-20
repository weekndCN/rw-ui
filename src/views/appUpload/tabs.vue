<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <v-toolbar flat>
          <v-toolbar-title class="header text-uppercase font-weight-bold text--indigo"
            >Cloud File</v-toolbar-title
          >
          <template v-slot:extension>
            <v-tabs v-model="tabs" slider-color="orange" active-class="font-weight-bold" color="lighten-4">
              <v-tab class="caption">
                <v-icon left>mdi-cloud-upload</v-icon>
                Upload
              </v-tab>
              <v-tab class="caption">
                <v-icon left>mdi-cloud-download</v-icon>
                download
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>
        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <tab-upload />
          </v-tab-item>
          <v-tab-item>
            <tab-download />
          </v-tab-item>
        </v-tabs-items>
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