<template>
  <div style="height: 50vh; width: 100%" class="sticky-top">
    <l-map :options="{ scrollWheelZoom: true }" ref="map" v-model:zoom="zoom" :center="center">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
        name="OpenStreetMap"></l-tile-layer>
      <l-marker v-for="localizacion in localizaciones" :key="localizacion.nombre"
        :lat-lng="getMarker(localizacion.position)" :name="localizacion.nombre" @click="modifyCenter($event)"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  name: "map-component",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: {
    mapWidthPerc: Number,
    localizaciones: Array,
    center: Array,
  },
  data() {
    return {
      zoom: 15,
      addedMarker: []
    };
  },
  methods: {
    getMarker(array) {
      return latLng(array[0], array[1]);
    },
    modifyCenter(event) {
      this.zoom = 17;
      console.log(event);
      this.$emit("modifyCenter", event.latlng);
    },
    addMarker(event) {
      console.log(event);
    }
  },
};
</script>

<style scoped></style>
