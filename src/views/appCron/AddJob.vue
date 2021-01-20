<template>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-card-text>
          <v-row no-gutters justify="center" align="center">
            <v-col>
              <strong class="subtitle">新增定时任务</strong>
              <div class="caption mt-4 ml-1 font-weight-bold">Job名称</div>
              <v-text-field
                dense
                filled
                rounded
                hide-details="auto"
                class="caption"
                v-model="jobName"
                :rules="emptyRules"
              ></v-text-field>
              <div class="caption mt-4 ml-1 font-weight-bold">
                <v-icon small>mdi-task</v-icon>Quarts
              </div>
              <v-text-field
                dense
                filled
                rounded
                hide-details="auto"
                class="caption"
                :rules="emptyRules"
                v-model="jobQuart"
              ></v-text-field>
              <div class="caption mt-4 ml-1 font-weight-bold">Job描述</div>
              <v-text-field
                hide-details="auto"
                dense
                filled
                rounded
                class="caption"
                v-model="jobDesc"
                :rules="emptyRules"
                >></v-text-field
              >
              <div class="caption mt-4 ml-1 font-weight-bold">API接口请求</div>
              <v-textarea
                v-model="jobTask"
                hide-details="auto"
                dense
                filled
                rounded
                class="caption"
                rows="1"
                :rules="emptyRules"
                auto-grow
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row gutters>
            <v-col>
              <v-switch color="amber darken-4" v-model="dingtalk" hide-details>
                <template v-slot:label>
                  <p class="caption mt-4 ml-1 font-weight-bold">开启告警</p>
                </template>
              </v-switch>
            </v-col>
          </v-row>
          <v-row no-gutters v-show="dingtalk">
            <v-col>
              <div class="caption mt-4 ml-1 font-weight-bold">告警推送</div>
              <v-radio-group row v-model="alertMod" class="caption">
                <v-radio
                  v-for="(item, n) in alertMods"
                  :key="n"
                  :value="item"
                  color="success"
                  class="caption"
                >
                  <template v-slot:label>
                    <p class="caption mt-4 ml-1">
                      {{ item }}
                    </p></template
                  >
                </v-radio>
              </v-radio-group>
              <div class="caption font-weight-bold">Dingtalk Token</div>
              <v-text-field
                filled
                dense
                hide-details="auto"
                rounded
                v-model="token"
                class="caption"
                :error-messages="err"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          small
          outlined
          rounded
          @click="closejob()"
          @click.stop="reset()"
          ><v-icon class="mr-1" small>mdi-close-circle-outline</v-icon>取消
        </v-btn>
        <v-btn
          small
          class="ml-2 mr-2"
          dark
          rounded
          color="purple darken-2"
          @click="addjob()"
          ><v-icon small class="mr-1">mdi-check-circle</v-icon>确定</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "add",
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
    alertMods: ["Always", "Failed", "Success", "Never"],
    jobName: "",
    jobQuart: "",
    jobDesc: "",
    jobTask: "",
    dingtalk: false,
    token: "",
    err: "",
    valid: true,
    alertMod: "",
    emptyRules: [(v) => !!v || "不允许为空"],
  }),
  methods: {
    closejob() {
      this.$store.dispatch("closeAddJobDialog");
    },
    addjob() {
      console.log("mod:", this.alertMod);
      // check dingtalk mode open
      const valid = this.$refs.form.validate();
      if (valid) {
        console.log("add job");
        this.$store.dispatch("addJob", {
          Name: this.jobName,
          Scheduler: this.jobQuart,
          Desc: this.jobDesc,
          Action: this.jobTask,
          Alert: this.alertMod,
          Webhook: this.token,
        });
        // reset field
        this.reset();
        // close dialog
        this.$store.dispatch("closeAddJobDialog");
        // fetch jobs again
        this.$store.dispatch("fetchJobs");
      }
    },
    // return bool valid the form
    validate() {},
    // reset all value
    reset() {
      this.$refs.form.reset();
    },
    // reset all all validate
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
</style>