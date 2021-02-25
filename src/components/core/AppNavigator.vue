<template>
  <v-navigation-drawer
    clipped
    app
    :mini-variant.sync="mini"
    :color="$vuetify.theme.dark ? '#272727' : '#f5f5f5'"
  >
    <v-list dense shaped :color="$vuetify.theme.dark ? '#272727' : '#f5f5f5'">
      <template v-for="(item, i) in items">
        <v-row v-if="item.heading" :key="i" align="center" no-gutters>
          <v-col cols="12">
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-col>
        </v-row>
        <v-divider
          v-else-if="item.divider"
          :key="i"
          dark
          class="my-4"
        ></v-divider>
        <v-list-item v-else :key="i" :to="item.href">
          <v-list-item-action>
            <v-icon :color="$vuetify.theme.dark ? 'grey' : ''">{{
              item.icon
            }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title color="grey--text">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
export default {
  name: "appnavigator",
  data: () => ({
    items: [
      { icon: "mdi-home-map-marker", text: "首页", href: "/" },
      { divider: true },
      { heading: "Apps" },
      { icon: "mdi-progress-upload", text: "上传", href: "/upload" },
      { icon: "fa-database", text: "备份", href: "/backup" },
      { icon: "mdi-email-edit", text: "邮件", href: "/mail" },
      { icon: "mdi-calendar-check", text: "定时任务", href: "/cron" },
      { icon: "fab fa-expeditedssl", text: "证书检测", href: "/cert" },
      { icon: "fab fa-jenkins", text: "CI", href: "/jenkins" },
      { icon: "fab fa-docker", text: "CI", href: "/docker" },
      // { icon: "mdi-send", text: "短连接", href: "/shorturl" },
      { divider: true },
      { heading: "Person" },
      { icon: "settings", text: "Settings", href: "/setting" },
    ],
  }),
  computed: {
    mini() {
      return this.$store.state.mini;
    },
  },
  methods: {},
};
</script>


<style>
</style>