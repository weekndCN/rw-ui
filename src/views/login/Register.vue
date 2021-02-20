<template>
  <v-row align="center" justify="center" no-gutters class="fill-height">
    <v-col cols="12" md="8" xl="6" class="text-center">
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-subtitle class="my-5">
            <h2 class="my-2">注册账号</h2>
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
            <v-text-field
              v-model="email"
              outlined
              dense
              hide-details
              :rules="emailRules"
              required
              ref="emailValidate"
            >
              <template v-slot:label>
                <div class="font-weight-bold caption">请输入邮箱地址</div>
              </template>
            </v-text-field>
            <v-btn
              color="indigo"
              block
              dark
              rounded
              class="caption mt-3"
              @click="emailStep"
              >下一步</v-btn
            >
          </v-card-text>
          <v-card-text class="mb-4">
            已经有了账号?<v-btn text @click="isLogin = !isLogin">登陆</v-btn>
          </v-card-text>
        </v-window-item>
        <v-window-item :value="2">
          <v-card-subtitle class="black--text my-5">
            <h2 class="black--text my-2">个人信息</h2>
            填写个人基本信息
          </v-card-subtitle>
          <v-form ref="form">
            <v-list-item>
              <v-text-field
                outlined
                dense
                v-model="username"
                class="my-4"
                hint="昵称用于个人账号对外显示"
                persistent-hint
                :counter="10"
                :rules="nameRules"
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
                :type="showPasswd ? 'text' : 'password'"
                hint="使用 8 个或更多字符（字母、数字和符号的组合）"
                persistent-hint
                v-model="password"
                required
              >
                <template v-slot:label>
                  <div class="font-weight-bold caption">请输入密码</div>
                </template></v-text-field
              >
            </v-list-item>

            <v-list-item>
              <v-text-field
                outlined
                dense
                class="mt-4"
                v-model="confirmPasswd"
                :rules="passwordRules"
                :type="showPasswd ? 'text' : 'password'"
                required
              >
                <template v-slot:label>
                  <div class="font-weight-bold caption">请确认密码</div>
                </template></v-text-field
              >
            </v-list-item>
          </v-form>
          <v-list-item
            ><v-switch color="deep-orange" v-model="showPasswd"></v-switch>
            <div class="caption">显示密码</div></v-list-item
          >
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text @click="step--">上一步</v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="passStep">注册账号</v-btn>
          </v-card-actions>
        </v-window-item>
        <v-window-item :value="3">
          <div class="pa-4 text-center">
            <h1>Congratulation!</h1>
            <h3 class="title font-weight-light mb-2">Welcome to rwplus</h3>
            <span class="caption grey--text">Thanks for signing up!</span>
          </div>
        </v-window-item>
        <v-divider></v-divider>
      </v-window>
    </v-col>
  </v-row>
</template>



<script>
export default {
  name: "register",
  valid: false,
  data: () => ({
    step: 1,
    isLogin: false,
    email: "",
    username: "",
    password: "",
    confirmPasswd: "",
    showPasswd: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
  }),
  watch: {
    match: "validate",
  },
  computed: {
    passwordRules() {
      const rules = [];
      // not allow spaces
      const rulespace = (v) =>
        (v || "").indexOf(" ") < 0 || "No spaces are allowed";
      rules.push(rulespace);
      // match
      const rulematch = (v) =>
        (!!v && v) === this.password || "Values do not match";
      rules.push(rulematch);
      return rules;
    },
    registerRes() {
      return this.$store.state.registerRes;
    },
  },
  methods: {
    validate: function () {
      this.$refs.form.validate();
    },
    register: function () {},
    emailStep: function () {
      if (this.$refs.emailValidate.validate()) {
        this.step++;
      }
    },
    passStep: function () {
      // if validate then register user
      if (this.$refs.form.validate()) {
        let params = new FormData();
        params.append("username", this.username);
        params.append("password", this.password);
        params.append("email", this.email);
        this.$store.dispatch("registerUser", params).then(() => {
          if (this.$store.state.registerRes) {
            this.step++;
            setTimeout(() => {
              this.$store.commit("IS_LOGIN");
            }, 2000);
          }
        });
      }
    },
  },
};
</script>


<style>
</style>