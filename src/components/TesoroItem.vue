<template>
  <div @click="posicionarCentro" class="py-4 px-5 border-tesoro accordion-item">
    <h2 class="accordion-header d-flex flex-row justify-content-between">
      <button class="w-50 accordion-button collapsed" type="button" data-bs-toggle="collapse"
        :data-bs-target="getRef(referenceId)" aria-expanded="false" aria-controls="collapseTwo">
        <h3>{{ nombre }}</h3>
      </button>
      <div v-if="isAdmin" class="z-1">

        <button @click="abrirDialogo('dialogo1')" class="trash-btn"><font-awesome-icon
            icon="fa-solid fa-trash fa-lg" /></button>
        <dialog id="dialogo1">
          <p>¿Estás seguro de que quieres eliminar este tesoro?</p>
          <button type="button" @click="cerrarDialogo('dialogo1')">Volver</button>
          <button type="button" @click="cerrarSesion"> Cerrar Sesión</button>
        </dialog>

        <router-link to="/"><span><font-awesome-icon class="ms-4"
              icon="fa-solid fa-square-pen fa-lg" /></span></router-link>
      </div>
    </h2>
    <div :id="referenceId" class="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div class="d-flex flex-column">
        <div v-if="descubierto || isAdmin" class="accordion-body">
          <p>{{ descripcion }}</p>
        </div>
        <div v-else class="accordion-body blur">
          <p>{{ descripcion }}</p>
        </div>
        <div>
          <img src="../../public/assets/imgs/dummy_photo.jpg" class="rounded float-start" alt="dummy-phot" />
        </div>
        <div v-if="favorito && !isAdmin" class="accordion-body">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill"
            viewBox="0 0 16 16">
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </div>

        <div class="d-flex flex-column g-3 justify-content-center">
          <!-- HACER UN FOR CON TODAS LAS RESENAS  -->
          <Resena>
          </Resena>
        </div>
        <div></div>
        <button @click="mostrarTextArea" class="w-40" v-if="descubierto && !isAdmin">
          {{ resenaButtonText }}
        </button>
        <form class="m-3" v-show="textArea" method="post">
          <textarea name="escribirResena" id="escribirResena" cols="30" rows="10"
            placeholder="Escribe tu reseña..."></textarea><br />
          <button type="submit">Enviar Resena</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Resena from "./Resena.vue";

export default {
  name: "tes10pxoro-item",
  components: {
    Resena,
  },
  data() {
    return {
      textArea: false,
      resenaButtonText: "Añadir Reseña",
    };
  },
  props: {
    referenceId: String,
    nombre: String,
    descripcion: String,
    favorito: Boolean,
    descubierto: Boolean,
    localizacion: Array,
    isAdmin: Boolean,
  },
  methods: {
    posicionarCentro() {
      this.$emit("posicionarCentro", { position: this.localizacion });
    },
    mostrarTextArea() {
      this.textArea = !this.textArea;
      this.resenaButtonText =
        this.resenaButtonText === "Añadir Reseña" ? "Ocultar" : "Añadir Reseña";
    },
    getRef(ref) {
      return "#" + ref;
    },
    abrirDialogo(id) {
      const dialogo = document.getElementById(id);
      dialogo.show();
    },
    cerrarDialogo(id) {
      const dialogo = document.getElementById(id);
      dialogo.close();
    },
    cerrarSesion() {
      this.$router.push("/")
    }
  },
};
</script>

<style scoped>
.border-tesoro {
  border-bottom: 2px solid var(--dark-gray);
}

img {
  min-height: 200px;
  max-height: 500px;
}

.blur {
  filter: blur(10px);
  -webkit-filter: blur(10px);
}

.icons-pos {
  position: absolute;
}

.z-1 {
  z-index: 1;
}

.fa-trash {
  color: black;
  transition: color 0.3 ease-in-out;
}

.fa-trash:hover {
  color: red;
}

.fa-square-pen {
  color: black;
}

.fa-square-pen:hover {
  color: lightseagreen;
}

.trash-btn {
  border: none;
  background: none;
}

dialog[open] {
  position: fixed;
  width: 15vw;
  max-width: 300px;
  min-height: 80px;
  top: 10px;
  z-index: 99;
  font-size: 15px;
}
</style>
