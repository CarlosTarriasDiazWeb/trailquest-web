<template>
  <div @click="posicionarCentro" class="border-tesoro accordion-item">
    <h2 class="accordion-header d-flex flex-row justify-content-between">
      <button
        class="px-4 py-4 accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="getRef(referenceId)"
        aria-expanded="false"
        @click="getResenas"
        aria-controls="collapseTwo"
      >
        <div class="container d-flex align-items-center">
          <h3 class="m-0 w-25">{{ titulo }}</h3>
          <star-rating
            v-bind:increment="0.5"
            :rating="media"
            :read-only="true"
            :show-rating="false"
            :readv-bind:max-rating="5"
            active-color="#fde480"
            v-bind:star-size="30"
          >
          </star-rating>
        </div>
      </button>
      <div id="adminButtons" v-if="isAdmin">
        <button @click="abrirDialogo('dialogo1')" class="trash-btn">
          <font-awesome-icon icon="fa-solid fa-trash fa-lg" />
        </button>
        <dialog id="dialogo1" class="w-50 z-1">
          <p>¿Estás seguro de que quieres eliminar este tesoro?</p>
          <button class="btn-delete w-50" type="button" @click="cerrarDialogo('dialogo1')">
            Volver
          </button>
          <br />
          <button class="btn-delete w-50" type="button" @click="eliminarTesoro('dialogo1')">
            Eliminar tesoro
          </button>
        </dialog>
        <button class="update-btn" @click="goToUpdate">
          <span><font-awesome-icon class="ms-4" icon="fa-solid fa-square-pen fa-lg" /></span>
        </button>
      </div>
    </h2>
    <div
      :id="referenceId"
      class="px-4 accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div class="d-flex flex-column">
        <div v-if="descubierto || isAdmin" class="accordion-body">
          <details>
            <summary>Saber más</summary>
            <p>{{ descripcion }}</p>
          </details>
        </div>
        <div v-else class="accordion-body blur">
          <p>{{ descripcion }}</p>
        </div>
        <div>
          <!-- //RECOGEMOS FOTO DEL SERVIDOR  -->
          <img :src="src" class="rounded float-start" alt="foto_tesoro" /><br />
        </div>
        <div class="d-flex flex-column g-3 justify-content-center">
          <Resena
            v-for="resena in resenas"
            :resId="resena.res_id"
            :key="resena.res_id"
            :comentario="resena.comentario"
            :puntuacion="resena.puntuacion"
            :user_name="resena.user_name"
            :foto="resena.foto"
          >
          </Resena>
        </div>
        <button @click="mostrarTextArea" class="w-40" v-if="descubierto && !isAdmin">
          {{ resenaButtonText }}
        </button>

        <form
          class="m-3"
          v-show="textArea"
          method="post"
          v-on:submit.prevent="anadirResena"
          enctype="multipart/form-data"
        >
          <div class="rate" v-if="descubierto && !isAdmin">
            <star-rating
              v-bind:increment="0.5"
              @update:rating="setRating"
              :show-rating="false"
              :readv-bind:max-rating="5"
              active-color="#fde480"
              v-bind:star-size="30"
            >
            </star-rating>
          </div>
          <input type="file" name="foto-resena" id="foto-resena" /><br />
          <textarea
            class="txt-resena"
            name="escribirResena"
            id="escribirResena"
            cols="30"
            rows="10"
            placeholder="Escribe tu reseña..."
            v-model="comentario"
          ></textarea
          ><br />
          <button class="enviar-res" type="submit">Enviar Reseña</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Resena from "./Resena.vue";
import StarRating from "vue-star-rating";

