<template>
  <h1>Tesoros</h1>
  <TesoroItem
    v-for="(tesoro, index) in localizaciones"
    :key="index"
    :nombre="tesoro.nombre"
    :descripcion="tesoro.descripcion"
    :id="`tesoro${index}`"
  >
  </TesoroItem>
</template>

<script>
import TesoroItem from "./TesoroItem.vue";
export default {
  name: "tesoros-box",
  components: {
    TesoroItem,
  },
  data() {
    return {};
  },
  props: {
    localizaciones: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
