<template>
  <section class="container">
    <MiniMap :position="{ lat: Number(restaurants.lat), lng: Number(restaurants.lng) }" />
    <h1 class="title">
      Restaurant
    </h1>
    <h2 class="info">
      {{ restaurants.name }}
      <dl>
        <dt>Lat</dt>
        <dd>{{ restaurants.lat }}</dd>
        <dt>Lng</dt>
        <dd>{{ restaurants.lng }}</dd>
        <dt>Customer Avg. Rating</dt>
        <dd>{{ restaurants.rating }}</dd>
        <dt>Opening Time</dt>
        <dd>{{ restaurants.open }}</dd>
        <dt>Closing Time</dt>
        <dd>{{ restaurants.close }}</dd>
      </dl>
    </h2>
    <nuxt-link class="button" to="/restaurants">
      Restaurants
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import MiniMap from '~/components/MiniMap'

export default {
  name: 'restaurant_id',
  asyncData ({ params, error }) {
    return axios.get('/api/restaurants/' + params.id)
      .then((res) => {
        return { restaurants: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Restaurant not found' })
      })
  },
  head () {
    return {
      title: `Restaurant: ${this.restaurants.name}`
    }
  },
  components: {
    MiniMap
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
