<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-toolbar>
        <v-text-field
          v-model="search"
          class="overline mr-3"
          placeholder="检索文件"
          outlined
          dense
          hide-details
          clearable
          color="indigo"
          prepend-icon="mdi-filter-variant"
          clear-icon="mdi-close-circle-outline"
        ></v-text-field>
        <v-btn x-small fab @click="getTree()"
          ><v-icon small>mdi-sync</v-icon></v-btn
        >
        <v-spacer></v-spacer>
        <v-btn-toggle text small>
          <v-btn @click="tree = []" small> clear</v-btn>
          <v-btn @click="dowloadFiles()" small> download </v-btn>
        </v-btn-toggle>
      </v-toolbar>
      <v-divider></v-divider>
      <v-row no-gutters>
        <v-col>
          <v-card-text>
            <v-treeview
              v-model="tree"
              :items="items"
              :open="open"
              rounded
              hoverable
              :search="search"
              :filter="filter"
              selected-color="pink"
              return-object
              item-key="path"
              open-on-click
              selectable
              expand-icon="mdi-chevron-down"
              class=""
            >
              <template v-slot:prepend="{ item, open }">
                <v-icon small v-if="item.is_dir">
                  {{ open ? "mdi-folder-open" : "mdi-folder" }}
                </v-icon>
                <v-icon small v-else>
                  {{
                    item.ext == ""
                      ? "mdi-file-document-outline"
                      : files[item.ext]
                  }}
                </v-icon>
              </template>
            </v-treeview>
          </v-card-text>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col cols="12" md="6">
          <v-card-text>
            <div
              v-if="tree == ''"
              key="title"
              class="title font-weight-light grey--text pa-4 text-center"
            >
              选中文件
            </div>

            <v-list three-line dense>
              <v-list-item
                v-for="(selection, i) in tree"
                :key="i"
                color="indigo"
                class="ma-1"
              >
                <v-list-item-avatar color="green" size="32">
                  <v-icon small color="white">mdi-heart</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <span
                    class="text-uppercase font-weight-bold overline"
                    v-text="selection.name"
                  ></span>

                  <div class="caption">
                    <strong>文件路径:</strong> {{ selection.path }}
                    <br /><strong>文件大小:</strong>
                    {{ selection.size / 1000 }}kb <br /><strong
                      >创建时间:</strong
                    >
                    {{ selection.modified_time }}
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { instance, headers } from "@/actions/config.js";

export default {
  name: "download",
  data: () => ({
    caseSensitive: false,
    isLoading: false,
    tree: [],
    types: [],
    choice: [],
    search: null,
    open: ["uploads"],
    // file types
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-json",
      md: "mdi-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      jpg: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
      json: "mdi-json",
    },
  }),

  computed: {
    items() {
      var data = [];
      data.push(this.$store.state.tree);
      // return data;
      // show only children. ignore parent directory
      return data[0].children;
    },
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    },
  },
  mounted() {
    this.getTree();
  },
  methods: {
    getTree: function () {
      this.$store.dispatch("getTree");
    },
    dowloadFiles: function () {
      for (var i = 0; i < this.tree.length; i++) {
        this.$store.dispatch("downloadFile", {
          name: this.tree[i].name,
          path: this.tree[i].path,
        });
      }
    },
  },
};
</script>

<style>
</style>