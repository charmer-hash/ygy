<template>
  <v-card>
    <v-card-title>教研活动列表</v-card-title>
    <!-- 以下为vuetify list组件官方示例 -->
    <v-list three-line>
      <template v-for="(item, index) in items" >
        
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>
        <v-list-item v-else :key="item.title">
           
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

            <router-link :to="{ path:'/AciveDetail'} " tag="div">
          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
         </router-link>
         
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { fetchActiveList } from '@/api/active';

export default {
  data: () => ({
    items: [],
  }),
  methods: {
    async getActiveList() {
      this.items = await fetchActiveList();
    },
  },
  mounted() {
    this.getActiveList();
  },
};
</script>

<style></style>
