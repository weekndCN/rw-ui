<template>
  <v-container fluid>
    <v-row justify="center" align="center" no-gutters>
      <v-toolbar dense flat>
        <v-card-title class="body-1 text-uppercase font-weight-bold"
          ><v-icon class="mr-5">mdi-file-tree</v-icon> {{ jobName
          }}<v-chip color="green" dark small class="ml-5"
            ><v-icon small>mdi-check-circle</v-icon>success</v-chip
          ></v-card-title
        >
        <v-spacer> </v-spacer>
        <v-btn x-small class="mr-2" fab color="red" dark @click="delJob()" @click.stop="confirm = true"
          ><v-icon small>mdi-delete</v-icon></v-btn
        >
        <v-btn x-small fab color="cyan" dark class="mr-2"
          ><v-icon small>mdi-circle-edit-outline</v-icon></v-btn
        >
        <v-btn x-small fab color="green" dark @click="viewJob()"
          ><v-icon small>mdi-cube-scan</v-icon></v-btn
        >
      </v-toolbar>
    </v-row>
    <v-row v-show="viewjob">
      <v-col cols="12" class="mt-5">
        <v-scroll-x-transition>
          <v-list outlined rounded>
            <v-row>
              <v-subheader class="caption font-weight-bold"
                >任务名称: {{ job.name }}</v-subheader
              >
              <v-subheader class="caption font-weight-bold"
                >任务ID: {{ job.id }}</v-subheader
              >
              <v-subheader class="caption font-weight-bold"
                >任务描述: {{ job.desc }}</v-subheader
              >
              <v-subheader class="caption font-weight-bold"
                >任务内容: {{ job.action }}</v-subheader
              >
              <v-subheader class="caption font-weight-bold"
                >告警模式: {{ job.alert }}</v-subheader
              >
              <v-subheader class="caption font-weight-bold"
                >钉钉HOOK: {{ job.webhook }}</v-subheader
              >
            </v-row>
          </v-list>
        </v-scroll-x-transition>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-search"
              placeholder="检索历史job日志"
              class="caption"
              filled
              rounded
              dense
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-pagination
            color="indigo"
            circle
            v-model="page"
            :length="pageCount"
          ></v-pagination>

          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            loading
            hide-default-footer
            loading-text="数据加载中...."
            @page-count="pageCount = $event"
            :page.sync="page"
            :items-per-page="itemsPerPage"
          >
            <template v-slot:item.status="{ item }">
              <v-chip
                small
                :color="item.status == 'success' ? 'green' : 'red'"
                dark
                ><v-icon
                  small
                  class="mr-1"
                  v-text="
                    item.status == 'success'
                      ? 'mdi-check-circle'
                      : 'mdi-close-circle'
                  "
                ></v-icon
                >{{ item.status }}</v-chip
              >
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { headers, desserts } from "@/api/log";
import JobView from "./view";

export default {
  name: "log",
  components: {
    JobView,
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 9,
    headers: headers,
    desserts: desserts,
    search: "",
    viewjob: false,
  }),
  computed: {
    jobName() {
      return this.$route.params.job;
    },
    job() {
      console.log(this.$store.state.job);
      return this.$store.state.job;
    },
  },
  mounted() {
    this.fetchJob();
  },
  methods: {
    fetchLsogs: function () {},
    delJob: function () {
      const name = this.$route.params.job;
      this.$store.dispatch("deleteJob", name);
    },
    editJob: function () {},
    viewJob: function () {
      this.viewjob = !this.viewjob;
    },
    // get a job config
    fetchJob: function () {
      const name = this.$route.params.job;
      this.$store.dispatch("selectJob", name);
    },
  },
};
</script>

<style>
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  font-size: 0.5rem;
  height: 48px;
}
</style>