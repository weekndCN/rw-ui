<template>
  <v-row class="fill-height" no-gutters>
    <v-col cols="12">
      <v-data-table
        v-if="containers.length > 0"
        :headers="headers"
        :items="containers"
        :items-per-page="10"
        hide-default-header
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar outlined flat>
            <v-text-field
              filled
              hide-details
              dense
              prepend-inner-icon="fa-search"
              append-outer-icon="mdi-filter-variant"
            ></v-text-field>
          </v-toolbar>
        </template>
        <template v-slot:item.status="{ item }">
          <v-icon :color="item.state == 'running' ? 'green' : ''"
            >fa-heartbeat</v-icon
          >
        </template>
        <template v-slot:item.container="{ item }">
          <v-list-item-content>
            <v-list-item-subtitle class="caption"
              ><strong>{{ item.names[0].substring(1) }}</strong>
              {{ item.image }}
            </v-list-item-subtitle>
            <div>
              <v-list-item-subtitle
                class="caption"
                v-if="item.state == 'running'"
                >RUNNING
                {{
                  item.ports.length > 0
                    ? "PrivatePort:" + item.ports[0].PrivatePort
                    : ""
                }}
                {{
                  item.ports.length > 0
                    ? "PublicPort:" + item.ports[0].PublicPort
                    : ""
                }}</v-list-item-subtitle
              >
              <v-list-item-subtitle class="caption grey--text" v-else
                >{{ item.status }}
                {{
                  item.ports.length > 0
                    ? "PrivatePort:" + item.ports[0].PrivatePort
                    : ""
                }}
                {{
                  item.ports.length > 0
                    ? "PublicPort:" + item.ports[0].PublicPort
                    : ""
                }}</v-list-item-subtitle
              >
            </div>
          </v-list-item-content>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn
            icon
            class="mr-2"
            @click="startContainer(item.ID)"
            v-if="item.state != 'running'"
            ><v-icon>far fa-play-circle</v-icon></v-btn
          >
          <v-btn icon class="mr-2" v-else @click="stopContainer(item.ID)">
            <v-icon>fa-stop-circle</v-icon>
          </v-btn>
          <v-btn icon class="mr-2" @click="logContainer(item.ID)"
            ><v-icon>fa-dot-circle</v-icon></v-btn
          >
          <v-btn icon class="mr-2"><v-icon>fa-ban</v-icon></v-btn>
        </template>
      </v-data-table>
      <!-- log console terminal -->
      <v-dialog
        v-model="logDiag"
        persistent
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="logDiag = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>logs</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="logDiag = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <pre> {{ lines }}</pre>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>



<script>
import { instance } from "@/actions/config";

export default {
  data() {
    return {
      search: "",
      calories: "",
      lines: [],
      logDiag: false,
      headers: [
        {
          text: "状态",
          align: "center",
          sortable: false,
          value: "status",
        },
        {
          text: "container",
          value: "container",
        },
        {
          text: "操作",
          align: "end",
          sortable: false,
          value: "actions",
        },
      ],
      containers: [{}],
    };
  },
  computed: {},
  created() {
    this.getContainers();
  },
  methods: {
    filterOnlyCapsText(value, search, item) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
    getContainers: async function () {
      const req = await fetch(`${instance}/docker/list`, {
        method: "GET",
        mode: "cors",
      }).catch((error) => console.log("Error:", error));

      const res = await req.json();

      if (req.status < 300) {
        this.containers = res;
      }
    },
    startContainer: async function (id) {
      const req = await fetch(`${instance}/docker/start/${id}`, {
        method: "GET",
        mode: "cors",
      }).catch((error) => console.log("Error:", error));

      if (req.status < 300) {
        // test with rerequest list
        this.getContainers();
      }
    },
    stopContainer: async function (id) {
      const req = await fetch(`${instance}/docker/stop/${id}`, {
        method: "GET",
        mode: "cors",
      }).catch((error) => console.log("Error:", error));

      if (req.status < 300) {
        // test with rerequest list
        this.getContainers();
      }
    },
    logContainer: function (id) {
      this.logDiag = true;
      const path = `${instance}/docker/tail/${id}`;
      var evtSource = new EventSource(path);
      evtSource.onmessage = function (event) {
        this.lines.push(event.data);
      };
      console.log("lines:", this.lines);
      evtSource.onerror = function (err) {
        if (err.data === "eof") {
          evtSource.close();
        }
      };
    },
  },
};
</script>

<style>
</style>