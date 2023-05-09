<template>
  <header><router-link class="volver" to="/admin">Volver al mapa</router-link><br /></header>

  <div class="fondoColor">
    <main class="container">
      <h1>Modificar tesoro</h1>
      <form v-on:submit.prevent="enviarFormulario" enctype="multipart/form-data">
        <label for="" required>Nombre monumento:</label><br />
        <input type="text" v-model="nombre" class="input" id="nom_tesoro" /><br /><br />
        <input type="file" name="foto_tesoro" id="foto_tesoro" /><br /><br />
        <label for="" required>Descripción:</label><br />
        <textarea v-model="descripcion" name="" id="inf_tesoro" class="input" cols="30" rows="10"></textarea><br /><br />

        <label for="latitud" required>Latitud:</label><br />
        <input v-model="latitud" type="number" class="input" id="latitud" /><br /><br />
        <label for="longitud">Longitud:</label><br />
        <input v-model="longitud" type="number" class="input" id="longitud" /><br /><br />
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
  name: "ActualizarView",

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
      latitud: this.$route.query.latitud || 1,
      longitud: this.$route.query.longitud || 1,
      nombre: this.$route.query.titulo || "",
      descripcion: this.$route.query.descripcion || "",
      itemID: this.$route.query.itemID,
      fotoTesoro: this.$route.query.fotoTesoro,
      localizacion: [],
    };
  },
  methods: {
    enviarFormulario() {
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

      // Si todo va bien enviamos datos del formulario a la API.

      const axios = require("axios");
      // Create a new FormData object
      const formData = new FormData();

      // Append data to the form data object
      const fileInput = document.getElementById("foto_tesoro");
      let fotoAEnviar = fileInput.files[0] || this.fotoTesoro;
      formData.append("titulo", this.escapeString(this.nombre.trim()));
      formData.append("descripcion", this.escapeString(this.descripcion.trim()));
      formData.append("latitud", this.latitud);
      formData.append("longitud", this.longitud);
      formData.append("foto", fotoAEnviar);

      //console.log(formData);

      // const tesoro = {
      //     tesoro_data : {
      //         'titulo': this.nombre,
      //         'descripcion': this.descripcion,
      //         'latitud': this.latitud,
      //         'longitud':this.longitud,
      //         'foto_tesoro': fileInput.files[0]
      //     }
      // }

      // Send the form data as a POST request
      axios
        .put(`http://172.23.7.110:8081/tesoros/${this.itemID}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
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
      if (this.localizacion.length > 0) this.localizacion.pop();
      this.localizacion.push({
        nombre: "Añadido",
        descripcion: "Descripcion",
        favorito: false,
        descubierto: false,
        position: [this.latitud, this.longitud],
      });
      this.modifyCenter();
      console.log("Marcador añadido!");
    },
    modifyCenter() {
      this.center = [this.latitud, this.longitud];
    },
    escapeString(string) {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template {
  margin: 10px;
}

header {
  padding: 40px;
  margin: auto;
  background-color: #78d3ae;
  display: flex;
  justify-content: end;
}

.volver {
  background-color: #a7a8a8;
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.volver:hover {
  background-color: #59a888;
  cursor: pointer;
}

.container {
  display: flex;
  align-items: center;
  border-radius: 2em 2em 0em 0em;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px 0px 0px 0px;
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
}

.marcador {
  border: none;
  border-radius: 2em;
  padding: 3px 12px;
  background-color: #59a888;
  color: #fff;
  transition: all 0.3s ease-glpat-ygys_qpEpu1yyZqPdPh1in-out;
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
