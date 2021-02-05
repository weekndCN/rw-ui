<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <div class="subtitle-1 font-weight-bold my-7">通知</div>
        <h2 class="font-weight-regular my-5">信息接收通知</h2>
        <div class="overline mb-8">选择您想接收的推送通知和电子邮件通知</div>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-list color="transparent">
          <v-list-item>
            <v-row align="center"  no-gutters>
              <v-col cols="2"  xs="12">
                <div class="overline">钉钉机器人</div>
              </v-col>
              <v-col cols="1" xs="12">
                <v-switch color="deep-orange"></v-switch>
              </v-col>
              <v-col cols="2" xs="12">
                <div class="overline start">开启消息通知</div>
              </v-col>
              <v-col cols="7" xs="12">
                <div align="end">
                  <v-btn small fab elevation="12"
                    ><v-icon>mdi-plus</v-icon></v-btn
                  >
                </div>
              </v-col>
              <v-col cols="10" offset-md="2">
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "accountreminder",
  data: () => ({}),
};
</script>

<style>
</style>