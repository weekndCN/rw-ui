<template>
  <v-row no-gutters>
    <v-col cols="12" md="6">
      <v-card class="text-center" outlined height="600" tile>
        <div class="box" id="uploadBox" multiple>
          <div v-if="uploadfiles == ''">
            <v-row align="center" justify="center">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-icon x-large color="teal">mdi-cloud-upload</v-icon>
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
                      class="caption mt-5"
                      filled
                      hide-details
                      dense
                      color="indigo"
                      placeholder="或者浏览本地选择文件"
                      v-model="uploadfiles"
                      multiple
                      prepend-icon=""
                      show-size
                    >
                    </v-file-input>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-row>
          </div>
          <div v-else class="ml-5">
            <v-btn
              @click="remove()"
              small
              class="caption"
              color="red"
              dark
              rounded
              ><v-icon small left>mdi-close</v-icon>清空重选</v-btn
            >
            <v-chip-group column active-class="primary-color">
              <v-chip
                v-for="(file, i) in uploadfiles"
                :key="i"
                color="deep-purple accent-4"
                outlined
                class="caption"
              >
                  <v-icon
                    small
                    left
                    v-text="ext(file.name).icon"
                  >
                  </v-icon>
                <strong>{{ file.name }}</strong>
                <span>({{ file.size / 1000 }}kb)</span>
              </v-chip>
            </v-chip-group>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card outlined height="600" tile>
        <v-row class="ma-3" align="center" justify="center">
          <v-btn-toggle text v-model="type">
            <v-btn small value="option">option</v-btn>
            <v-btn small value="progress">progress</v-btn>
          </v-btn-toggle>
          <v-spacer></v-spacer>
          <v-btn
            fab
            x-small
            @click="comitUpload()"
            elevation="10"
            :disabled="disable"
            ><v-icon>mdi-upload</v-icon></v-btn
          >
        </v-row>
        <v-divider></v-divider>
        <v-scale-transition>
          <div v-if="type == 'option'">
            <v-list>
              <v-list-item>
                <v-list-item-content two-line>
                  <v-list-item-title class="caption font-weight-bold mb-1"
                    >上传目录</v-list-item-title
                  >
                  <v-text-field
                    v-model="uploadPath"
                    dense
                    :disabled="disable"
                    hide-details
                    filled
                    placeholder="默认为当前目录/"
                    class="caption"
                  ></v-text-field>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="caption font-weight-bold">
                    访问URL的PathPrefix</v-list-item-title
                  >
                  <v-text-field
                    class="caption mt-2"
                    v-model="uppath"
                    ref="copyUrl"
                    dense
                    readonly
                    filled
                    append-outer-icon="mdi-content-copy"
                    @click:append-outer="copyText"
                  ></v-text-field>
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
                  <v-list-item-subtitle class="caption mt-2">
                    {{ item.value }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>

            <v-list dense>
              <v-list-item class="caption">
                <v-list-item-content>
                  <v-list-item-title class="mb-4"
                    >{{ limitDesc.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle
                    class="caption font-weight-regular"
                    v-for="item in limitDesc.items"
                    :key="item.id"
                    ><v-icon color="cyan" left
                      >mdi-numeric-{{ item.id }}-circle</v-icon
                    >{{ item.desc }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <div v-else>
            <v-list-item v-for="(file, index) in uploadfiles" :key="index">
              <v-list-item-icon
                ><v-icon
                  right
                  v-text="ext(file.name).icon"
                  :color="ext(file.name).color"
                  small
                ></v-icon
              ></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="caption">{{
                  file.name
                }}</v-list-item-title>
                <v-progress-linear
                  rounded
                  color="green"
                  :indeterminate="uploadStatus == 'loading' ? true : false"
                  :value="uploadStatus == 'success' ? 100 : 0"
                ></v-progress-linear>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon right color="indigo" v-if="uploadStatus == 'failure'"
                  >mdi-close-circle</v-icon
                >
                <v-icon
                  right
                  color="green"
                  small
                  v-else-if="uploadStatus == 'success'"
                  >mdi-check-circle</v-icon
                >
                <v-icon right color="grey" v-else small>mdi-cloud-sync-outline</v-icon>
              </v-list-item-action>
            </v-list-item>
          </div>
        </v-scale-transition>
      </v-card>
    </v-col>
  </v-row>
</template>



<script>
// api inital config
import { instance } from "@/actions/config";
import { limitdesc } from "@/api/upload";
import { fileTypes } from "@/api/type";

export default {
  name: "upload",
  data: () => ({
    uploadfiles: [],
    browerfiles: [],
    fileType: fileTypes,
    uploadPath: "/",
    loading: false,
    // type is flag to use option or progress
    // option compont to do!
    // progress component to do!
    type: "progress",
    limitDesc: limitdesc,
    disable: false,
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
      return `${instance}` + this.uploadPath;
    },
    uploadLoading() {
      return this.$store.state.loading;
    },
    uploadStatus() {
      return this.$store.state.uploadStatus;
    },
  },
  methods: {
    remove: function () {
      this.disable = !this.disable;
      this.uploadfiles = [];
      this.uploadPath = "/";
      this.$store.state.uploadStatus = "";
    },
    ext: function (e) {
      if (!this.fileType[e.substr(e.indexOf(".", -1), e.length)]) {
        return "mdi-alert-circle";
      } else {
        return this.fileType[e.substr(e.indexOf(".", -1), e.length)];
      }
    },
    comitUpload: function () {
      this.disable = !this.disable;
      let params = new FormData();
      for (var i = 0; i < this.uploadfiles.length; i++) {
        params.append("file", this.uploadfiles[i]);
      }
      if (this.uploadPath != "") {
        params.append("dir", this.uploadPath);
      }

      this.$store.dispatch("uploadFiles", params);
      /*
      clear array file list when success
      */

      // move to single file to upload for catching progress TO DO
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
    copyText: function () {
      let copyText = this.$refs.copyUrl.$el.querySelector("input");
      copyText.select();
      document.execCommand("copy");
    },
  },
};
</script>


<style>
.box {
  /*border: 2px dashed #58717e;
  border-radius: 8px;
  */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>