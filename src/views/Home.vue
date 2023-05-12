<template>
  <nav-bar></nav-bar>
  <main class="container flex-grow-1 my-3">
    <h2>¿Cómo participar?</h2>
    <section id="paso1" class="row my-4 d-flex align-items-center">
      <img src="../../public/assets/imgs/foto1.jpg" alt="" class="col-lg-5" />
      <p class="col">
        Registrate en nuestra página o a través de la app de Trail Quest para ver un mapa con todos
        los tesoros que hay alrededor tuyo.
      </p>
    </section>
    <section id="paso2" class="row d-flex flex-row-reverse align-items-center my-4">
      <img src="../../public/assets/imgs/foto2.jpg" alt="" class="col-lg-5" />
      <p class="col">
        Utiliza la app para navegar hacia un tesoro cercano. No os olvideis de tener el movil
        cargado! Una vez lleguéis, podreis leer información acerca del sitio y subir de nivel.
      </p>
    </section>
    <section id="paso3" class="row my-4 d-flex align-items-center">
      <img src="../../public/assets/imgs/foto3.jpg" alt="" class="col-lg-5" />
      <p class="col">
        Comparte la experiencia con tus amigos y pon una reseña en el tesoro que encuentres.
        Diviertete!
      </p>
    </section>
  </main>
  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from "@/components/Footer.vue";
export default {
  name: "home-page",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      zoom: 8,
    };
  },
};
</script>

<style scoped>
header {
  background-color: #78d3ae;
}

.navbar-brand {
  width: 6vw;
}

.registro-btn {
  background-color: var(--black);
  color: var(--white);
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;
}

.registro-btn:hover {
  background-color: #a7a8a8;
  color: var(--black);
  cursor: pointer;
}

.sesion-btn {
  background-color: var(--white);
  color: var(--black);
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;
}

.sesion-btn:hover {
  background-color: #59a888;
  color: white !important;
  cursor: pointer;
}

footer {
  background-color: #59a888;
}
</style>
