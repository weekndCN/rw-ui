<template>
  <v-dialog
    fullscreen
    v-model="logDiag"
    persistent
    transition="dialog-bottom-transition"
  >
    <v-card elevation="10" height="100%">
      <v-row no-gutters>
        <v-col cols="12">
          <v-toolbar fixed :color="$vuetify.theme.dark ? '#272727' : '#f5f5f5'">
            <v-btn icon @click="logDiag = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title class="overline">logs</v-toolbar-title>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12">
          <v-tabs
            vertical
            slider-color="deep-orange"
            active-class="font-weight-bold"
            color="lighten-4"
            slider-size="4"
            :background-color="$vuetify.theme.dark ? '#272727' : '#f5f5f5'"
          >
            <v-tab class="overline">
              <v-icon left>fa-glasses</v-icon>
              容器日志
            </v-tab>
            <v-tab class="overline">
              <v-icon left>mdi-access-point</v-icon>
              资源状态
            </v-tab>
            <v-tab-item grow>
              <v-card
                tile
                outlined
                elevation="12"
                max-height="700"
                class="overflow-y-auto"
              >
                <v-card-text>
                  <div class="caption" id="list"></div>
                </v-card-text>
              </v-card>
            </v-tab-item>
            
          </v-tabs>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import { instance } from "@/actions/config";

export default {
  name: "log",
  data: () => ({
    lines: "",
    logDiag: true,
    evtSource: null,
  }),
  props: {
    id: {
      type: String,
    },
  },
  created() {
    this.initalStream();
  },
  destroyed() {
    this.closeStream(); //离开路由之后断开stream连接
  },
  methods: {
    initalStream: function () {
      const id = this.id;
      const path = `${instance}/docker/tail/${id}`;
      this.evtSource = new EventSource(path);
      this.evtSource.onmessage = this.onMessage;
      this.evtSource.close = this.closeStream;
      this.evtSource.onerror = this.onError;
      this.evtSource.onopen = this.onOpen;
    },
    onOpen: function () {
      console.log("stream connected!");
    },
    onMessage: function (event) {
      const newElement = document.createElement("p");
      const eventList = document.getElementById("list");
      newElement.style.cssText = "margin-bottom: 1px !important;";
      newElement.innerHTML = event.data;
      eventList.appendChild(newElement);
    },
    onError: function (err) {
      console.log("stream error!");
      if (err.data === "eof") {
        this.evtSource.close();
      }
    },
    closeStream: function () {
      console.log("Connection closed");
      this.evtSource.close();
    },
  },
};
</script>

<style>
</style>