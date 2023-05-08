<template>
  <header>
    <nav
      class="p-4 w-100 d-flex flex-row align-items-center navbar navbar-expand-lg bg-body-tertiary"
    >
      <div class="d-flex align-items-center logo">
        <img class="navbar-brand" src="../../public/assets/imgs/logo.png" />
        <h1>TRAIL QUEST</h1>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="my-2 text-center sesion-btn nav-link" to="/login"
              >Iniciar Sesión</RouterLink
            >
            <RouterLink class="my-2 text-center registro-btn nav-link" to="/registro"
              >Registrarse</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- <nav-bar></nav-bar> -->
  <main class="container flex-grow-1 my-3">
    <h2>¿Cómo participar?</h2>
    <section id="paso1" class="row my-4 d-flex align-items-center">
      <img src="https://dummyimage.com/600x400/000/fff" alt="" class="col-lg-5" />
      <p class="col">
        Registrate en nuestra página o a través de la app de Trail Quest para ver un mapa con todos
        los tesoros que hay alrededor tuyo.
      </p>
    </section>
    <section id="paso2" class="row d-flex flex-row-reverse align-items-center my-4">
      <img src="https://dummyimage.com/600x400/000/fff" alt="" class="col-lg-5" />
      <p class="col">
        Utiliza la app para navegar hacia un tesoro cercano. No os olvideis de tener el movil
        cargado!
      </p>
    </section>
    <section id="paso3" class="row my-4 d-flex align-items-center">
      <img src="https://dummyimage.com/600x400/000/fff" alt="" class="col-lg-5" />
      <p class="col">
        Comparte la experiencia con tus amigos y pon una reseña en el tesoro que encuentres.
        Diviertete!
      </p>
    </section>
  </main>
  <!-- <footer class="bg-green p-2">
        <div class="container">
            <div class="row">
                <section class="col-md" id="socials">
                    <h5>Contactanos!</h5>
                    <nav class="nav flex-column">
                        <a href="" class="nav-link">
                            <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook
                        </a>
                        <a href="" class="nav-link">
                            <font-awesome-icon icon="fa-brands fa-twitter" /> Twitter
                        </a>
                        <a href="" class="nav-link">
                            <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram
                        </a>
                    </nav>
                </section>
                <section class="col-md d-flex align-items-center" id="copyright">
                    @arsenicoITB 3st4_pAg1na_-3s-nU35tra
                </section>

            </div>

        </div>

    </footer> -->
  <Footer></Footer>
</template>

<script>
///import NavBar from '@/components/NavBar.vue';
import Footer from "@/components/Footer.vue";
export default {
  name: "home-page",
  components: {
    //NavBar
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
