<template>
  <!-- <header>
    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>
  </header> -->
  <main>
    <h1>Vista Jugador</h1>
    <Map :mapWidthPerc="mapWidthPerc"></Map>
    <Tesoros :localizaciones="localizaciones"></Tesoros>
  </main>
  <footer>
    <div
      class="position-fixed fixed-bottom bg-accent py-3 w-100 d-flex flex-row justify-content-center"
    >
      <button class="perfil-btn w-40 btn">Ir a mi perfil</button>
    </div>
  </footer>
</template>

<script>
import Map from "@/components/Map.vue";
import Tesoros from "@/components/Tesoros.vue";

export default {
  name: "jugador-page",
  components: {
    Map,
    Tesoros,
  },
  data() {
    return {
      mapWidthPerc: 100,
      localizaciones: [
        {
          nombre: "Tesoro 1",
          descripcion: "Descr 1",
          favorito: false,
          descubierto: false,
        },
        {
          nombre: "Tesoro 2",
          descripcion: "Descr 2",
          favorito: true,
          descubierto: true,
        },
        {
          nombre: "Tesoro 3",
          descripcion: "Descr 3",
          favorito: false,
          descubierto: true,
        },
        {
          nombre: "Tesoro 4",
          descripcion: "Descr 4",
          favorito: true,
          descubierto: false,
        },
        {
          nombre: "Tesoro 5",
          descripcion: "Descr 5",
          favorito: false,
          descubierto: true,
        },
        {
          nombre: "Tesoro 6",
          descripcion: "Descr 5",
          favorito: false,
          descubierto: true,
        },
        {
          nombre: "Tesoro 6",
          descripcion: "Descr 5",
          favorito: false,
          descubierto: true,
        },
        {
          nombre: "Tesoro 7",
          descripcion: "Descr 5",
          favorito: false,
          descubierto: true,
        },
        {
          nombre: "Tesoro 8",
          descripcion: "Descr 5",
          favorito: false,
          descubierto: true,
        },
        {
          nombre: "Tesoro 9",
          descripcion: "Descr 5",
          favorito: false,
          descubierto: true,
        },
        {
          nombre: "Tesoro 10",
          descripcion: "Descr 5",
          favorito: false,
          descubierto: true,
        },
      ],
    };
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
</style>
