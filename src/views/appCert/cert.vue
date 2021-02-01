<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col>
        <v-card elevation="12" rounded="xl">
          <v-toolbar color="deep-indigo">
            <v-toolbar-title class="subtitle-1">HTTPS健康检测</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
              rounded
              dense
              filled
              hide-details
              v-model="search"
              prepend-inner-icon="mdi-shield-search"
            ></v-text-field>
            <v-btn @click="help = !help" icon>
              <v-icon color="primary">mdi-help-circle-outline</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-list v-if="certs != ''" shaped>
              <template v-for="(cert, name, index) in filteredItems">
                <v-list-item
                  two-line
                  :key="index"
                  active-class="font-weight-bold"
                  :input-value="cert.expired_at <= 48 ? index : ''"
                >
                  <v-list-item-avatar
                    class="white--text"
                    v-if="cert.expired_at > 48"
                    color="teal"
                  >
                    {{ parseInt(cert.expired_at / 24) }}
                  </v-list-item-avatar>
                  <v-list-item-avatar
                    v-else
                    color="deep-orange"
                    class="white--text"
                  >
                    {{ cert.expired_at == "" ? "00" : cert.expired_at }}
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      ><v-icon color="green" left
                        >mdi-certificate-outline</v-icon
                      >{{ name }}</v-list-item-title
                    >
                    <v-list-item-subtitle class="caption">
                      <v-row no-gutters>
                        <v-col cols="12" md="4">
                          <v-chip small class="mr-3">issuer: </v-chip
                          >{{ cert.issuer }}
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-chip small class="mr-3">创建时间: </v-chip
                          >{{ cert.create_at }}
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-chip small class="mr-3">结束时间: </v-chip
                          >{{ cert.end_at }}
                        </v-col>
                      </v-row>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text
                      v-text="cert.check_at"
                    ></v-list-item-action-text>
                    <v-btn-toggle dense rounded>
                      <v-btn
                        small
                        :color="cert.expired_at < 48 ? 'red' : ''"
                        class="caption"
                        >Bad</v-btn
                      >
                      <v-btn
                        small
                        :color="cert.expired_at > 48 ? 'green' : ''"
                        class="caption"
                        >OK</v-btn
                      >
                    </v-btn-toggle>
                  </v-list-item-action>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-dialog v-model="help" max-width="600">
        <cert-desc />
      </v-dialog>
    </v-row>
  </v-container>
</template>


<script>
import { instance, header } from "@/actions/config";
import CertDesc from "./desc";

export default {
  name: "cert",
  components: {
    CertDesc,
  },
  data: () => ({
    certs: {},
    search: "",
    expiredList: [],
    help: false,
  }),
  mounted() {
    this.certsinfo();
  },
  computed: {
    filteredItems() {
      if (!this.search) return this.certs;
      const newObj = {};
      for (let key in this.certs) {
        if (key.includes(this.search)) {
          newObj[key] = this.certs[key];
        }
      }
      return newObj;
    },
  },
  methods: {
    certsinfo: async function () {
      const req = await fetch(`${instance}/list`, {
        headers: new Headers({}),
        method: "GET",
      }).catch((error) => console.error("Error", error));
      const res = await req.json();
      if (req.status < 300) {
        console.log("load sucess");
        this.certs = res;
      } else {
        console.log("load fail");
      }
    },
    // expired funcation
    expired: function (e) {
      if (e > 48) {
        return parseInt(e / 24) + " Days";
      } else {
        return e + " Hours";
      }
    },
  },
};
</script>

<style>
</style>