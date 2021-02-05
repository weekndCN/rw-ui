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
          item-text="type"
          return-object
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
              <span class="caption font-weight-bold mr-1">{{data.item.name}}: </span>{{ data.item.type }}
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
        v-model="selectedRows"
        sort-by="date"
        item-key="path"
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
              selectedRows.indexOf(item.path) > -1 ? 'font-weight-bold' : ''
            "
          >
            <td
              align="center"
              :style="
                selectedRows.indexOf(item.path) > -1
                  ? 'border-left: 4px solid teal'
                  : ''
              "
            >
              <v-btn
                icon
                small
                @click="showSheet(item)"
                :color="selectedRows.indexOf(item.path) > -1 ? 'teal' : ''"
                ><v-icon>mdi-map-marker-circle</v-icon></v-btn
              >
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.size }}</td>
            <td>{{ item.date }}</td>
            <td>
              {{ item.type }}
              <v-btn icon @click="addFilter(item)"
                ><v-icon>mdi-filter-variant</v-icon>
              </v-btn>
            </td>
            <td>{{ item.path }}</td>
          </tr>
        </template>
      </v-data-table>
      <v-bottom-sheet v-model="sheet" persistent hide-overlay>
        <v-card elevation="12" outlined>
          <v-list v-model="selected">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ selected.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ selected.path }}</v-list-item-subtitle>
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
export default {
  name: "files",
  data: () => ({
    sheet: false,
    filterchips: [],
    selected: "",
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
      { text: "文件大小", value: "size" },
      { text: "上传日期", value: "date" },
      { text: "类型", value: "type" },
      { text: "路径", value: "path" },
    ],
    desserts: [
      {
        name: "test.txt",
        size: 159,
        date: "2021年01月",
        type: "txt",
        path: "/text1.txt",
      },
      {
        name: "test.txt",
        size: 159,
        date: "2021年01月",
        type: "jpg",
        path: "/text2.txt",
      },
      {
        name: "test.txt",
        size: 159,
        date: "2021年01月",
        type: "png",
        path: "/text3.txt",
      },
      {
        name: "test.txt",
        size: 159,
        date: "2021年01月",
        type: "txt",
        path: "/text4.txt",
      },
      {
        name: "test.txt",
        size: 159,
        date: "2021年01月",
        type: "txt",
        path: "/text5.txt",
      },
      {
        name: "test.txt",
        size: 159,
        date: "2021年01月",
        type: "txt",
        path: "/text6.txt",
      },
      {
        name: "test.txt",
        size: 159,
        date: "2021年01月",
        type: "txt",
        path: "/text7.txt",
      },
      {
        name: "test.txt",
        size: 159,
        date: "2021年01月",
        type: "txt",
        path: "/text8.txt",
      },
      {
        name: "test.txt",
        size: 159,
        date: "2021年01月",
        type: "txt",
        path: "/text9.txt",
      },
      {
        name: "test.txt",
        size: 159,
        date: "2021年01月",
        type: "txt",
        path: "/text10.txt",
      },
    ],
    items: [{}],
  }),
  methods: {
    showSheet: function (item) {
      this.sheet = true;
      this.toggleSelection(item.path);
      this.selected = item;
    },
    closeSheet: function () {
      this.sheet = false;
      this.selectedRows = "";
    },
    toggleSelection(keyID) {
      this.selectedRows = [];
      this.selectedRows.push(keyID);
    },
    addFilter: function (item) {
      const index = this.filterchips.findIndex(
        ({ type }) => type === item.type
      );
      if (index < 0) {
        this.filterchips.push({ name: "类型", type: item.type });
      }
    },
    remove: function (item) {
      const index = this.filterchips.findIndex(
        ({ type }) => type === item.type
      );
      if (index > -1) {
        this.filterchips.splice(index, 1);
      }
    },
  },
};
</script>


<style>
</style>