<template>
  <v-row no-gutters class="fill-height">
    <v-col cols="12">
      <v-card elevation="10" height="100%">
        <v-toolbar outlined>
          <v-toolbar-title
            ><v-icon left>fab fa-docker</v-icon>容器服务</v-toolbar-title
          >
          <template v-slot:extension>
            <v-tabs
              v-model="tabs"
              slider-color="deep-orange"
              active-class="font-weight-bold"
              color="lighten-4"
              slider-size="4"
            >
              <v-tab class="overline"> 镜像检索 </v-tab>
              <!--<v-tab class="overline" @click="getTree()"> 下载文件 </v-tab>-->
              <v-tab class="overline"> 容器服务 </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>
        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <docker-container />
          </v-tab-item>
          <!--
          <v-tab-item>
            <tab-download />
          </v-tab-item>
          -->
          <v-tab-item>
            <docker-container />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
import DockerContainer from "./container";
export default {
  name: "docker",
  components: {
    DockerContainer,
  },
  data: () => ({
    tabs: null,
  }),
};
</script>



<style>
</style>