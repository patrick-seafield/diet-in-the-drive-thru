<template>
  <section class="container">
    <h1 class="title">Menu Item: {{ item.name }}</h1>
    <table class="menu-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price($)</th>
          <th>Calories</th>
          <th>Carbohydrates(g)</th>
          <th>Sodium(g)</th>
          <th>Protein(g)</th>
          <th>Fat(g)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="menu-item">
          <td>
              {{ item.name }}
          </td>
          <td>{{ item.price}}</td>
          <td>{{ item.cal }}</td>
          <td>{{ item.carb }}</td>
          <td>{{ item.sodium }}</td>
          <td>{{ item.protein }}</td>
          <td>{{ item.fat }}</td>
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
    return axios.get('/api/menuItems/' + params.id)
      .then((res) => {
        return { item: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Menu Item not found' })
      })
  },
  head () {
    return {
      title: `Menu Items: ${this.item.name}`
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
