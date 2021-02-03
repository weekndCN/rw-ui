<template>
  <v-card rounded="xl">
    <v-toolbar color="grey darken-4 white--text">
      <v-toolbar-title>说明</v-toolbar-title></v-toolbar
    >
    <v-card-text>
      <v-list dense rounded="xl">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>天数</v-list-item-title>
            <v-list-item-subtitle class="font-weight-regular"
              >圆圈内的数字代表到期时间，单位为天.红色则表示到期时间<strong>低于2天</strong>或者域名<strong
                >不是HTTPS</strong
              ></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>issuer</v-list-item-title>
            <v-list-item-subtitle class="font-weight-regular"
              >提供证书的<strong>生产者</strong>或者<strong
                >组织</strong
              ></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>创建时间</v-list-item-title>
            <v-list-item-subtitle class="font-weight-regular"
              >生效证书的<strong>申请时间</strong></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>结束时间</v-list-item-title>
            <v-list-item-subtitle class="font-weight-regular"
              >生效证书的<strong>到期时间</strong></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>状态</v-list-item-title>
            <v-list-item-subtitle class="font-weight-regular"
              ><strong>BAD </strong
              >代表此域名不是HTTPS或者域名的证书无效<strong> GOOD </strong
              >代表正常</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>检测时间</v-list-item-title>
            <v-list-item-subtitle class="font-weight-regular"
              >状态上方的日期 代表此域名有效期检测的<strong
                >系统时间</strong
              ></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "certdesc",
};
</script>

<style>
</style>