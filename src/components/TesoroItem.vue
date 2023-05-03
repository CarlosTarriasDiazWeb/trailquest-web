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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
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
