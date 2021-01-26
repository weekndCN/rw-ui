<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="6" md="“6”">
        <v-card height="550" class="text-center" rounded="xl">
          <div class="box" id="uploadBox" multiple>
            <div v-if="uploadfiles == ''">
              <v-row align="center" justify="center">
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      <v-icon x-large color="indigo">mdi-cloud-upload</v-icon>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <h2 class="text-uppercase font-weight-bold">
                        Drag Or Drop
                      </h2>
                      <v-list-item-subtitle class="overline grey--text"
                        >To Upload</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="text-center">
                    <v-list-item-content>
                      <v-file-input
                        class="overline mt-5"
                        filled
                        hide-details
                        dense
                        color="indigo"
                        placeholder="或者浏览本地选择文件"
                        v-model="uploadfiles"
                        prepend-icon=""
                      >
                      </v-file-input>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-row>
            </div>
            <div v-else class="ml-5">
              <strong class="font-weight-bold overline">文件名:</strong>
              <v-chip-group column active-class="primary-color">
                <v-chip
                  v-for="(file, i) in uploadfiles"
                  :key="i"
                  @click:close="remove(file)"
                  close
                  label
                  text-color="white"
                >
                  <v-avatar left>
                    <v-icon small>
                      {{
                        fileType[
                          file.name.substr(
                            file.name.indexOf(".", -1),
                            file.name.length
                          )
                        ]
                      }}
                    </v-icon>
                  </v-avatar>
                  <strong>{{ file.name }}</strong>
                  <span>({{ file.size / 1000 }}kb)</span>
                </v-chip>
              </v-chip-group>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" md="6">
        <v-card flat>
          <v-row class="ma-1 mb-3" align="center" justify="center">
            <v-btn-toggle text>
              <v-btn small>option</v-btn>
              <v-btn small>progress</v-btn>
            </v-btn-toggle>
            <v-spacer></v-spacer>
            <v-btn fab small @click="comitUpload()" elevation="10"
              ><v-icon>mdi-upload</v-icon></v-btn
            >
          </v-row>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content two-line>
              <v-list-item-title class="caption font-weight-bold mb-1"
                >上传目录</v-list-item-title
              >
              <v-text-field
                v-model="uploadPath"
                dense
                hide-details
                solo-inverted
                placeholder="默认为当前目录/"
                class="caption"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="caption font-weight-bold">
                  访问URL</v-list-item-title
                >
                <v-list-item-subtitle class="caption">
                  {{uploadPath}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content
                v-for="(item, index) in limitDesc.limit"
                :key="index"
              >
                <v-list-item-title class="caption font-weight-bold">
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="caption">
                  {{ item.value }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-alert color="teal" border="left" elevation="2" text dense>
            <v-list>
              <v-list-item class="caption">
                <v-list-item-content>
                  <v-list-item-title class="mb-4"
                    >{{ limitDesc.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    class="caption"
                    v-for="item in limitDesc.items"
                    :key="item.id"
                    ><v-icon color="green"
                      >mdi-numeric-{{ item.id }}-circle</v-icon
                    >{{ item.desc }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-alert>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
// api inital config
import { instance } from "@/actions/config";
import { limitdesc } from "@/api/upload";
import { fileType } from "@/api/type";

export default {
  name: "upload",
  data: () => ({
    uploadfiles: [],
    fileType: fileType,
    uploadPath: "",
    loading: false,
    limitDesc: limitdesc,
  }),
  mounted() {
    this.$nextTick(function () {
      let _this = this;
      var dropbox = document.getElementById("uploadBox");
      dropbox.addEventListener("dragenter", _this.onDrag, false);
      dropbox.addEventListener("dragover", _this.onDrag, false);
      dropbox.addEventListener("drop", _this.onDrop, false);
    });
  },
  computed: {
    uppath() {
      return `${instance}` + "/upload/" + this.uploadPath;
    },
    uploadLoading() {
      return this.$store.state.loading;
    },
  },
  methods: {
    remove: function (e) {
      delete this.uploadfiles.e;
    },
    comitUpload: function () {
      let params = new FormData();
      for (var i = 0; i < this.uploadfiles.length; i++) {
        params.append("file", this.uploadfiles[i]);
      }
      this.$store.dispatch("uploadFiles", params);
    },
    uploadFile: function (e) {
      this.uploadfiles = e;
    },
    onDrag: function (e) {
      e.stopPropagation();
      e.preventDefault();
    },
    onDrop: function (e) {
      this.files = e.stopPropagation();
      e.preventDefault();
      var dt = e.dataTransfer;
      // uploadFile func
      this.uploadFile(dt.files);
    },
  },
};
</script>


<style>
.box {
  border: 2px dashed #58717e;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>