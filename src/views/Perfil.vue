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
        <img class="col-1 img-fluid circle-icon" src="../../public/assets/imgs/logo2.png" alt="" />
        <h3 class="col">{{ nombreUsuario }}</h3>
      </div>
      <!-- Stats -->
      <div class="row">
        <p class="p-0">Número de tesoros: {{ numeroTesoros }}</p>
      </div>
      <div class="row">Nivel: {{ nivelUsuario }}</div>

      <!-- Progress bar -->
      <section>
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
            <ul>
              <li v-for="(tesoro, index) in localizacionesEncontradas" v-bind:key="index">
                {{ tesoro }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="accordion-item">
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
            <ul>
              <li v-for="(resena, index) in localizacionesEncontradas" v-bind:key="index">
                {{ resena.comentario }}
              </li>
            </ul>
          </div>
        </div>
      </div> -->
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
    calcNivelUsuario() {

      switch(true) {
        case this.numeroTesoros < 0.20*this.getValue("numeroTotal") : this.nivelUsuario = "Novato"
          break;
        case this.numeroTesoros >= 0.20*this.getValue("numeroTotal") && this.numeroTesoros < 0.50*this.getValue("numeroTotal") : this.nivelUsuario = "Principiante"
          break;
        case this.numeroTesoros >= 0.50*this.getValue("numeroTotal") && this.numeroTesoros < 0.80*this.getValue("numeroTotal") : this.nivelUsuario = "Caminante"
          break;
        case this.numeroTesoros >= 0.80*this.getValue("numeroTotal") : this.nivelUsuario = "Experto"
          break;
      }
    },
    getValue(key) {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`))
        ?.split("=")[1];
    },
  },
  data() {
    return {
      numeroTesoros: this.getValue("numEncontrados") || 0,
      nombreUsuario: this.getValue("usu_username"),
      nivelUsuario: "Leyenda",
      progress: Math.floor(this.getValue("numEncontrados") / this.getValue("numeroTotal")*100) || 0,
      localizacionesEncontradas: JSON.parse(this.getValue("nombreDescubiertos"))|| [],
    };
  },

  mounted() {
    this.calcNivelUsuario();
    //Recogemos las estadísticas del jugador que ha iniciado sesión, tenemos que hacer la llamada a la APi con el id_usuario actual
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
  box-shadow: 
  6px 6px 12px #59a888
  , -6px -6px 12px #59a888;
}

.volver:hover {
  background-color: var(--black);
  color: white !important;
  cursor: pointer;
  box-shadow: none;
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

section {
  display: flex;
  align-items: baseline;
  font-family: sans-serif;
}
.shell {
  height: 29px;
  width: 250px;
  border: 1px solid #a7a8a8;
  border-radius: 3em;
  padding: 3px;
  display: flex;
  align-items: center;
}

.bar {
  background: linear-gradient(to right, #78d3ae, #59a888);
  height: 20px;
  width: 15px;
  border-radius: 3em;
  display: flex;
}
span {
  float: right;
  padding: 4px 5px;
  color: #fff;
  font-size: 0.7em;
}
</style>
