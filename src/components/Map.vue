<template>
  <div style="height: 50vh; width: 100%">
    <l-map
      :options="{ scrollWheelZoom: false }"
      ref="map"
      v-model:zoom="zoom"
      :center="[41.386415, 2.169987]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker
        v-for="localizacion in localizaciones"
        :key="localizacion.nombre"
        :lat-lng="getMarker(localizacion.position)"
      ></l-marker>
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
  },
  data() {
    return {
      zoom: 15,
    };
  },
  methods: {
    getMarker(array) {
      return latLng(array[0], array[1]);
    },
  },
};
</script>

<style scoped></style>
