<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-row>
          <v-text-field
            rounded
            dense
            outlined
            placeholder="输入Job名称检索Job"
            class="overline"
            prepend-inner-icon="mdi-magnify"
            append-icon="mdi-microphone"
            style="margin-top: -56px"
          >
          </v-text-field>
        </v-row>
        <!--
        <home-jobs />
        -->
      </v-col>
    </v-row>
    <v-fab-transition>
      <v-btn rounded small depressed bottom right fixed @click="bgimg()">
        <v-icon small class="mr-2">mdi-pencil</v-icon>自定义
      </v-btn>
    </v-fab-transition>
    <v-dialog v-model="dialog" width="800" height="600">
      <home-settings />
    </v-dialog>
  </v-container>
</template>


<script>
import HomeJobs from "@/views/Jobs";
import HomeSettings from "@/views/Settings";
import HomeProfit from "@/views/Profit";

export default {
  name: "Galaxy",
  components: {
    HomeJobs,
    HomeSettings,
    HomeProfit,
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    bgimg: function () {
      this.dialog = true;
      this.$store.dispatch("fetchBgImg");
    },
  },
};
</script>