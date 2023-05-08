<template>
  <section class="d-flex flex-column flex-grow-1">
    <TesoroItem
      v-for="(tesoro, index) in localizaciones"
      :key="index"
      :titulo="tesoro.titulo"
      :descripcion="tesoro.descripcion"
      :localizacion="tesoro.position"
      :favorito="tesoro.favorito"
      :descubierto="tesoro.descubierto"
      :referenceId="`tesoro${index}`"
      :fotoTesoro="tesoro.foto_tesoro"
      @posicionarCentro="posicionarCentro"
      :isAdmin="isAdmin"
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
    isAdmin: Boolean,
  },
  methods: {
    posicionarCentro(position) {
      this.$emit("posicionarCentro", position);
    },
  },
};
</script>

<style scoped></style>
