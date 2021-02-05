<template>
  <div>
    <account-app-bar />
    <account-app-navigator />
    <account-app-view />
  </div>
</template>




<script>
import AccountAppBar from "@/views/account/core/AccountBar";
import AccountAppNavigator from "@/views/account/core/AccountNavigator";
import AccountAppView from "@/views/account/core/AccountView";

export default {
  name: "setting",
  components: {
    AccountAppBar,
    AccountAppNavigator,
    AccountAppView,
  },
  data: () => ({}),
};
</script>