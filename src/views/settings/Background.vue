<template>
  <v-container fluid>
    <v-item-group v-model="selected">
      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-item v-slot:default="{ active, toggle }">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              height="176"
              width="176"
              style="border-radius: 5px"
              class="text-right pa-2"
              @click="toggle"
            >
              <v-btn icon dark>
                <v-icon :color="active ? 'pink' : 'white'">
                  {{ active ? "mdi-heart" : "mdi-heart-outline" }}
                </v-icon>
              </v-btn>
            </v-img>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>


<script>
export default {
  name: "background",
  data: () => ({
    selected: [],
  }),
  computed: {
      bgchoice() {
        console.log(this.selected);
      },
  },
  watch: {
      bgimg(val) {
          console.log(this.selected);
      }
  },
  methods: {
  },
};
</script>


<style>
</style>