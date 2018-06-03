<template>
  <section class="container">
    <h1 class="title">
      RESTAURANTS
    </h1>
    <ul class="restaurants">
      <li v-for="(restaurant, index) in restaurants" :key="index" class="restaurant">
        <nuxt-link :to="'/restaurants/' + restaurant.id">
          {{ restaurant.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/restaurants')
    return { restaurants: data }
  },
  head () {
    return {
      title: 'Restaurants'
    }
  }
}
</script>

<style scoped>
.title
{
  color: #e53737;
  margin: 30px 0;
}
.restaurants
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.restaurant
{
  margin: 10px 0;
}
</style>
