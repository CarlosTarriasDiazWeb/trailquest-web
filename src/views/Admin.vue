<template>
  <NavBar login="true"></NavBar>
  <main>
    <Map
      :localizaciones="localizacionesMostrar"
      :center="center"
      @modifyCenter="modifyCenter"
      :isAdmin="isAdmin"
    ></Map>
    <div class="bg-accent p-3 d-flex flex-row justify-content-end">
      <div class="form-row w-40">
        <div class="col">
          <input
            type="text"
            class="form-control"
            v-model="palabraFiltro"
            placeholder="Escribe nombre del tesoro..."
          />
        </div>
      </div>
      <div class="form-row w-40 ms-5">
        <button class="buscar" @click.prevent="filtrarTesoros">Buscar</button>
      </div>
    </div>
    <Tesoros
      :isAdmin="isAdmin"
      :localizaciones="localizacionesMostrar"
      @posicionarCentro="posicionarCentro"
    ></Tesoros>
  </main>
  <footer>
    <div class="fixed-bottom bg-accent py-3 w-100 d-flex flex-row justify-content-center">
      <router-link class="perfil-btn w-40 btn" to="/anadir">Añadir +</router-link>
    </div>
  </footer>
</template>

<script>
import Map from "@/components/Map.vue";
import Tesoros from "@/components/Tesoros.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "jugador-page",
  components: {
    Map,
    Tesoros,
    NavBar,
  },
  methods: {
    filterAll() {
      this.localizacionesMostrar = [...this.todas];
    },
    posicionarCentro(object) {
      //Asignamos el centro del mapa a la posición del tesoro seleccionado
      this.center = object.position;
    },
    filtrarTesoros() {
      //Mostrar tesoros que coinciden con la cadena de búsqueda.
      this.localizacionesMostrar = [...this.todas];
      this.localizacionesMostrar = [
        ...this.localizacionesMostrar.filter((localizacion) =>
          localizacion.titulo.toLowerCase().includes(this.palabraFiltro.toLowerCase())
        ),
      ];
    },
    modifyCenter(position) {
      this.center = [position.lat, position.lng];
    },
  },
  data() {
    return {
      mapWidthPerc: 100,
      center: [41.386415, 2.169987],
      palabraFiltro: "",
      isAdmin: true,
      localizacionesMostrar: [],
    };
  },
  computed: {},

  mounted() {
    //Recogemos TODOS los tesoros del sistema.
    const axios = require("axios");
    axios({
      method: "get",
      url: "http://localhost:8081/tesorosweb",
    }).then((response) => {
      this.todas = Array.from(response.data);
      //Añadimos array de posición en el mapa
      this.todas.map((loc) => (loc.position = [loc.latitud, loc.longitud]));
      //Añadimos id de BD a la localiacion
      this.todas.map((loc) => (loc.itemID = loc.id));

      //Para testear reseñas
      this.todas.map((loc) => (loc.descubierto = true));

      //Por defecto mostramos todos los tesoro.

      this.localizacionesMostrar = [...this.todas];
    });
  },
};
</script>

<style scoped>
footer {
  margin-top: 40px;
  /* bottom: 0;
  left: 0;  */
}

main {
  z-index: 50;
}

.bg-accent {
  background-color: var(--accent);
  display: flex;
  align-items: baseline;
}

.perfil-btn {
  background-color: var(--primary);
  color: var(--white);
  border-radius: 3rem;
  border: none;
  transition: all 0.3s ease-in-out;
}

.buscar {
  background-color: #d9d9d9;
  color: #000;
  border: none;
  border-radius: 2em;
  padding: 4px, 10px;
  transition: all 0.3s ease-in-out;
}

.buscar:hover {
  background-color: #78d3ae;
  color: #fff;
  cursor: pointer;
}
.form-control {
  border-radius: 2rem;
  width: 300px;
  margin: auto, 10px;
}
.perfil-btn:hover {
  background-color: var(--white);
  color: var(--primary);
  box-shadow: 
  inset 4px 4px 12px #a7a8a8;
}

span:hover {
  cursor: pointer;
}
</style>
