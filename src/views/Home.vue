<template>
  <div class="home">
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            />
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="4">
        <active-calendar />
        <today />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <active-list />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ActiveCalendar from '../components/ActiveCalendar.vue';
import ActiveList from '../components/ActiveList.vue';
import Today from '../components/Today.vue';
export default {
  name: 'Home',
  components: { ActiveCalendar, Today, ActiveList },
  data: () => ({
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
  }),
  methods: {},
};
</script>

<style>
.home .v-card__title {
  padding-top: 8px;
  padding-bottom: 8px;
}
.home .v-list-item__content {
  text-align: left;
}
</style>
