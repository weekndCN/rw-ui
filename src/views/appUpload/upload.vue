<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="6" md="“6”">
        <v-card flat height="550" class="text-center">
          <div class="box" id="uploadBox" multiple>
            <div v-if="uploadfiles == ''">
              <p class="caption text-justify">
                拖拽文件到虚线框内或者<span
                  class="caption font-weight-bold teal--text"
                  >点击按钮上传</span
                >
              </p>
              <p class="caption">
                <span class="caption font-weight-bold">支持的文件类型:</span>
                pdf, jpg, png
              </p>
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
        <v-card class="mx-auto" flat>
          <v-progress-linear
            :active="uploadLoading"
            :indeterminate="uploadLoading"
            absolute
            color="deep-purple accent-4"
          ></v-progress-linear>
          <v-toolbar flat dense class="overline">upload information</v-toolbar>
          <v-divider></v-divider>
          <v-list subheader two-line dense>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="caption font-weight-bold mb-1"
                  >上传目录</v-list-item-title
                >
                <v-text-field
                  filled
                  v-model="uploadPath"
                  dense
                  hide-details
                  placeholder="默认为当前目录/"
                  class="caption"
                ></v-text-field>
                <v-sheet
                  color="orange lighten-2  mt-3 caption mx-auto"
                  :elevation="1"
                  height="40"
                  rounded
                >
                  <div class="mt-3 black--text">
                    <v-icon small class="ml-6">mdi-help-circle</v-icon>
                    上传服务器下若存在同名文件，将被新上传的文件覆盖。
                  </div>
                </v-sheet>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="caption font-weight-bold mb-1"
                  >访问路径</v-list-item-title
                >

                <v-text-field
                  filled
                  dense
                  hide-details
                  disabled
                  class="caption"
                  :placeholder="uppath"
                ></v-text-field>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="caption font-weight-bold mb-1"
                  >上传大小</v-list-item-title
                >
                <v-list-item-subtitle class="caption"
                  >130M</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title class="caption font-weight-bold mb-1"
                  >上传目录</v-list-item-title
                >
                <v-list-item-subtitle class="caption">/</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title class="caption font-weight-bold mb-1"
                  >开启https</v-list-item-title
                >
                <v-list-item-subtitle class="caption"
                  >https</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-sheet
                color="orange lighten-2 mt-3 caption mx-auto"
                :elevation="1"
                rounded
                width="100%"
              >
                <div class="mt-3 black--text">
                  <v-icon small class="ml-6">mdi-help-circle</v-icon>
                  上传限制：
                </div>
                <div class="ma-3 ml-6 black--text caption">
                  1:
                  上传目录限制层级为一层，即/demo合法。/demo/files/不合法；<br />
                  2: 上传总大小限制150M；<br />
                  3: 禁止文件名存在空格；<br />
                </div>
              </v-sheet>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small depressed>取消 </v-btn>
            <v-btn
              small
              color="cyan"
              dark
              :disabled="loading"
              :loading="loading"
              depressed
              @click="comitUpload()"
              >确定</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-progress-linear
            :active="uploadLoading"
            :indeterminate="uploadLoading"
            absolute
            color="deep-purple accent-4"
          ></v-progress-linear>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
import {instance} from '@/actions/config';

export default {
  name: "upload",
  data: () => ({
    uploadfiles: [],
    fileType: {
      ".html": "mdi-language-html5",
      ".js": "mdi-nodejs",
      ".json": "mdi-json",
      ".md": "mdi-language-markdown",
      ".pdf": "mdi-pdf-box",
      ".png": "mdi-image",
      ".jpg": "mdi-image",
      ".jpeg": "mdi-image",
      ".txt": "mdi-signature-text",
      ".xls": "mdi-file-excel-box",
      "": "mdi-text",
    },
    uploadPath: "",
    loading: false,
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
      for (var i=0; i< this.uploadfiles.length; i++) {
          params.append("file",this.uploadfiles[i])
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
  border: 2px dashed #90a4ae;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>