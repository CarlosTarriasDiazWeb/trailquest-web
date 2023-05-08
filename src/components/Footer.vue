<template>
  <footer>
    <a href="" class="nav-link"> <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook </a>
    <a href="" class="nav-link"> <font-awesome-icon icon="fa-brands fa-twitter" /> Twitter </a>
    <a href="" class="nav-link"> <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram </a>
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
}

.nav-link:hover {
  color: #78d3ae;
  cursor: pointer;
}

footer {
  background-color: #59a888;
   bottom: 0;
  /*left: 0;   */
  width: 100%;
  /*position: fixed; */
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}
</style>
