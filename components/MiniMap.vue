<template>
  <div class="mini-map">

    <GmapMap
      :center="position"
      :zoom="16"
      map-type-id="roadmap"
      style="width: 100%; height: 100%"
    >
      <GmapMarker :position="position" :clickable="false" />

    </GmapMap>
  </div>
</template>

<script>
 export default {
   props: {
     position: {
       type: Object,
       required: true
     }
   }
 }
</script>

<style>
 .mini-map {
   width: 240px;
   height: 240px;
   display: inline-block;
 }
</style>
