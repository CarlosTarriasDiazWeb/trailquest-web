<template>
  <header class="bg-nav d-flex align-items-center flex-row">
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
        <ul v-if="login === 'true'" class="navbar-nav ms-auto">
          <li class="nav-item">
            <button @click="cerrarSesion" class="my-2 text-center sesion-btn nav-link">
              Cerrar Sesión
            </button>
          </li>
        </ul>
        <ul v-else class="navbar-nav ms-auto">
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
</template>

<script>
export default {
  name: "nav-bar",
  data() {
    return {};
  },
  props: {
    login: String,
  },
  methods: {
    deleteCookie(key) {
      document.cookie = key + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    cerrarSesion() {
      //Eliminamos la cookie de sesión y redirigimos al formulario de inicio de sesión
      this.deleteCookie("login");
      this.deleteCookie("usu_username");
      this.deleteCookie("usu_id");
      this.deleteCookie("numEncontrados");
      this.deleteCookie("numeroTotal");
      this.deleteCookie("type");

      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@import "../../public/custom.css";

.bg-nav {
  background-color: var(--primary-color);
}

img {
  width: 6vw;
}

.sesion-btn {
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

.sesion-btn:hover {
  background-color: var(--black);
  color: white !important;
  cursor: pointer;
  box-shadow: none;
}

.registro-btn {
  background-color: var(--black);
  color: var(--white);
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 
  6px 6px 12px #59a888
  , -6px -6px 12px #59a888;
}

.registro-btn:hover {
  background-color: #a7a8a8;
  color: var(--black);
  cursor: pointer;
  box-shadow: none;
}

.sesion-btn {
  background-color: var(--white);
  color: var(--black);
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 
  6px 6px 12px #59a888
  , -6px -6px 12px #59a888;
}

.sesion-btn:hover {
  background-color: #59a888;
  color: white !important;
  box-shadow: none;
  cursor: pointer;
}
</style>
