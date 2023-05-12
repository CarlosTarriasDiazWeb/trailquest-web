<template>
  <NavBar login="true"></NavBar>

  <main>
    <div id="mapContainer">
      <span id="todos" @click="filterAll" class="button badge bg-success">Todos</span>
      <span id="encontrados" @click="filterEncontrados" class="button badge bg-secondary"
        >Encontrados</span
      >
      <Map
        :localizaciones="localizacionesMostrar"
        :center="center"
        @modifyCenter="modifyCenter"
        :isAdmin="isAdmin"
      ></Map>
    </div>

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
        <button @click.prevent="filtrarTesoros" class="buscar">Buscar</button>
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
      <router-link class="perfil-btn w-40 btn" to="/perfil">Ir a mi perfil</router-link>
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
      console.log(this.todas);
      this.localizacionesMostrar = [...this.todas];
    },
    filterEncontrados() {
      this.localizacionesMostrar = [...this.localizacionesEncontradas];
    },
    posicionarCentro(object) {
      //Asignamos el centro del mapa a la posición del tesoro seleccionado
      this.center = object.position;
    },
    filtrarTesoros() {
      //Mostrar tesoros que coinciden con la cadena de búsqueda.
      //this.localizacionesMostrar = [...this.todas];
      this.localizacionesMostrar = [
        ...this.localizacionesMostrar.filter((localizacion) =>
          localizacion.titulo.toLowerCase().includes(this.palabraFiltro.toLowerCase())
        ),
      ];
    },
    modifyCenter(position) {
      this.center = [position.lat, position.lng];
    },
    getValue(key) {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`))
        ?.split("=")[1];
    },
    setCookie(key, value, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = d.toUTCString();
      document.cookie = `${key}=${value}; Path=/; Expires=${expires}; Secure`;
    },
  },
  data() {
    return {
      center: [41.386415, 2.169987],
      palabraFiltro: "",
      isAdmin: false,
      todas: [],
      localizacionesMostrar: [],
    };
  },
  computed: {},

  mounted() {
    //Mostramos por defecto todos los tesoros (descubierto-no descubierto)
    const axios = require("axios");
    axios({
      method: "get",
      url: "http://localhost:8081/tesorosweb",
      auth: {
        username: this.getValue("usu_username"),
        password: this.getValue("usu_password"),
        type: "digest",
      },
    }).then((response) => {
      this.todas = Array.from(response.data);
      console.log(this.todas);
      //Añadimos array de posición en el mapa
      this.todas.map((loc) => (loc.position = [loc.latitud, loc.longitud]));
      //Añadimos id de BD a la localiacion
      this.todas.map((loc) => (loc.itemID = loc.id));

      //Seteamos número total de tesoros del sistema.
      let numeroTotalTesoros = this.todas.length > 0 ? this.todas.length : 0;
      this.setCookie("numeroTotal", numeroTotalTesoros, 2);

      //Para testear reseñas
      this.todas.map((loc) => (loc.descubierto = false));

      //Por defecto mostramos todos los tesoro.
      this.localizacionesMostrar = [...this.todas];

      //Recogemos los tesoros descubiertos con otra llamada a la API.
      axios({
        method: "get",
        url: `http://localhost:8081/tesorosweb/${this.getValue("usu_id")}/encontrados`,
      }).then((response) => {
        //Recogemos las filas que nos indican la id de los tesoros descubiertos.
        const tesorosEncontrados = Array.from(response.data) || [];
        console.log(this.tesorosEncontrados);
        if (tesorosEncontrados.length > 0) {
          //Guardamos las id de los tesoros encontrados para más facilidad.
          const idEncontrados = new Set(tesorosEncontrados.map((tes) => tes.tes_id));
          console.log(idEncontrados);

          //Seteamos número de tesoros encontrados en la cookie
          let numEncontrados = idEncontrados.length > 0 ? idEncontrados.length : 0;
          this.setCookie("numEncontrados", numEncontrados, 2);

          //Construimos el array de tesoros descubiertos
          this.localizacionesEncontradas = this.todas.filter((loc) => idEncontrados.has(loc.id));

          console.log(this.localizacionesEncontradas);

          //Añadimos array de posición en el mapa
          this.localizacionesEncontradas.map((loc) => (loc.position = [loc.latitud, loc.longitud]));
          //Añadimos id de BD a la localiacion
          this.localizacionesEncontradas.map((loc) => (loc.itemID = loc.id));
          //Sabemos que estos tesoros están descubiertos
          this.localizacionesEncontradas.map((loc) => (loc.descubierto = true));

          //Ponemos los que están descubiertos
          this.todas.map((loc) => {
            if (idEncontrados.has(loc.id)) {
              loc.descubierto = true;
            }
          });
        }
      });
    });
  },
};
</script>

<style scoped>
footer {
  margin-top: 4rem;
}

.bg-accent {
  background-color: var(--accent);
  display: flex;
  align-items: baseline;
}

.button {
  background-color: #d9d9d9;
  border: none;
  border-radius: 2em;
  padding: 4px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  background-color: #78d3ae;
  color: #fff;
  cursor: pointer;
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

.perfil-btn {
  background-color: var(--primary);
  color: var(--white);
  border-radius: 3rem;
  border: none;
  transition: all 0.3s ease-in-out;
}

.perfil-btn:hover {
  background-color: var(--white);
  color: var(--primary);
  box-shadow: 
  inset 4px 4px 12px #a7a8a8;
}

.form-control {
  border-radius: 2rem;
  width: 300px;
  margin: auto, 10px;
}

span:hover {
  cursor: pointer;
}

span {
  position: absolute;
  z-index: 999;
  top: 0.4rem;
}

#mapContainer {
  position: relative;
}

#encontrados {
  left: 4rem;
  background-color: #a7a8a8;
  transition: all 0.3s ease-in-out;
}

#encontrados:hover {
  background-color: #d9d9d9;
  cursor: pointer;
}

#todos {
  left: 10rem;
  background-color: #59a888;
  transition: all 0.3s ease-in-out;
}

#todos:hover {
  background-color: #78d3ae;
  cursor: pointer;
}
</style>
