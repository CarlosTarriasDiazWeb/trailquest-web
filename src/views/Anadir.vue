<template>
  <header class="bg-green">
    <nav class="nav d-flex justify-content-end p-4">
      <RouterLink class="my-2 text-center volver nav-link" to="/admin">Volver al mapa</RouterLink>
    </nav>
  </header>

  <div class="fondoColor">
    <main class="container">
      <h1>Añadir tesoro</h1>
      <form novalidate v-on:submit.prevent="enviarFormulario" enctype="multipart/form-data">
        <label for="">Nombre monumento:</label><br />
        <input type="text" v-model="nombre" class="input" id="nom_tesoro" required /><br /><br />
        <input type="file" name="foto_tesoro" id="foto_tesoro" /><br /><br />
        <label for="">Descripción:</label><br />
        <textarea v-model="descripcion" name="" id="inf_tesoro" class="input" cols="30" rows="10"
          required></textarea><br /><br />

        <label for="latitud">Latitud:</label><br />
        <input v-model="latitud" type="number" class="input" id="latitud" required /><br /><br />
        <label for="longitud">Longitud:</label><br />
        <input v-model="longitud" type="number" class="input" id="longitud" required /><br /><br />
        <input type="button" @click="addMarker" class="marcador" value="Añadir Marcador" />
        <br /><br />

        <div class="fixed-bottom bg-accent py-3 w-100 d-flex flex-row justify-content-center">
          <input type="submit" value="Hecho" class="submit perfil-btn w-40 btn" />
        </div>
      </form>
      <div v-if="error" class="error d-flex flex-column py-3 g-2 align-content-center px-2">
        <p v-for="(mensaje, index) in mensajesError" :key="index">
          {{ mensaje }}
        </p>
      </div>
      <Map :modify="modify" :center="center" :localizaciones="localizacion"></Map>
    </main>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
export default {
  name: "AnadirView",

  components: {
    Map,
  },
  data() {
    return {
      mensajesError: [],
      error: false,
      zoom: 8,
      center: [41.386415, 2.169987],
      modify: true,
      latitud: "",
      longitud: "",
      nombre: "",
      descripcion: "",
      localizacion: [],
    };
  },
  methods: {
    enviarFormulario() {
      //Reiniciamos mensajes de error.
      this.error = false;
      this.mensajesError = [];

      //Validamos formulario
      if (this.nombreInvalidLength) {
        this.error = true;
        this.mensajesError.push("El nombre del tesoro debe tener entre 1 y 100 carácteres");
      }

      if (this.descripcionInvalidLength) {
        this.error = true;
        this.mensajesError.push("La descripcion del tesoro debe tener 10 y 100 carácteres");
      }

      if (this.latitudInvalida) {
        this.error = true;
        this.mensajesError.push("La latitud es un valor entre -90 grados y 90 grados");
      }

      if (this.longitudInvalida) {
        this.error = true;
        this.mensajesError.push("La longitud es un valor entre -180 grados y 180 grados");
      }

      if (this.error) return;

      this.mensajesError = [];

      //Si llegamos a este punto el formulario está validado y se lo podemos enviar a la API

      // Si todo va bien enviamos datos del formulario a la API.
      const axios = require("axios");

      const formData = new FormData();

      // Seteamos objeto a enviar con los datos del formulario
      const fileInput = document.getElementById("foto_tesoro");

      formData.append("titulo", this.escapeString(this.nombre.trim()));
      formData.append("descripcion", this.escapeString(this.descripcion.trim()));
      formData.append("latitud", this.latitud);
      formData.append("longitud", this.longitud);
      formData.append("foto_tesoro", fileInput.files[0]);

      axios
        .post("http://localhost:8081/tesorosweb", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/admin");
        })
        .catch((error) => {
          console.error(error);
          this.error = true;
          this.mensajesError.push(
            "Hemos tenido un problema con el servidor. Por favor, inténtelo más tarde. "
          );
        });
    },
    addMarker() {
      //Nos aseguramos que sólo haya 1 marcador en todo momento en el mapa.
      if (this.localizacion.length > 0) this.localizacion.pop();

      //Los datos seteados aquí no importan (excepto la position)
      this.localizacion.push({
        nombre: "Añadido",
        descripcion: "Descripcion",
        favorito: false,
        descubierto: false,
        position: [this.latitud, this.longitud],
      });
      //Centramos el mapa en la ubicación escogida.
      this.modifyCenter();
    },
    modifyCenter() {
      this.center = [this.latitud, this.longitud];
    },
    escapeString(string) {
      //Para poder crear el objeto JSON correctamente en las ruta /tesoros de la API.
      return `'${string}'`;
    },
  },
  computed: {
    nombreInvalidLength() {
      return this.nombre.length === 0 || this.nombre.length > 100;
    },
    descripcionInvalidLength() {
      return this.descripcion.trim().length < 10 || this.descripcion.trim().length > 5000;
    },
    latitudInvalida() {
      return parseInt(this.latitud) < -90 || parseInt(this.latitud) > 90 || this.latitud === "";
    },
    longitudInvalida() {
      return (
        parseInt(this.longitud) < -180 || parseInt(this.longitud) > 180 || this.longitud === ""
      );
    },
  },
};
</script>

<style scoped>
footer {
  margin-top: 4rem;
}

template {
  margin: 10px;
}

header {
  padding: 20px;
  margin: auto;
  background-color: #78d3ae;
  display: flex;
  justify-content: end;
}

.volver {
  background-color: #a7a8a8;
  color: #fff;
  transition: all 0.3s ease-in-out;
  box-shadow:
    6px 6px 12px #59a888, -6px -6px 12px #59a888;
}

.volver:hover {
  background-color: #59a888;
  cursor: pointer;
  box-shadow: none;
}

.container {
  display: flex;
  align-items: center;
  border-radius: 2em 2em 0em 0em;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0px 0px 0px;
  margin: 10px, 0px;
  background-color: #fff;
}

.fondoColor {
  background-color: #a7a8a8;
}

.input {
  background-color: #d9d9d9;
  border: none;
  border-radius: 1em;
  padding-left: 10px;
  width: 700px;
}

.submit {
  border: none;
  border-radius: 2em;
  padding: 3px 20px;
  background-color: #59a888;
  color: white;
  transition: all 0.3s ease-in-out;

}

.submit:hover {
  background-color: white;
  color: black;
  cursor: pointer;
  box-shadow:
    inset 4px 4px 12px #a7a8a8;
}

.marcador {
  border: none;
  border-radius: 2em;
  padding: 3px 12px;
  background-color: #59a888;
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.marcador:hover {
  background-color: #78d3ae;
  color: #000;
  cursor: pointer;
}

.volver {
  color: #fff;
  background-color: #d9d9d9;
  border-radius: 1em;
  padding: 6px;
}

.error {
  background-color: rgb(208, 98, 98);
  border-radius: 1.5em;
}

.error p {
  font-size: smaller;
  font-weight: 500;
}

#map {
  height: 180px;
  padding: 0%;
}

.bg-accent {
  background-color: var(--accent);
}
</style>
