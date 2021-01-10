<template>
  <v-row>
    <v-btn
      color="transparent"
      depressed
      height="100"
      width="100"
      @click.stop="showDialog()"
    >
      <div class="mt-6">
        <v-avatar small color="deep-orange">
          <v-icon small>mdi-plus</v-icon>
        </v-avatar>
        <p class="text-center overline">新增任务</p>
      </div>
    </v-btn>
    <div v-for="(job,i) in getjobs" :key="i">
    <v-btn
      color="transparent"
      depressed
      height="100"
      width="100"
    >
      <div class="mt-6">
        <v-avatar small :color="colors[i]">
          <v-icon small>mdi-plus</v-icon>
        </v-avatar>
        <p class="text-center overline">{{job.name}}</p>
      </div>
    </v-btn>
    </div>
    <v-dialog persistent v-model="showdialog" width="500">
      <add-job />
    </v-dialog>
  </v-row>
</template>

<script>
import AddJob from "./AddJob.vue";

export default {
  name: "job",
  components: {
    AddJob,
  },
  data: () => ({
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
  }),
  computed: {
    showdialog() {
      return this.$store.state.addjobdialog;
    },
    getjobs() {
        return this.$store.state.jobs;
    },
  },
  mounted() {
      this.getJobs()
  },
  methods: {
    showDialog() {
        this.$store.dispatch("showAddJobDialog");
    },
    getJobs() {
        this.$store.dispatch("fetchJobs")
    },
  },
};
</script>
