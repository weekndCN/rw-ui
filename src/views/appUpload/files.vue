<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-toolbar outlined flat>
        <v-autocomplete
          prepend-icon="mdi-filter-variant"
          multiple
          filled
          dense
          v-model="filterchips"
          :items="filterchips"
          item-key="type"
          item-text="name"
          hide-details
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              small
              @click="data.select"
              @click:close="remove(data.item)"
            >
              <span class="caption font-weight-bold mr-1"
                >{{ data.item.name }}: </span
              >{{ data.item.type }}
            </v-chip>
          </template>
        </v-autocomplete>
        <v-btn-toggle small class="ml-4" rounded>
          <v-btn @click="tree = []" small>清除</v-btn>
          <v-btn @click="dowloadFiles()" small> 下载 </v-btn>
        </v-btn-toggle>
      </v-toolbar>
    </v-col>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :loading="isLoading"
        v-model="selectedRows"
        sort-by="create_at"
        item-key="location"
        class="elevation-1 caption"
        :footer-props="{
          itemsPerPageText: '每页行数：',
          showFirstLastPage: true,
          firstIcon: 'mdi-page-first',
          lastIcon: 'mdi-page-last',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
        }"
      >
        <template v-slot:item="{ item }">
          <tr
            :class="
              selectedRows.indexOf(item.location) > -1 ? 'font-weight-bold' : ''
            "
          >
            <td
              align="center"
              :style="
                selectedRows.indexOf(item.location) > -1
                  ? 'border-left: 4px solid teal'
                  : ''
              "
            >
              <v-btn
                icon
                small
                @click="showSheet(item)"
                :color="selectedRows.indexOf(item.location) > -1 ? 'teal' : ''"
                ><v-icon>mdi-map-marker-circle</v-icon></v-btn
              >
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.user }}</td>
            <td>{{ extSize(item.size) }}</td>
            <td>
              {{ item.create_at }}
              <v-btn icon @click="addFilter(item, 'time')"
                ><v-icon>mdi-filter-variant</v-icon>
              </v-btn>
            </td>
            <td>
              {{ item.type }}
              <v-btn icon @click="addFilter(item, 'type')"
                ><v-icon>mdi-filter-variant</v-icon>
              </v-btn>
            </td>
            <td>{{ item.location }}</td>
          </tr>
        </template>
      </v-data-table>
      <v-bottom-sheet v-model="sheet" persistent hide-overlay>
        <v-card elevation="12" outlined>
          <v-list v-model="selected">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ selected.name }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  selected.location
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-list-item-icon>
                <v-btn icon>
                  <v-icon>mdi-download</v-icon>
                </v-btn>
              </v-list-item-icon>
              <v-list-item-icon>
                <v-btn icon @click="closeSheet()">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-bottom-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { instance, headers } from "@/actions/config";

export default {
  name: "files",
  data: () => ({
    sheet: false,
    filterchips: [],
    selected: "",
    isLoading: false,
    selectedRows: [],
    headers: [
      {
        text: "",
        align: "center",
        sortable: false,
        value: "actions",
      },
      {
        text: "文件名",
        value: "name",
      },
      {
        text: "上传者",
        value: "user",
      },
      { text: "文件大小", value: "size" },
      { text: "上传日期", value: "create_at" },
      { text: "类型", value: "type" },
      { text: "路径", value: "location" },
    ],
    desserts: [{}],
    items: [{}],
  }),
  created() {
    this.getFiles();
  },
  watch: {
    filterchips(val) {
      if (val.length == 0) return;
      // filter generate
      var queryString = Object.keys(val)
        .map(function (key) {
          return val[key].name + "=" + val[key].type;
        })
        .join("&");

      this.isLoading = true;
      // Lazily load input items
      fetch(`${instance}/file/list?${queryString}`, {
        method: "GET",
      })
        .then((res) => res.clone().json())
        .then((res) => {
          this.items = res;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
  methods: {
    // show button sheet
    showSheet: function (item) {
      this.sheet = true;
      this.toggleSelection(item.location);
      this.selected = item;
    },
    // close button sheet
    closeSheet: function () {
      this.sheet = false;
      this.selectedRows = "";
    },
    // choice selection
    toggleSelection(keyID) {
      this.selectedRows = [];
      this.selectedRows.push(keyID);
    },
    // add filter
    addFilter: function (item, type) {
      if (type == "type") {
        const index = this.filterchips.findIndex(
          ({ type }) => type === item.type
        );
        if (index < 0) {
          this.filterchips.push({ name: "type", type: item.type });
        }
      }

      if (type == "time") {
        const index = this.filterchips.findIndex(
          ({ time }) => time === item.create_at.substring(0, 10)
        );

        if (index < 0) {
          this.filterchips.push({
            name: "date",
            type: item.create_at.substring(0, 10),
          });
        }
      }
    },
    // remove filter
    remove: function (item) {
      const index = this.filterchips.findIndex(
        ({ type }) => type === item.type
      );
      if (index > -1) {
        this.filterchips.splice(index, 1);
      }
    },
    // get files
    getFiles: async function () {
      const req = await fetch(`${instance}/file/list`, {
        //headers,
        method: "GET",
        mode: "cors",
      }).catch((error) => console.log("Error:", error));

      const res = await req.json();

      if (req.status < 300) {
        this.desserts = res;
      }

      console.log(this.desserts);
    },
    // extract size
    extSize: function (size) {
      var fSExt = new Array("Bytes", "KB", "MB", "GB"),
        i = 0;
      while (size > 900) {
        size /= 1024;
        i++;
      }
      return Math.round(size * 100) / 100 + " " + fSExt[i];
    },
  },
};
</script>


<style>
</style>