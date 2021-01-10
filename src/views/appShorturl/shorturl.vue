<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col cols="8">
        <v-scale-transition hide-on-leave>
          <v-text-field
            dense
            hide-details
            rounded
            filled
            v-show="expand"
            placeholder="this is long"
            class="overline"
          ></v-text-field>
        </v-scale-transition>
        <v-scale-transition hide-on-leave>
          <v-text-field
            dense
            hide-details
            rounded
            outlined
            v-show="!expand"
            placeholder="this is short"
            class="overline"
          ></v-text-field>
        </v-scale-transition>
      </v-col>
      <v-col cols="2">
        <v-btn text @click="expand = !expand" class="overline"
          ><v-icon :color="expand?'green':'red'">mdi-heart</v-icon>change mode</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "shorturl",
  data: () => ({
    longurl: true,
    shorturl: false,
    expand: false,
  }),
  methods: {
    changeMod: function () {
      if (this.longurl) {
        this.longurl = false;
        this.shorturl = true;
      } else {
        this.shorturl = false;
        this.longurl = true;
      }
    },
  },
};
</script>

<style>
</style>