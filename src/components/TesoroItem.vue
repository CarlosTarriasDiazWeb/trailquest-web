<template>
  <div class="border-tesoro accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="referenceId"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        <p>{{ nombre }}</p>
      </button>
    </h2>
    <div
      :id="id"
      class="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <p>{{ descripcion }}</p>
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
  },
};
</script>

<style scoped>
.border-tesoro {
  border-bottom: 2px solid var(--dark-gray);
}
</style>
