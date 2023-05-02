<template>
  <div style="height: 50vh; width: 100%">
    <!-- TODO salir que esté por defecto en bcn con el zoom adecuado -->
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  name: "map-component",
  components: {
    LMap,
    LTileLayer,
  },
  props: {
    mapWidthPerc: Number,
  },
  data() {
    return {
      zoom: 12,
    };
  },
};
</script>

<style scoped></style>