export default defineComponent({
  name: "tes10pxoro-item",

  components: {
    Resena,
    StarRating,
  },
  data() {
    return {
      textArea: false,
      resenaButtonText: "Añadir Reseña",
      src: `http://localhost:8081/tesorosweb/imagenes/${this.fotoTesoro}`,
      resenas: [],
      comentario: "",
      rating: 0,
      media: "",
    };
  },
  props: {
    referenceId: String,
    titulo: String,
    descripcion: String,
    favorito: Boolean,
    descubierto: Boolean,
    localizacion: Array,
    isAdmin: Boolean,
    fotoTesoro: String,
    itemID: Number,
    valoracion: String,
  },
  methods: {
    posicionarCentro() {
      //Para reposicionar el centro del mapa a la localización de este tesoro.
      this.$emit("posicionarCentro", { position: this.localizacion });
    },
    mostrarTextArea() {
      this.textArea = !this.textArea;
      this.resenaButtonText =
        this.resenaButtonText === "Añadir Reseña" ? "Ocultar" : "Añadir Reseña";
    },
    getRef(ref) {
      //Para poder asociar cada tesoro con su desplegable de Bootstrap.
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
    eliminarTesoro(id) {
      //Cerramos el cuadro de diálogo referenciado por la id pasada como parámetro.
      const dialogo = document.getElementById(id);
      dialogo.close();

      //Hacer petición asíncrona para eliminar este tesoro - TODO
      const axios = require("axios");
      axios
        .delete(`http://localhost:8081/tesorosweb/${this.itemID}`)
        .then(
          //Forzamos refresco del componente
          this.$router.push("/admin")
        )
        .catch((error) => console.log(error));
    },
    goToUpdate() {
      //Para tener el formulario de actualización lleno con los datos actuales del tesoro, pasamos la información mediante la ruta.
      this.$router.push({
        path: "actualizar",
        query: {
          itemID: this.itemID,
          titulo: this.titulo,
          descripcion: this.descripcion,
          latitud: this.localizacion[0],
          longitud: this.localizacion[1],
          fotoTesoro: this.fotoTesoro,
        },
      });
    },
    anadirResena() {
      //Recoger datos del formulario
      const formData = new FormData();
      const resenaFoto = document.getElementById("foto-resena");
      console.log(resenaFoto.files[0]);
      let fotoEnviar = null;

      if (resenaFoto.files[0] === undefined || resenaFoto.files[0] === null) fotoEnviar = "";
      else {
        fotoEnviar = resenaFoto.files[0];
      }
      formData.append("comentario", this.escapeString(this.comentario.trim()));
      formData.append("puntuacion", this.rating);
      formData.append("foto", fotoEnviar);
      formData.append("usu_username", this.getValue("usu_username"));

      const axios = require("axios");
      axios
        .post(
          `http://localhost:8081/tesorosweb/${this.getValue("usu_id")}/resena/${this.itemID}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.$router.push("/jugador");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setRating(val) {
      this.rating = val;
    },
    getValue(key) {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`))
        ?.split("=")[1];
    },
    escapeString(string) {
      //Para poder crear el objeto JSON correctamente en las ruta /tesoros de la API.
      return `'${string}'`;
    },
  },
  mounted() {
    //Hacemos petición asíncrona de las reseñas del tesoro
    const axios = require("axios");
    axios
      .get(`http://localhost:8081/tesorosweb/${this.itemID}/resena`)
      .then((response) => {
        this.resenas = Array.from(response.data);
        if (this.resenas > 0) {
          //Calculamos puntuación del tesoro en función de las puntuaciones de las reseñas
          this.media = (
            (this.resenas.reduce((total, resena) => total + resena.res_puntuacion) /
              this.resenas.length) %
            5
          ).toString();
        } else {
          this.media = "0.0";
        }
      })
      .catch((error) => console.log(error));
  },
});
</script>

<style scoped>
.border-tesoro {
  border-bottom: 2px solid var(--dark-gray);
}

img {
  min-height: 200px;
  max-height: 500px;
}

#dialogo1 {
  position: absolute;
  border-radius: 1em;
  border: none;
  background-color: #d9d9d9;
  z-index: 100;
}

summary {
  color: #a7a8a8;
}

.btn-delete {
  background-color: #59a888;
  border: none;
  border-radius: 1em;
  display: flex;
  justify-content: space-between;
}

.blur {
  filter: blur(10px);
  -webkit-filter: blur(10px);
}

.icons-pos {
  position: absolute;
}

.w-40 {
  border: none;
  border-radius: 1em;
  background-color: #a7a8a8;
  width: 210px;
  transition: all 0.3s ease-in-out;
  margin: 5px;
}

.w-40:hover {
  background-color: #59a888;
  color: #fff;
  cursor: pointer;
}

.txt-resena {
  border: none;
  border-radius: 1em;
  background-color: #d9d9d9;
  padding: 7px;
  width: 900px;
  height: 150px;
}

.enviar-res {
  border: none;
  border-radius: 1em;
  background-color: #59a888;
  transition: all 0.3s ease-in-out;
}

.enviar-res:hover {
  background-color: #78d3ae;
  color: #fff;
  cursor: pointer;
}

.z-1 {
  z-index: 1;
}

#adminButtons {
  width: 25%;
  display: flex;
  justify-content: center;
}

.fa-star {
  color: #fde380;
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
  box-shadow: 0px 26px 60px #000;
}

.update-btn {
  background: none;
  border: none;
}

.rate {
  margin: 5px;
}

/* Rating estrellas
.rate {
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  height: 46px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  height: 46px;
  padding: 0 10px;
}


.rate:not(:checked)>input {
  position: absolute;
  top: -9999px;
}

.rate:not(:checked)>input {
  position: absolute;
  top: -9999px;
}

.rate:not(:checked)>input {
  position: fixed;
  top: -9999px;

}

.rate:not(:checked)>label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #d9d9d9;
}

.rate:not(:checked)>label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #d9d9d9;
}

.rate:not(:checked)>label:before {
  content: '★ ';
}

.rate:not(:checked)>label:before {
  content: '★ ';
}

.rate>input:checked~label {
  color: #fde480;
}

.rate>input:checked~label {
  color: #fde480;
}

.rate:not(:checked)>label:hover,
.rate:not(:checked)>label:hover~label {
  color: #fde480;
}

.rate:not(:checked)>label:hover,
.rate:not(:checked)>label:hover~label {
  color: #fde480;
}

.rate>input:checked+label:hover,
.rate>input:checked+label:hover~label,
.rate>input:checked~label:hover,
.rate>input:checked~label:hover~label,
.rate>label:hover~input:checked~label {
  color: #fde480;
} */
</style>
