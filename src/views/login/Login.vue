<template>
  <v-app>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" md="10">
            <v-card elevation="12">
              <v-window v-model="step" reverse>
                <v-window-item :value="1">
                  <v-container fluid text-xs-center class="fill-height">
                    <v-row>
                      <v-col cols="12" md="5" class="grey darken-4">
                        <v-row
                          justify="center"
                          align="center"
                          class="fill-height"
                        >
                          <v-col cols="12" md="8">
                            <v-card-text>
                              <div class="text-center title white--text mt-12">
                                <v-avatar>
                                  <v-img src="@/assets/rwplus.svg"></v-img>
                                </v-avatar>
                              </div>
                              <h1 class="text-center brown--text mt-8 mb-12">
                                欢迎回来
                              </h1>
                              <div
                                class="text-center caption brown--text font-weight-bold"
                              >
                                有三种简单然而无比强烈的激情左右了我的一生：对爱的渴望，对知识的探索和对人类苦难的难以忍受的怜悯。这些激情像飓风，反复地吹拂过深重的苦海，濒于绝境。
                              </div>
                              <div
                                class="text-center caption brown--text font-weight-bold mt-12 mb-4"
                              >
                                还没有账号?
                              </div>
                              <div class="text-center brown--text">
                                <v-btn
                                  outlined
                                  rounded
                                  @click="step++"
                                  dark
                                  small
                                  class="mb-12"
                                  >注册账号</v-btn
                                >
                              </div>
                              <div
                                class="text-center overline brown--text mt-12"
                              >
                                享受生活.热爱生活<br />
                                www.rwplus.cn @2020
                              </div>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" md="7">
                        <v-row
                          justify="center"
                          align="center"
                          class="fill-height"
                        >
                          <v-col cols="12" md="6">
                            <v-card-text>
                              <h1 class="text-center">登陆账号</h1>
                              <div class="text-center mb-4 mt-4">
                                <v-avatar rounded>
                                  <v-icon x-large color="black"
                                    >mdi-account-circle-outline</v-icon
                                  >
                                </v-avatar>
                              </div>
                              <v-form>
                                <v-text-field
                                  dense
                                  rounded
                                  filled
                                  hide-details
                                  color="grey darken-4"
                                  class="caption"
                                  placeholder="请输入账号"
                                  prepend-icon="mdi-account-circle"
                                >
                                </v-text-field>
                                <v-text-field
                                  dense
                                  rounded
                                  filled
                                  hide-details
                                  class="mt-4 caption"
                                  placeholder="请输入账号"
                                  color="grey darken-4"
                                  prepend-icon="mdi-lock"
                                >
                                </v-text-field>
                              </v-form>
                              <div
                                class="text-center overline font-weight-regular black--text mt-4 mb-4"
                              >
                                忘记密码？<br />
                              </div>
                              <div class="text-center">
                                <v-btn
                                  rounded
                                  depressed
                                  small
                                  color="grey darken-4"
                                  dark
                                  block
                                  to="/upload"
                                  >登陆</v-btn
                                >
                              </div>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-window-item>
                <v-window-item :value="2">
                  <v-container fluid text-xs-center grid-list-md>
                    <v-row>
                      <v-col cols="12" md="8">
                        <v-row
                          justify="center"
                          align="center"
                          class="fill-height"
                        >
                          <v-col cols="12" md="6">
                            <v-card-text>
                              <h1 class="text-center">注册账号</h1>
                              <div class="text-center mb-4 mt-4">
                                <v-avatar rounded>
                                  <v-icon x-large color="black"
                                    >mdi-account-circle-outline</v-icon
                                  >
                                </v-avatar>
                              </div>
                              <v-form>
                                <v-text-field
                                  dense
                                  rounded
                                  filled
                                  hide-details
                                  class="caption"
                                  placeholder="输入账号"
                                  prepend-icon="mdi-account-circle"
                                >
                                </v-text-field>
                                <v-text-field
                                  dense
                                  rounded
                                  filled
                                  hide-details
                                  class="mt-4 caption"
                                  placeholder="输入密码"
                                  prepend-icon="mdi-lock"
                                >
                                </v-text-field>
                                <v-text-field
                                  dense
                                  rounded
                                  filled
                                  hide-details
                                  class="mt-4 mb-4 caption"
                                  placeholder="确认密码"
                                  prepend-icon="mdi-lock"
                                >
                                </v-text-field>
                              </v-form>
                              <div class="text-center mt-4">
                                <v-btn rounded filled small dark depressed>
                                  注册账号</v-btn
                                >
                              </div>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" md="4" class="grey darken-4">
                        <v-row
                          justify="center"
                          align="center"
                          class="fill-height"
                        >
                          <v-col cols="12" md="8">
                            <v-card-text>
                              <div class="text-center title white--text mt-12">
                                <v-avatar>
                                  <v-img src="@/assets/rwplus.svg"></v-img>
                                </v-avatar>
                              </div>
                              <h1 class="text-center brown--text mt-8 mb-12">
                                欢迎加入
                              </h1>
                              <div
                                class="text-center caption brown--text font-weight-bold"
                              >
                                有三种简单然而无比强烈的激情左右了我的一生：对爱的渴望，对知识的探索和对人类苦难的难以忍受的怜悯。这些激情像飓风，反复地吹拂过深重的苦海，濒于绝境。
                              </div>
                              <div
                                class="text-center caption brown--text font-weight-bold mt-12 mb-4"
                              >
                                已经创建账号？
                              </div>
                              <div class="text-center brown--text">
                                <v-btn
                                  outlined
                                  rounded
                                  @click="step++"
                                  dark
                                  small
                                  class="mb-12"
                                  >登陆账号</v-btn
                                >
                              </div>
                              <div
                                class="text-center overline brown--text mt-12"
                              >
                                享受生活.热爱生活<br />
                                www.rwplus.cn @2020
                              </div>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>

<style>
</style>