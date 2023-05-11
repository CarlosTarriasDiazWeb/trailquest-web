<template>
  <header class="bg-green">
    <div class="container">
      <nav class="nav d-flex justify-content-end p-4">
        <RouterLink class="my-2 text-center volver nav-link" to="/jugador"
          >Volver al mapa</RouterLink
        >
      </nav>
    </div>
  </header>
  <main>
    <div class="container py-4">
      <!-- Perfil -->
      <div class="row">
        <h1>Perfil</h1>
      </div>
      <!-- User -->
      <div class="row d-flex align-items-center py-4">
        <img
          class="col-1 img-fluid circle-icon"
          src="../../public/assets/imgs/logo2.png"
          alt=""
        />
        <h3 class="col">{{ nombreUsuario }}</h3>
      </div>
      <!-- Stats -->
      <div class="row">
        <p class="p-0">Número de tesoros: {{ numeroTesoros }}</p>
      </div>
      <div class="row">
        Nivel: {{ calcNivelUsuario(nivelUsuario) }}
      </div>

      <!-- Progress bar -->
      <section id="progressBar">
        <div class="shell">
          <div class="bar" :style="{ width: progress + '%' }">
            <span>{{ progress }}%</span>
          </div>
        </div>
      </section>
    </div>
      
    <!-- Tesoros -->
    <div class="accordion p-4" id="tesorosEncontrados">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Mis localizaciones
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <!-- TODO Iterar con un for para mostrar las localizaciones del usuario -->
            <ul>
              <li
                v-for="(tesoro, index) in localizacionesEncontradas"
                v-bind:key="index"
              >
                {{ tesoro.nombre }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Mis reseñas
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <!-- TODO iterar con un for para mostrar reseñas del usuario -->
          </div>
        </div>
      </div>
    </div>
  </main>
  <div class="final">
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "home-page",
  components: {
    Footer,
  },
  methods: {
    makeProgress() {
      if (this.progress < 100) {
        this.progress += 5;
      }
    },
    calcNivelUsuario(usuario) {
      if (this.numeroTesoros == 0) {
        usuario == "Novel";
      }
      return usuario;
    },
  },
  data() {
    return {
      numeroTesoros: 0,
      nombreUsuario: "David Marin",
      nivelUsuario: "",
      progress: 100,
      todas: [
        {
          nombre: "Tesoro 1",
          descripcion:
            "Descr 1 Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          //favorito: false,
          descubierto: false,
          position: [41.386415, 2.269987],
        },
        {
          nombre: "Tesoro 2",
          descripcion: "Descr 2 Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          //favorito: true,
          descubierto: true,
          position: [41.386415, 2.309987],
        },
        {
          nombre: "Tesoro 3",
          descripcion: "Descr 3 Descr 1Descr 1Descr 1Descr 1Descr 1",
          //favorito: false,
          descubierto: true,
          position: [41.286415, 2.309987],
        },
        {
          nombre: "Tesoro 4",
          descripcion: "Descr 4Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          //favorito: true,
          descubierto: false,
          position: [41.286415, 2.309987],
        },
        {
          nombre: "Tesoro 5",
          descripcion: "Descr 5Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          //favorito: false,
          descubierto: true,
          position: [41.286415, 2.209987],
        },
        {
          nombre: "Tesoro 6",
          descripcion: "Descr 6Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          //favorito: false,
          descubierto: true,
          position: [41.386415, 2.209987],
        },
        {
          nombre: "Tesoro 7",
          descripcion:
            "Descr 7Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          //favorito: false,
          descubierto: true,
          position: [41.286415, 2.259987],
        },
        {
          nombre: "Tesoro 8",
          descripcion:
            "Descr 8Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          //favorito: false,
          descubierto: true,
          position: [41.286415, 2.239987],
        },
        {
          nombre: "Tesoro 9",
          descripcion:
            "Descr 9Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          descubierto: true,
          position: [41.286415, 2.209987],
        },
        {
          nombre: "Tesoro 10",
          descripcion:
            "Descr 10Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          descubierto: true,
          position: [41.286415, 2.222987],
        },
      ],
      localizacionesMostrar: [],
      // localizacionesFavoritas: [
      //   {
      //     nombre: "Tesoro 9",
      //     descripcion: "Descr 9Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
      //     descubierto: true,
      //     favorito: true,
      //     position: [41.286415, 2.209987],
      //   },
      //   {
      //     nombre: "Tesoro 10",
      //     descripcion: "Descr 10Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
      //     descubierto: true,
      //     favorito: true,
      //     position: [41.286415, 2.222987],
      //   },
      // ],
      localizacionesEncontradas: [
        {
          nombre: "Tesoro 5",
          descripcion:
            "Descr 5Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          descubierto: true,
          favorito: false,
          position: [41.286415, 2.209987],
        },
        {
          nombre: "Tesoro 6",
          descripcion:
            "Descr 6Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1Descr 1",
          descubierto: true,
          favorito: false,
          position: [41.386415, 2.209987],
        },
      ],
    };
  },

  mounted() {
    this.calcNivelUsuario();
    //Recogemos las estadísticas del jugador que ha iniciado sesión, tenemos que hacer la llamada a la APi con el id_usuario actual

    const axios = require("axios");
    axios({
      method: "get",
      url: "",
    }).then((response) => {
      console.log(response);
    });
  },
};
</script>

<style scoped>
.circle-icon {
  background: #78d3af38;
  padding: 0px;
  border: 3px solid black;
  border-radius: 50%;
}

.volver {
  border: none;
  background-color: #a7a8a8;
  color: var(--black);
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;
  padding: 5px 8px;
}

.volver:hover {
  background-color: var(--black);
  color: white !important;
  cursor: pointer;
}

li {
  color: #59a888;
}

main {
  margin: 0;
}

.final {
  bottom: 0;
  width: 100%;
  position: fixed;
}

section{
  display: flex;
  align-items: baseline;
  font-family: sans-serif;
}
.shell {
  height: 29px;
  width: 250px;
  border: 1px solid #a7a8a8;
  border-radius: 13px;
  background-color: #d9d9d9;
  padding: 3px;
}

.bar {
  background: linear-gradient(to right, #78d3ae, #59a888);
  height: 20px;
  width: 15px;
  border-radius: 9px;
}
span {
  float: right;
  padding: 4px 5px;
  color: #fff;
  font-size: 0.7em;
}
</style>
