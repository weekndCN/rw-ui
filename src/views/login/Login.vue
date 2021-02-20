<template>
  <v-row align="center" justify="center" class="fill-height">
    <v-col cols="10" md="8" xl="8">
      <v-card elevation="10" rounded="xl">
        <v-row no-gutters>
          <v-col cols="5">
            <v-img
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              height="100%"
            ></v-img>
          </v-col>
          <v-col cols="7" v-if="isLogin">
            <v-row align="center" justify="center">
              <v-col cols="12" md="8" xl="6" class="text-center">
                <v-card-subtitle class="black--text my-5">
                  <h2 class="black--text my-2">登陆RWPLUS</h2>
                  登陆账号，获取使用所有的服务
                </v-card-subtitle>
                <v-list-item>
                  <v-btn color="black" block dark rounded
                    ><v-icon left>mdi-account-supervisor-circle-outline</v-icon>
                    使用github账号登陆</v-btn
                  >
                </v-list-item>
                <v-list-item>
                  <v-btn color="red" block dark rounded
                    ><v-icon left>mdi-account-supervisor-circle-outline</v-icon>
                    使用gitlab账号登陆</v-btn
                  >
                </v-list-item>
                <v-list-item class="mt-8 mb-4">
                  <v-divider></v-divider>
                  <div class="mx-3 grey--text caption">或者</div>
                  <v-divider></v-divider>
                </v-list-item>
                <v-card-text>
                  <v-form>
                    <v-text-field outlined dense hide-details>
                      <template v-slot:label>
                        <div class="font-weight-bold caption">请输入用户名</div>
                      </template>
                    </v-text-field>
                    <v-text-field outlined dense class="my-3" hide-details>
                      <template v-slot:label>
                        <div class="font-weight-bold caption">请输入密码</div>
                      </template>
                    </v-text-field>
                    <v-btn color="indigo" block dark rounded class="caption"
                      >登陆</v-btn
                    >
                  </v-form>
                  <div class="caption ma-2">忘记用户名或者密码?</div>
                </v-card-text>
                <v-card-text class="mb-4">
                  新注册账号?<v-btn text @click="register"
                    >注册</v-btn
                  >
                </v-card-text>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="7" v-else>
            <register />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Register from "@/views/login/Register";
export default {
  name: "Login",
  components: {
    Register,
  },
  data: () => ({}),
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    register: function () {
      this.$store.commit("IS_LOGIN");
    },
  },
};
</script>



<style>
</style>