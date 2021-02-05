<template>
  <div class="text-center">
    <v-card width="300">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-badge
            bordered
            bottom
            overlap
            content="6"
            color="red"
            offset-x="25"
            offset-y="20"
          >
            <v-avatar size="100" class="mt-3">
              <img
                src="https://avatars0.githubusercontent.com/u/29080380?s=460&amp;u=8acc9973cc9614290d82de1ff6d182af02b09a69&amp;v=4"
                alt="John"
              />
            </v-avatar>
          </v-badge>
        </v-row>
        <v-list dense rounded>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="overline mt-3"
                >WEEKND</v-list-item-title
              >
              <v-list-item-subtitle>weeknd.su@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn dense outlined class="overline mb-3" rounded to="/account"
          >管理你的个人账号信息</v-btn
        >
        <v-divider></v-divider>

        <v-list dense rounded>
          <v-list-item-group color="indigo">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-github</v-icon></v-list-item-icon
              >
              <v-list-item-content class="caption">
                前往GitHub查看源代码
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="teal"
                  >mdi-head-sync-outline
                </v-icon></v-list-item-icon
              >
              <v-list-item-content class="caption">
                刷新同步个人账号信息
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-divider></v-divider>
        <v-btn depressed class="overline mt-4 mb-4" small rounded to="/login"
          >退出</v-btn
        >
        <v-divider></v-divider>
        <p class="caption text-center mt-5 overline">巅峰.永无止尽</p>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "profit",
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
};
</script>