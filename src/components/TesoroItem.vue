<template>
  <div @click="posicionarCentro" class="py-4 px-5 border-tesoro accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="referenceId"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        <h3>{{ nombre }}</h3>
      </button>
    </h2>
    <div
      :id="id"
      class="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div v-if="descubierto" class="accordion-body">
        <p>{{ descripcion }}</p>
      </div>
      <div v-else class="accordion-body blur">
        <p>{{ descripcion }}</p>
      </div>
      <div v-if="favorito" class="accordion-body">
        <p>Favorito</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tesoro-item",
  data() {
    return {
      referenceId: `#${this.id}`,
    };
  },
  props: {
    nombre: String,
    descripcion: String,
    id: Number,
    favorito: Boolean,
    descubierto: Boolean,
    localizacion: Array,
  },
  methods: {
    posicionarCentro() {
      this.$emit("posicionarCentro", { position: this.localizacion });
    },
  },
};
</script>

<style scoped>
.border-tesoro {
  border-bottom: 2px solid var(--dark-gray);
}

.blur {
  filter: blur(10px);
  -webkit-filter: blur(10px);
}
</style>
