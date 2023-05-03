<template>
  <header class="bg-nav d-flex align-items-center flex-row">
    <nav
      class="p-4 w-100 d-flex flex-row align-items-center navbar navbar-expand-lg bg-body-tertiary"
    >
      <div class="logo">
        <img class="navbar-brand" src="../../public/assets/imgs/logo1.png" />
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
            <RouterLink class="sesion-btn nav-link" to="/">Cerrar Sesión</RouterLink>
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
  props: {},
};
</script>

<style scoped>
@import "../../public/custom.css";
.bg-nav {
  background-color: var(--primary);
}

img {
  width: 6vw;
}

.sesion-btn {
  background-color: var(--dark-gray);
  color: var(--black);
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;
}

.sesion-btn:hover {
  background-color: var(--black);
  color: white !important;
  cursor: pointer;
}
</style>
