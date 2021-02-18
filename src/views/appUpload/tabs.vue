<template>
  <v-row no-gutters class="fill-height">
    <v-col cols="12">
      <v-card elevation="10" height="100%">
        <v-toolbar outlined>
          <v-toolbar-title class="heading-1">文件中心</v-toolbar-title>
          <template v-slot:extension>
            <v-tabs
              v-model="tabs"
              slider-color="deep-orange"
              active-class="font-weight-bold"
              color="lighten-4"
              slider-size="4"
            >
              <v-tab class="overline"> 上传文件 </v-tab>
              <v-tab class="overline" @click="getTree()"> 下载文件 </v-tab>
              <!--<v-tab class="overline"> 文件库 </v-tab>-->
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
          <v-tab-item>
            <tab-file />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
import TabDownload from "./download";
import TabUpload from "./upload";
import TabFile from "./files";

export default {
  name: "tabs",
  components: {
    TabDownload,
    TabUpload,
    TabFile,
  },
  data: () => ({
    tabs: null,
  }),
  methods: {
    getTree: function () {
      this.$store.dispatch("getTree");
    },
  },
};
</script>


<style>
</style>