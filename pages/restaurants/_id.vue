<template>
  <section class="container">
    <MiniMap :position="{ lat: Number(restaurants.lat), lng: Number(restaurants.lng) }" />
    <h1 class="title">
      {{ restaurants.name }}
    </h1>
    <table class="restaurants-table">
      <thead>
        <tr>
          <th>Rating</th>
          <th>Open</th>
          <th>Close</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ restaurants.rating }}</td>
          <td>{{ restaurants.open }}</td>
          <td>{{ restaurants.close }}</td>
        </tr>
      </tbody>
    </table>
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
.restaurants-table
{
  margin-left: auto;
  margin-right: auto;
}
.restaurants-table td,
.restaurants-table th
{
  padding: 0.25rem;
}
.button
{
  margin-top: 30px;
}
</style>
