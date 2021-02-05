<template>
  <v-row align="center" justify="center" no-gutters>
    <v-col cols="12" md="8" xl="6" class="text-center">
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-subtitle class="black--text my-5">
            <h2 class="black--text my-2">注册账号</h2>
            创建您的Rwplus账号，获取服务支持
          </v-card-subtitle>
          <v-list-item class="mb-1">
            <v-btn rounded color="black" block dark
              ><v-icon left>mdi-account-supervisor-circle-outline</v-icon>
              使用github账号注册</v-btn
            >
          </v-list-item>
          <v-list-item>
            <v-btn rounded color="deep-orange" dark block
              ><v-icon left>mdi-account-supervisor-circle-outline</v-icon>
              使用gitlab账号注册</v-btn
            >
          </v-list-item>
          <v-list-item class="mt-8 mb-4">
            <v-divider></v-divider>
            <div class="mx-3 grey--text caption">或者</div>
            <v-divider></v-divider>
          </v-list-item>
          <v-card-text>
            <v-form>
              <v-text-field outlined dense hide-details suffix="@gmail.com">
                <template v-slot:label>
                  <div class="font-weight-bold caption">请输入用户名</div>
                </template>
              </v-text-field>
              <v-btn
                color="indigo"
                block
                dark
                rounded
                class="caption mt-3"
                @click="step++"
                >下一步</v-btn
              >
            </v-form>
          </v-card-text>
          <v-card-text class="mb-4">
            已经有了账号?<strong class="ml-1">登陆</strong>
          </v-card-text>
        </v-window-item>
        <v-window-item :value="2">
          <v-card-subtitle class="black--text my-5">
            <h2 class="black--text my-2">个人信息</h2>
            填写个人基本信息
          </v-card-subtitle>
          <v-list-item>
            <v-text-field
              outlined
              dense
              class="my-4"
              hint="昵称用于个人账号对外显示"
              persistent-hint
            >
              <template v-slot:label>
                <div class="font-weight-bold caption">昵称</div>
              </template></v-text-field
            >
          </v-list-item>
          <v-list-item>
            <v-text-field
              outlined
              dense
              hint="使用 8 个或更多字符（字母、数字和符号的组合）"
              persistent-hint
            >
              <template v-slot:label>
                <div class="font-weight-bold caption">请输入密码</div>
              </template></v-text-field
            >
          </v-list-item>
          <v-list-item>
            <v-text-field outlined dense class="mt-4">
              <template v-slot:label>
                <div class="font-weight-bold caption">请确认密码</div>
              </template></v-text-field
            >
          </v-list-item>
          <v-list-item
            ><v-switch color="deep-orange"></v-switch>
            <div class="caption">显示密码</div></v-list-item
          >
        </v-window-item>
        <v-window-item :value="3">
          <div class="pa-4 text-center">   
            <h1>Congratulation!</h1>
            <h3 class="title font-weight-light mb-2">Welcome to rwplus</h3>
            <span class="caption grey--text">Thanks for signing up!</span>
          </div>
        </v-window-item>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn :disabled="step === 1" text @click="step--"> 上一步 </v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="step === 3" text @click="step++">
            {{ step === 2 ? "提交" : "下一步" }}
          </v-btn>
        </v-card-actions>
      </v-window>
    </v-col>
  </v-row>
</template>



<script>
export default {
  name: "register",
  data: () => ({
      step: 1,
  }),
};
</script>


<style>
</style>