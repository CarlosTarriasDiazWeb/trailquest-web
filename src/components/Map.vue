<template>
  <div class="map" style="height: 50vh; width: 100%">
    <l-map :options="{ scrollWheelZoom: true }" ref="map" v-model:zoom="zoom" :center="center" :max-bounds='[[90, 180], [-90,-180]]' :min-zoom="3">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker
        v-for="localizacion in localizaciones"
        :key="localizacion.nombre"
        :lat-lng="getMarker(localizacion.position)"
        :name="localizacion.nombre"
        @click="modifyCenter($event)"
      >
        <!-- Solo funciona cogiendo los iconos desde páginas webs externas no desde imágenes del proyecto -->
        <l-icon
          :icon-size="[40, 37]"
          v-if="localizacion.descubierto && !isAdmin"
          icon-url="https://www.svgrepo.com/show/320147/open-treasure-chest.svg"
        />
        <!-- <l-icon :icon-size="[40, 37]" v-else-if="localizacion.favorito && !isAdmin"
          icon-url="https://www.svgrepo.com/show/13695/star.svg" /> -->
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";

export default {
  name: "map-component",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  props: {
    localizaciones: Array,
    center: Array,
    isAdmin: Boolean,
  },
  data() {
    return {
      zoom: 10,
      addedMarker: [],
    };
  },
  methods: {
    getMarker(array) {
      //Convertimos el array de posición a un tipo compatible para el componente LMarker
      return latLng(array[0], array[1]);
    },
    modifyCenter(event) {
      //Evento para reubicar centro a la posición del tesoro seleccionado en la lista
      this.zoom = 10;
      this.$emit("modifyCenter", event.latlng);
    },
  },
};
</script>

<style scoped>

.map{
  position: relative;
  z-index: 50;
}
</style>
