<template>
  <section class="container">
    <h1 class="title">Menu Item: {{ name }}</h1>
    <table class="menu-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Calories</th>
          <th>Carbohydrates</th>
          <th>Sodium</th>
          <th>Protein</th>
          <th>Fat</th>
        </tr>
      </thead>
      <tbody>
        <tr class="menu-item">
          <td>
            <nuxt-link :to="'/api/menuItems/' + menu_id">
              {{ name }}
            </nuxt-link>
          </td>
          <td>{{ cal }}</td>
          <td>{{ carb }}</td>
          <td>{{ sodium }}</td>
          <td>{{ protein }}</td>
          <td>{{ fat }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'menu_id',
  asyncData ({ params, error }) {
    try {
      const { data } = axios.get('/api/menuItems/{+params.menu_id}')
      return data
    } catch (e) {
      error({ message: 'Menu Item not found', statusCode: 404 })
    }
  },
  head () {
    return {
      title: `Menu Items: ${this.name}`
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
.menu-table
{
  margin-left: auto;
  margin-right: auto;
}
.menu-table th,
.menu-table td {
  padding: 0.25rem;
}
.menu-items
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-item
{
  margin: 10px 0;
}
</style>
