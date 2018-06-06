<template>
  <section class="container">
    <h1 class="title">
      Map
    </h1>
    <div class="restaurant-map">
      <GmapMap
        :center="mapCenter"
        :zoom="12"
        map-type-id="roadmap"
        style="width: 100%; height: 100%"
      >
        <gmap-info-window :options="infoOptions" :position="infoWindowPos"
                          :opened="infoWinOpen" @closeclick="infoWinOpen=false">
          <nuxt-link :to="infoWindowLink">{{ currentRestaurantName() }}</nuxt-link>
        </gmap-info-window>
        <GmapMarker
          v-for="(r, index) in restaurants"
          :key="r.restaurant_id"
          :position="r.position"
          :clickable="true"
          @click="toggleInfoWindow(r)"
        />
      </GmapMap>
    </div>
  </section>
</template>

<script>
 import axios from '~/plugins/axios'

 export default {
   async asyncData () {
     let { data } = await axios.get('/api/restaurants')
     // Convert the latitudes and longitudes to numbers
     for (let i = 0; i < data.length; i++) {
       data[i].lat = Number(data[i].lat)
       data[i].lng = Number(data[i].lng)
       data[i].position = { lat: data[i].lat, lng: data[i].lng }
     }
     return { restaurants: data }
   },
   data () {
     return {
       mapCenter: {
         lat: 44.567747,
         lng: -123.274015
       },
       infoWindowPos: {
         lat: 44.567747,
         lng: -123.274015
       },
       infoOptions: {
         pixelOffset: {
           width: 0,
           height: -35
         }
       },
       infoWindowLink: '/map',
       infoWinOpen: false,
       currentRestaurant: null
     }
   },
   head () {
     return {
       title: 'Map'
     }
   },
   methods: {
     toggleInfoWindow (r) {
       // If no info window is present, or it's present on another marker, switch it to r.
       if (this.currentRestaurant === null ||
           this.currentRestaurant.restaurant_id !== r.restaurant_id) {
         this.currentRestaurant = r
         this.infoWindowPos = r.position
         this.infoWindowLink = '/restaurants/' + r.restaurant_id
         this.infoWinOpen = true
         // Otherwise hide the info window.
       } else {
         this.currentRestaurant = null
         this.infoWinOpen = false
       }
     },
     currentRestaurantName () {
       if (this.currentRestaurant === null) {
         return ''
       } else {
         return this.currentRestaurant.name
       }
     }
   }
 }
</script>

<style>
 .restaurant-map {
   margin: auto;
   width: 90vw;
   height: 70vh;
   
 }

</style>
