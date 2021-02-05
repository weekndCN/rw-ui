<template>
  <v-navigation-drawer
    clipped
    app
    floating
    :color="$vuetify.theme.dark ? '#0f0f0f' : '#f5f5f5'"
  >
    <v-list dense :color="$vuetify.theme.dark ? '#0f0f0f' : '#f5f5f5'">
      <template v-for="(item, i) in items">
        <v-row v-if="item.heading" :key="i" align="center" no-gutters>
          <v-col cols="12">
            <v-subheader
              v-if="item.heading"
              class="subtitle-1 font-weight-bold ml-2"
            >
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
  name: "accountnavigator",
  data: () => ({
    items: [
      { heading: "设置" },
      {
        icon: "mdi-account-circle-outline",
        text: "账号",
        href: "/account",
      },
      {
        icon: "mdi-at",
        text: "邮箱",
        href: "/account/mail",
      },
      {
        icon: "mdi-reminder",
        text: "消息通知",
        href: "/account/reminder",
      },
    ],
  }),
  computed: {},
  methods: {},
};
</script>


<style>
</style>