<template>
  <section class="container">
    <h1 class="title">Menu Items</h1>
    <table
        style="width: 35%"
        align="center"
        class="meal-cart">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in menuItems" :key="index" class="menu-item">
                <td>
                    <nuxt-link :to="'/menuItems/' + item.menu_id">
                        {{ item.name }}
                    </nuxt-link>
                </td>
                <td>${{ item.price }}</td>
                <td>
                    <p class="text-center">
                        {{ item.orderCount }} <br>
                    </p>
                </td>
                <td>
                    <button @click="incrementCounter(item.menu_id)" size="mini">
                        +
                    </button>
                    <button @click="decrementCounter(item.menu_id)" size="mini">
                        -
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
	
	<h1 class="title">My Order Summary</h1>
    <table class="menu-table">
        <thead>
            <tr>
                <th>Qty:</th>
                <th>Price</th>
                <th>Calories</th>
                <th>Carbohydrates</th>
                <th>Sodium</th>
                <th>Protein</th>
                <th>Fat</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ totalOrderCount }}</td>
                <td>${{ totalPrice }} </td>
                <td>{{ totalCalories }} </td>
                <td>{{ totalCarbs }}g</td>
                <td>{{ totalSodium }}g</td>
                <td>{{ totalProtein }}g</td>
                <td>{{ totalFat }}g</td>
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

     // Create an order count for each menu item.
     for (let i = 0; i < data.length; i++) {
       data[i].orderCount = 0
     }

     return {
       menuItems: data
     }
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
     incrementCounter (menuId) {
       let index = this.menuItems.findIndex(item => item.menu_id === menuId)
       this.menuItems[index].orderCount = this.menuItems[index].orderCount + 1
     },
     decrementCounter (menuId) {
       let index = this.menuItems.findIndex(item => item.menu_id === menuId)
       if (this.menuItems[index].orderCount > 0) {
         this.menuItems[index].orderCount = this.menuItems[index].orderCount - 1
       }
     }
   },
   computed: {
     totalOrderCount () {
       let total = 0
       this.menuItems.forEach(mitem => {
         total += mitem.orderCount
       })
       return total
     },
     totalPrice () {
       let total = 0
       this.menuItems.forEach(mitem => {
         total += (mitem.price * mitem.orderCount)
       })
       return total
     },
     totalCalories () {
       let total = 0
       this.menuItems.forEach(mitem => {
         total += (mitem.cal * mitem.orderCount)
       })
       return total
     },
     totalCarbs () {
       let total = 0
       this.menuItems.forEach(mitem => {
         total += (mitem.carb * mitem.orderCount)
       })
       return total
     },
     totalSodium () {
       let total = 0
       this.menuItems.forEach(mitem => {
         total += (mitem.sodium * mitem.orderCount)
       })
       return total
     },
     totalProtein () {
       let total = 0
       this.menuItems.forEach(mitem => {
         total += (mitem.protein * mitem.orderCount)
       })
       return total
     },
     totalFat () {
       let total = 0
       this.menuItems.forEach(mitem => {
         total += (mitem.fat * mitem.orderCount)
       })
       return total
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
