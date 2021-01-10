<template>
  <v-container fluid fill-height>
    <v-row>
       <sign-in v-if="login" />
        <register v-if="!login" />
    </v-row>
    <v-btn @click="changeLogin()">changeMod</v-btn>
  </v-container>
</template>

<script>
import SignIn from "./Signin";
import Register from "./Register";

export default {
  name: "login",
  components: {
    SignIn,
    Register,
  },
  data: () => ({
    login: true,
  }),
  methods: {
    changeLogin: function() {
      this.login = !this.login
    },
  }
};
</script>

<style>
</style>