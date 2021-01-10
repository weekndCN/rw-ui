<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="8">
        <p class="headline text-center">Jobs Galaxy</p>
        <v-card flat color="transparent">
          <v-card-text class="d-flex">
            <v-autocomplete
              filled
              multiple
              hide-details
              chips
              v-model="model"
              :items="jobs"
              :search-input.sync="search"
              hide-no-data
              return-object
              :loading="isLoading"
              class="caption"
              item-text="name"
              item-value="id"
              item-color="green darken-1"
              placeholder="检索jobs"
              prepend-inner-icon="mdi-database-search"
              clearable
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  small
                  @click:close="remove(item)"
                  color="green darken-1"
                  dark
                >
                  <v-icon small>mdi-check-circle</v-icon>{{ data.item.name }}
                </v-chip>
              </template>
            </v-autocomplete>
          </v-card-text>
          <v-expand-transition>
            <v-list two-line v-if="model" dense>
              <v-list-item-group active-class="green--text">
                <template v-for="job in model">
                  <v-list-item :key="job.id" :to="'/cron/logs/' + job.name">
                    <template v-slot:default="{ active, toggle }">
                      <v-list-item-content>
                        <v-list-item-title class="overline">{{
                          job.name
                        }}</v-list-item-title>
                        <v-list-item-subtitle class="text--primary caption">{{
                          job.desc
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle class="caption">{{
                          job.scheduler
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-list-item-action-text class="caption"
                          ><strong>last time:</strong>5
                          min</v-list-item-action-text
                        >
                        <div class="text-center">
                          <v-btn icon
                            ><v-icon small color="red"
                              >mdi-cancel</v-icon
                            ></v-btn
                          >
                          <v-btn icon @click="restartjob(job)"
                            ><v-icon small color="green"
                              >mdi-restart</v-icon
                            ></v-btn
                          >
                        </div>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { jobs } from "@/api/cron";

export default {
  name: "cron",
  data: () => ({
    descriptionLimit: 60,
    isLoading: false,
    model: null,
    search: null,
    isUpdating: false,
    jobs: jobs,
    fab: true,
  }),
  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },
  methods: {
    remove: function (item) {
      console.log(item);
      const index = this.jobs.indexOf(item.name);
      if (index > 0) {
        this.jobs.splice(index, 1);
      }
    },
    restartjob: function (item) {
      console.log("item:", item);
    },
  },
};
</script>

<style>
.v-list-item__title {
  align-self: center;
  font-size: 0.8rem;
}
</style>