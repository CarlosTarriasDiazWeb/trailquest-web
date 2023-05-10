<template>
  <section class="accordion d-flex flex-column flex-grow-1">
    <TesoroItem v-for="(tesoro, index) in localizaciones" :key="index" :titulo="tesoro.titulo"
      :descripcion="tesoro.descripcion" :localizacion="tesoro.position" :favorito="tesoro.favorito"
      :descubierto="tesoro.descubierto" :referenceId="`tesoro${index}`" :fotoTesoro="tesoro.foto_tesoro"
      :itemID="tesoro.itemID" @posicionarCentro="posicionarCentro" :isAdmin="isAdmin" :valoracion="tesoro.valoracion">
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
      //Propagamos el evento al componente padre (Jugador/Admin)
      this.$emit("posicionarCentro", position);
    },
  },
};
</script>

<style scoped></style>
