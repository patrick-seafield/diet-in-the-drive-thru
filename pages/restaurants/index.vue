<template>
  <section class="container">
    <h1 class="title">
      RESTAURANTS
    </h1>
    <ul class="restaurants">
      <li v-for="(restaurant, index) in restaurants" :key="index" class="restaurant">
        <nuxt-link :to="{ name: 'id', params: { id: restaurant.id }}">
          {{ restaurant.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>