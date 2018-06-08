<template>
  <section class="container">
    <h1 class="title">Menu Items</h1>
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
        <tr v-for="(item, index) in menuItems" :key="index" class="menu-item">
		  <td>
            <nuxt-link :to="'/menuItems/' + item.menu_id">
              {{ item.name }}
            </nuxt-link>
          </td>
          <td>{{ item.price }}</td>
          <td>{{ item.cal }}</td>
          <td>{{ item.carb }}</td>
          <td>{{ item.sodium }}</td>
          <td>{{ item.protein }}</td>
          <td>{{ item.fat }}</td>
        </tr>
      </tbody>
    </table>
	
	<h1 class="title">My Order</h1>
    <table
        :data="cart"
        stripe
        style="width: 35%"
        align="center"
        class="meal-cart">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price($)</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in menuItems" :key="index" class="menu-item">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <p class="text-center">
                            {{ counter }} <br>
                        </p>
                    </td>
                    <td>
                        <button @click="incrementCounter" size="mini">
                        +
                        </button>
                        <button @click="decrementCounter" size="mini">
                        -
                        </button>
                    </td>
            </table-column>
            </tr>
            </tbody>
    </table>
    </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/menuItems')
    return { menuItems: data }
  },
  head () {
    return {
      title: 'Menu Items'
    }
  },
  data () {
    return {
      title: 'Counter',
      counter: 0
    }
  },
  methods: {
    incrementCounter () {
      this.counter++
    },
    decrementCounter () {
      this.counter--
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
