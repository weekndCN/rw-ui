<template>
  <v-container fluid>
    <v-row justify="center" align="center" no-gutters>
      <v-toolbar dense flat>
        <v-card-title class="body-1 text-uppercase font-weight-bold"
          ><v-icon class="mr-5">mdi-file-tree</v-icon> {{ job
          }}<v-chip color="green" dark small class="ml-5"
            ><v-icon small>mdi-check-circle</v-icon>success</v-chip
          ></v-card-title
        >
        <v-spacer> </v-spacer>

        <v-menu
          transition="slide-x-transition"
          bottom
          right
          offset-y
          rounded
          close-on-content-click
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              x-small
              rounded
              color="indigo"
              fab
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon small>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <job-view />
        </v-menu>
      </v-toolbar>
    </v-row>
    <v-row>
      <v-col cols="12" class="mt-5">
        <v-list outlined rounded>
          <v-list-item> </v-list-item>
        </v-list>
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
  }),
  computed: {
    job() {
      return this.$route.params.job;
    },
  },
  methods: {
    fetchJobs: function (name) {},
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