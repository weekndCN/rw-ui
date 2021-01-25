<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <v-row no-gutters>
          <v-col cols="12">
            <v-card shaped elevation="10" rounded="xl">
              <v-card dark flat>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
                  gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
                >
                  <v-container class="fill-height">
                    <v-row align="center">
                      <strong class="display-3 font-weight-regular mr-6 ml-2"
                        >24</strong
                      >
                      <v-row justify="center" align="center">
                        <div class="headline font-weight-light">Sunday</div>
                        <div class="text-uppercase font-weight-light mt-2 ml-2">
                          Jan 2021
                        </div>
                      </v-row>
                    </v-row>
                  </v-container>
                </v-img>
              </v-card>
              <v-card-text class="py-0">
                <v-timeline align-top dense>
                  <v-timeline-item color="pink" small>
                    <v-row class="pt-1" no-gutters>
                      <v-col cols="3">
                        <strong>17:51</strong>
                      </v-col>
                      <v-col>
                        <strong>定时任务</strong><v-icon x-small color="green">mdi-check-circle</v-icon>
                        <div class="caption">Mysql备份已完成</div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>

                  <v-timeline-item color="teal lighten-3" small>
                    <v-row class="pt-1" no-gutters>
                      <v-col cols="3">
                        <strong>18:00</strong>
                      </v-col>
                      <v-col>
                        <strong>App需求</strong><v-icon x-small color="pink">mdi-clock-alert</v-icon>
                        <div class="caption mb-2">Wiki App</div>
                        <v-avatar>
                          <v-img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                          ></v-img>
                        </v-avatar>
                        <v-avatar>
                          <v-img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                          ></v-img>
                        </v-avatar>
                        <v-avatar>
                          <v-img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                          ></v-img>
                        </v-avatar>
                      </v-col>
                    </v-row>
                  </v-timeline-item>

                  <v-timeline-item color="pink" small>
                    <v-row class="pt-1" no-gutters>
                      <v-col cols="3">
                        <strong>19:00</strong>
                      </v-col>
                      <v-col>
                        <strong>应用升级</strong><v-icon x-small color="pink">mdi-clock-alert</v-icon>
                      </v-col>
                    </v-row>
                  </v-timeline-item>

                  <v-timeline-item color="teal lighten-3" small>
                    <v-row class="pt-1" no-gutters>
                      <v-col cols="3">
                        <strong>20:00</strong>
                      </v-col>
                      <v-col>
                        <strong>Github仓库更新</strong><v-icon x-small color="pink">mdi-clock-alert</v-icon>
                        <div class="caption">Web App</div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="9">
        <v-card rounded="l-xl" elevation="12">
          <v-container fluid>
            <v-card-title class="overline"
              >overview<v-btn
                class="ml-3 caption"
                color="indigo"
                small
                depressed
                dark
                ><v-icon small class="mr-2">mdi-calendar-range</v-icon
                >选择日期</v-btn
              ></v-card-title
            >
            <v-divider></v-divider>
            <v-row class="mt-2">
              <v-slide-group v-model="model" center-active show-arrows>
                <v-slide-item
                  v-for="(item, index) in carddatas"
                  :key="index"
                  v-slot:default="{ active, toggle }"
                >
                  <v-card
                    class="ma-4"
                    @click="toggle"
                    elevation="8"
                    width="200"
                  >
                    <v-list dense :color="active ? 'teal' : ''">
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>{{ item.name }}</v-list-item-title>
                          <v-list-item-subtitle
                            class="font-weight-regular caption"
                            >每周数据统计</v-list-item-subtitle
                          >
                        </v-list-item-content>
                        <v-list-item-icon
                          ><v-icon
                            small
                            :color="item.status == 'up' ? 'green' : 'pink'"
                            v-text="
                              item.status == 'up'
                                ? 'mdi-trending-up'
                                : 'mdi-trending-down'
                            "
                          ></v-icon
                        ></v-list-item-icon>
                      </v-list-item>
                      <v-list-item>
                        <v-icon left>{{ item.icon }}</v-icon>
                      </v-list-item>
                      <v-list-item class="caption">
                        <strong>浏览量: </strong>{{ item.pv }}
                        <strong class="ml-3">下载: </strong>{{ item.uv }}
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-row>
            <v-card-title class="overline"
              >Events<v-btn-toggle class="ml-3" v-model="type">
                <v-btn small text value="bar">bar</v-btn>
                <v-btn small text value="trend">trend</v-btn></v-btn-toggle
              >
            </v-card-title>
            <v-divider></v-divider>
            <v-row class="center mt-4" no-gutters>
              <v-col cols="6">
                <v-sparkline
                  :value="value"
                  :gradient="gradient"
                  smooth
                  :type="type"
                  :stroke-linecap="lineCap"
                  :gradient-direction="gradientDirection"
                  fill
                  :auto-line-width="autoLineWidth"
                  auto-draw
                  :show-labels="showLabels"
                  :label-size="labelSize"
                ></v-sparkline>
              </v-col>
              <v-col cols="6"> </v-col>
            </v-row>
            <v-card-title class="overline"
              >Apps Store<v-btn-toggle class="ml-3">
                <v-btn small text>ALL</v-btn>
                <v-btn small text>Open</v-btn>
                <v-btn small text>InActive</v-btn>
              </v-btn-toggle>
            </v-card-title>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12">
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  class="elevation-1"
                  hide-default-footer
                >
                  <template v-slot:item.name="{ item }">
                    <v-chip small class="caption"
                      ><v-icon v-text="item.icon" left small></v-icon
                      >{{ item.name }}</v-chip
                    >
                  </template>
                  <template v-slot:item.date="{ item }">
                    <div class="caption">{{ item.date }}</div>
                  </template>
                  <template v-slot:item.status="{ item }">
                    <v-chip
                      dark
                      small
                      :color="item.status == 'Open' ? 'green' : 'pink'"
                      class="caption"
                      >{{ item.status }}</v-chip
                    >
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2"> mdi-cellphone-cog </v-icon>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const gradients = ["#f72047", "#ffd200", "#1feaea"];
import { desserts, headers, carddatas } from "@/api/demo";

export default {
  name: "Dashboard",
  data: () => ({
    model: null,
    picker: new Date().toISOString().substr(0, 10),
    value: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
    gradientDirection: "top",
    gradients,
    gradient: gradients,
    labelSize: 7,
    labels: ["Mon", "Tur", "Thu", "Tur", "Fri", "Sat", "Sun"],
    radius: 10,
    type: "trend",
    desserts: desserts,
    headers: headers,
    carddatas: carddatas,
  }),
};
</script>


<style>
</style>