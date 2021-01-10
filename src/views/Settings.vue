<template>
  <v-card class="v-flex">
    <v-container fluid>
      <v-row>
        <v-list shaped dense class="mt-6" color="primar">
          <v-list-item-group v-model="window" color="indigo">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon" small></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-col>
          <v-window v-model="window" vertical>
            <v-window-item v-for="(item, i) in items" :key="i">
              <v-card
                flat
                class="overflow-y-auto"
                max-height="500"
              >
                <v-card-text>
                  <strong class="title mb-3">{{ item.text }}</strong>
                  <setting-background />
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
          <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn small class="mt-4" depressed>取消 </v-btn>
      <v-btn small class="mt-4" depressed color="deep-orange" dark>确定</v-btn>
    </v-card-actions>
    </v-container>
  </v-card>
</template>




<script>
import SettingBackground from "./settings/Background.vue";

export default {
  name: "setting",
  components: {
    SettingBackground,
  },
  data: () => ({
    length: 3,
    window: 1,
    items: [
      {
        icon: "mdi-inbox",
        text: "快捷键",
      },
      {
        icon: "mdi-star",
        text: "背景",
      },
      {
        icon: "mdi-send",
        text: "颜色和主题背景",
      },
    ],
  }),
};
</script>