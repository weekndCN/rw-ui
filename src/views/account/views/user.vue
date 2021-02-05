<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <div class="subtitle-1 font-weight-bold">账号</div>
        <h2 class="font-weight-regular my-5">账号的基本信息</h2>
        <div class="font-weight-regular mt-1 mb-8">
          当前登陆的账号weeknd.su@gmail.com
        </div>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card elevation="12">
          <v-card-title>基本信息</v-card-title>
          <v-card-subtitle>查看更新个人基本信息</v-card-subtitle>
          <v-card-text>
            <v-list color="transparent">
              <template v-for="(item, i) in items">
                <v-list-item link v-if="item.src" :key="i" two-line>
                  <v-row align="center" justify="center">
                    <v-col cols="2">
                      <v-list-item-subtitle>{{
                        item.name
                      }}</v-list-item-subtitle>
                    </v-col>
                    <v-col cols="8">
                      <v-list-item-subtitle>{{
                        item.desc
                      }}</v-list-item-subtitle>
                    </v-col>
                    <v-col cols="2">
                      <div align="end">
                        <v-avatar size="24">
                          <v-img src="@/assets/rwplus.svg"></v-img>
                        </v-avatar>
                      </div>
                    </v-col>
                  </v-row>
                </v-list-item>
                <v-divider v-else-if="item.divider" :key="i" dark></v-divider>
                <v-list-item link v-else :key="i" two-line>
                  <v-row align="center" justify="center">
                    <v-col cols="2">
                      <v-list-item-subtitle class="overline">{{
                        item.name
                      }}</v-list-item-subtitle>
                    </v-col>
                    <v-col cols="8">
                      <div>{{ item.value }}</div>
                    </v-col>
                    <v-col cols="2">
                      <div align="end">
                        <v-icon> {{ item.icon }}</v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </v-list-item>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card elevation="12" class="mt-5">
          <v-card-title>联系信息</v-card-title>
          <v-card-subtitle>查看更新个人联系信息</v-card-subtitle>
          <v-card-text>
            <v-list-item link two-line>
              <v-row align="center" justify="center">
                <v-col cols="2">
                  <v-list-item-subtitle class="overline"
                    >电子邮件</v-list-item-subtitle
                  >
                </v-col>
                <v-col cols="8">
                  <div>weeknd.su@gmail.com</div>
                </v-col>
                <v-col cols="2">
                  <div align="end">
                    <v-icon> mdi-chevron-right</v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link two-line>
              <v-row align="center" justify="center">
                <v-col cols="2">
                  <v-list-item-subtitle class="overline"
                    >手机号码</v-list-item-subtitle
                  >
                </v-col>
                <v-col cols="8">
                  <div>12588910101</div>
                </v-col>
                <v-col cols="2">
                  <div align="end">
                    <v-icon> mdi-chevron-right</v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-list-item>
            <v-divider></v-divider>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "accountuser",
  data: () => ({
    items: [
      {
        name: "头像",
        desc: "选择更加帅气的照片",
        src: "@/assets/rwplus.svg",
      },
      { divider: true },
      {
        name: "昵称",
        value: "Weeknd Stark",
        icon: "mdi-chevron-right",
      },
      { divider: true },

      {
        name: "生日",
        value: "1999年9月32日",
        icon: "mdi-chevron-right",
      },
      { divider: true },
      {
        name: "性别",
        value: "男",
        icon: "mdi-chevron-right",
      },
      { divider: true },
    ],
  }),
};
</script>


<style>
</style>