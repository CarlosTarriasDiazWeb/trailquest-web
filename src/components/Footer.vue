<template>
  <!-- Las redes sociales son solo visuales, no redirigen a nada -->
  <footer>
    <a href="#" class="nav-link"> <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook </a>
    <a href="#" class="nav-link"> <font-awesome-icon icon="fa-brands fa-twitter" /> Twitter </a>
    <a href="#" class="nav-link"> <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram </a>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>
.nav-link {
  color: #fff;
  transition: all 0.3s ease-in-out;
  text-shadow: 
  6px 6px 12px #000;
}

.nav-link:hover {
  color: #fff;
  cursor: pointer;
  text-shadow: none;
}

footer {
  background-color: #59a888;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  z-index: 90;
}
</style>