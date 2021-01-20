<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list dense elevation="24">
      <v-list-item-group color="green">
        <v-list-item @click="dialogShow()">
          <v-list-item-icon>
            <v-icon small>mdi-circle-edit-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="caption">编辑任务</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon small>mdi-circle-edit-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="caption">编辑任务</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon small>mdi-circle-edit-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="caption">编辑任务</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-dialog v-model="dialog" width="400" height="400">
      <v-card width="400" height="400" color="red"> </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "jobview",
  data: () => ({
    dialog: false,
  }),
  methods: {
    dialogShow() {
      const bool = this.dialog;
      this.dialog = !bool;
      console.log(this.dialog);
    },
  },
};
</script>

<style>
</style>