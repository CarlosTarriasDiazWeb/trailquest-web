<template>
  <NavBar login="true"></NavBar>
  <main>
    <Map :localizaciones="localizacionesMostrar" :center="center" @modifyCenter="modifyCenter" :isAdmin="isAdmin"></Map>
    <div class="bg-accent p-3 d-flex flex-row justify-content-end">
      <div class="form-row w-40">
        <div class="col">
          <input type="text" class="form-control" v-model="palabraFiltro" placeholder="Escribe nombre del tesoro..." />
        </div>
      </div>
      <div class="form-row w-40 ms-5">
        <button class="buscar" @click.prevent="filtrarTesoros">Buscar</button>
      </div>
    </div>
    <Tesoros :isAdmin="isAdmin" :localizaciones="localizacionesMostrar" @posicionarCentro="posicionarCentro"></Tesoros>
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
      this.center = object.position;
    },
    filtrarTesoros() {
      this.localizacionesMostrar = [...this.todas];
      this.localizacionesMostrar = [
        ...this.localizacionesMostrar.filter((localizacion) =>
          localizacion.nombre.toLowerCase().includes(this.palabraFiltro.toLowerCase())
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
      // todas: [
      //   {
      //     nombre: "Tesoro 1",
      //     descripcion: "Descr 1 Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
      //     favorito: false,
      //     descubierto: false,
      //     position: [41.386415, 2.269987],
      //   },
      // ],
      localizacionesMostrar: [],
    };
  },
  computed: {},

  mounted() {
    /*Show dummy data*/
    //this.localizacionesMostrar = [...this.todas];

    /*Show API data */
    const axios = require("axios");
    axios({
      method: "get",
      url: "http://172.23.7.123:8081/tesoros",
    }).then((response) => {
      this.localizacionesMostrar = Array.from(response.data);
      console.log(this.localizacionesMostrar);
      this.localizacionesMostrar.map((loc) => (loc.position = [loc.latitud, loc.longitud]));
      //Añadimos id de BD a la localiacion
      this.localizacionesMostrar.map((loc) => loc.itemID = loc.id)
    });
  },
};
</script>

<style scoped>
footer {
  margin-top: 40px;
}

main {
  z-index: 50;
}

.bg-accent {
  background-color: var(--accent);
}

.perfil-btn {
  background-color: var(--primary);
  color: var(--white);
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;
}

.buscar {
  background-color: #d9d9d9;
  color: black;
  border: none;
  border-radius: 2em;
  transition: all 0.3s ease-in-out;
  padding: 3px 10px;
}

.buscar:hover {
  background-color: #a7a8a8;
  color: white;
  cursor: pointer;
}

.perfil-btn:hover {
  background-color: var(--white);
  color: var(--primary);
}

span:hover {
  cursor: pointer;
}
</style>