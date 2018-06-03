<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Restaurant
    </h1>
    <h2 class="info">
      {{ restaurant.name }}
      <dl>
        <dt>Lat</dt>
        <dd>{{ restaurant.lat }}</dd>
        <dt>Lng</dt>
        <dd>{{ restaurant.lng }}</dd>
      </dl>
    </h2>
    <nuxt-link class="button" to="/">
      Restaurants
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/restaurants/' + params.id)
      .then((res) => {
        return { restaurant: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Restaurant not found' })
      })
  },
  head () {
    return {
      title: `Restaurant: ${this.restaurant.name}`
    }
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
