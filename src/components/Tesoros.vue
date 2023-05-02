<template>
  <section class="d-flex flex-column flex-grow-1">
    <TesoroItem
      v-for="(tesoro, index) in localizaciones"
      :key="index"
      :nombre="tesoro.nombre"
      :descripcion="tesoro.descripcion"
      :localizacion="tesoro.position"
      :id="`tesoro${index}`"
      @posicionarCentro="posicionarCentro"
    >
    </TesoroItem>
  </section>
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
  methods: {
    posicionarCentro(position) {
      this.$emit("posicionarCentro", position);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
