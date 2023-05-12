<template>
  <div class="card m-3">
    <div class="card-body">
      <h5 class="card-title">{{ user_name }}</h5>
      <p class="card-text">{{ comentario }}</p>
      <div class="rate">
        <star-rating
          v-bind:increment="0.5"
          :rating="puntuacion.toString()"
          :show-rating="false"
          :readv-bind:max-rating="5"
          active-color="#fde480"
          v-bind:star-size="30"
        >
        </star-rating>
      </div>
      <div><img :src="foto" class="rounded float-start" alt="foto_tesoro" /><br /></div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "resena-item",
  components: {
    StarRating,
  },
  data() {
    return {
      src: `http://135.181.182.115:8081/tesorosweb/imagenes/${this.foto}`
    };
  },
  props: {
    resId: Number,
    comentario: String,
    puntuacion: Number,
    foto: String,
    user_name: String,
  },
  methods: {},
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
