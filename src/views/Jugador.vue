<template>
  <NavBar></NavBar>

  <span @click="filterAll" class="button badge bg-success">Todos</span>
  <span @click="filterFavoritos" class="button badge bg-primary">Favoritos</span>
  <span @click="filterEncontrados" class="button badge bg-secondary">Encontrados</span>

  <main>
    <Map
      :mapWidthPerc="mapWidthPerc"
      :localizaciones="localizacionesMostrar"
      :center="center"
      @modifyCenter = "modifyCenter"
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
        <button @click.prevent="filtrarTesoros">Buscar</button>
      </div>
    </div>
    <Tesoros :localizaciones="localizacionesMostrar" @posicionarCentro="posicionarCentro"></Tesoros>
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
    filterFavoritos() {
      this.localizacionesMostrar = [...this.localizacionesFavoritas];
    },
    filterAll() {
      this.localizacionesMostrar = [...this.todas];
    },
    filterEncontrados() {
      this.localizacionesMostrar = [...this.localizacionesEncontradas];
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
      this.center = [position.lat, position.lng]
    }
  },
  data() {
    return {
      mapWidthPerc: 100,
      center: [41.386415, 2.169987],
      palabraFiltro: "",
      todas: [
        {
          nombre: "Tesoro 1",
          descripcion: "Descr 1",
          favorito: false,
          descubierto: false,
          position: [41.386415, 2.269987],
        },
        {
          nombre: "Tesoro 2",
          descripcion: "Descr 2",
          favorito: true,
          descubierto: true,
          position: [41.386415, 2.309987],
        },
        {
          nombre: "Tesoro 3",
          descripcion: "Descr 3",
          favorito: false,
          descubierto: true,
          position: [41.286415, 2.309987],
        },
        {
          nombre: "Tesoro 4",
          descripcion: "Descr 4",
          favorito: true,
          descubierto: false,
          position: [41.286415, 2.309987],
        },
        {
          nombre: "Tesoro 5",
          descripcion: "Descr 5",
          favorito: false,
          descubierto: true,
          position: [41.286415, 2.209987],
        },
        {
          nombre: "Tesoro 6",
          descripcion: "Descr 6",
          favorito: false,
          descubierto: true,
          position: [41.386415, 2.209987],
        },
        {
          nombre: "Tesoro 7",
          descripcion: "Descr 7",
          favorito: false,
          descubierto: true,
          position: [41.286415, 2.259987],
        },
        {
          nombre: "Tesoro 8",
          descripcion: "Descr 8",
          favorito: false,
          descubierto: true,
          position: [41.286415, 2.239987],
        },
        {
          nombre: "Tesoro 9",
          descripcion: "Descr 9",
          descubierto: true,
          position: [41.286415, 2.209987],
        },
        {
          nombre: "Tesoro 10",
          descripcion: "Descr 10",
          descubierto: true,
          position: [41.286415, 2.222987],
        },
      ],
      localizacionesMostrar: [],
      localizacionesFavoritas: [
        {
          nombre: "Tesoro 9",
          descripcion: "Descr 9",
          descubierto: true,
          favorito: true,
          position: [41.286415, 2.209987],
        },
        {
          nombre: "Tesoro 10",
          descripcion: "Descr 10",
          descubierto: true,
          favorito: true,
          position: [41.286415, 2.222987],
        },
      ],
      localizacionesEncontradas: [
        {
          nombre: "Tesoro 5",
          descripcion: "Descr 5",
          descubierto: true,
          favorito: false,
          position: [41.286415, 2.209987],
        },
        {
          nombre: "Tesoro 6",
          descripcion: "Descr 6",
          descubierto: true,
          favorito: false,
          position: [41.386415, 2.209987],
        },
      ],
    };
  },
  computed: {},

  mounted() {
    this.localizacionesMostrar = [...this.todas];
  },
};
</script>

<style scoped>
.bg-accent {
  background-color: var(--accent);
}
.perfil-btn {
  background-color: var(--primary);
  color: var(--white);
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;
}

.perfil-btn:hover {
  background-color: var(--white);
  color: var(--primary);
}

span:hover {
  cursor: pointer;
}
</style>
