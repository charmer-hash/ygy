<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>活动详情页</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title v-model="tab">
          <v-tab>正文</v-tab>
          <!-- <v-tab>标题</v-tab>
          <v-tab>留言板</v-tab> -->
        </v-tabs>
      </template>
    </v-app-bar>  
    <!-- 导航条结束，标题内容 -->

   <v-tabs-items v-model="tab" class="tap">
      <v-tab-item v-for="item in list" :key="item.tab">
         <v-card
    :loading="loading"
  
    max-width="800"
  >
    
    <v-img
      height="300"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>活动主题:</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
       正文
      </div>

      <div>正文内容：Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>发起人:</v-card-title>
    <v-card-title>开始时间:</v-card-title>
    <v-card-title>截止时间:</v-card-title>

       <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="submit"
      >
        提交
      </v-btn>
    </v-card-actions>
    

  </v-card>
      </v-tab-item>
    </v-tabs-items>

<!-- 留言板功能 -->
   <div class="text-area">
      <textarea placeholder="请输入评论...">
 
      </textarea>
    </div>




    <v-sheet
      id="scrolling-techniques-3"
      class=""
      max-height="1600"
    >
      <v-container style="height: 2000px;">
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
    data(){
      return{
        loading:false,
        selection:1,
        tab:'',
        list:[
            {tab:'正文' ,content:"正文内容,发起者,开始，结束日期，"},
        ],
        
      }
    },
    methods:{
     submit(){
            this.loading = true;
            setTimeout(() => (this.loading = false), 2000)
      }
    }

}
</script>

<style >
    .tap{
      position:absolute;
      top:300px;
      left:100px;
    }
    .v-window-item{
      height:1600px;
      width:800px;
    }
    .v-card__title{
      padding: 10px;
    }
   
   
    .text-area{
      position: absolute;
      top:1000px;
      left:100px;
      width:300px;
      height:300px;
    }
   
</style>