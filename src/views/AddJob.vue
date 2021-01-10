<template>
  <v-card width="500">
    <v-container>
      <v-row>
        <v-card-text>
          <strong class="title">新增定时任务</strong>
        </v-card-text>
      </v-row>
      <v-row>
        <v-col>
          <p class="caption mt-2">Job名称</p>
          <v-text-field
            hide-details
            dense
            filled
            class="caption"
            background-color="darken-4"
            v-model="jobName"
          ></v-text-field>
          <p class="caption mt-4">Quarts</p>
          <v-text-field
            hide-details
            dense
            filled
            class="caption"
            v-model="jobQuart"
          ></v-text-field>
          <p class="caption mt-4">Job描述</p>
          <v-text-field
            hide-details
            dense
            filled
            class="caption"
            v-model="jobDesc"
            >></v-text-field
          >
          <p class="caption mt-4">API接口请求</p>
          <v-textarea
            v-model="jobTask"
            hide-details
            dense
            filled
            class="caption"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn small class="mt-5" outlined @click="closejob()">取消 </v-btn>
      <v-btn
        small
        class="mt-5"
        dark
        depressed
        color="deep-orange"
        @click="addjob()"
        >确定</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "addjob",
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    addjobDialog() {
      return this.$store.state.addjobdialog;
    },
  },
  data: () => ({
    jobName: "",
    jobQuart: "",
    jobDesc: "",
    jobTask: "",
  }),
  methods: {
    closejob() {
      this.$store.dispatch("closeAddJobDialog");
    },
    addjob() {
      // close dialog
      this.$store.dispatch("addJob", {
        Name: this.jobName,
        Scheduler: this.jobQuart,
        Desc: this.jobDesc,
        Actions: this.jobTask,
      });
      // close dialog
      this.$store.dispatch("closeAddJobDialog");
      // fetch jobs again
      this.$store.dispatch("fetchJobs");
    },
  },
};
</script>

<style>
</style>