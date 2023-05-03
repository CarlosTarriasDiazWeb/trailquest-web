<template>
  <header class="bg-green">
    <div class="container">
      <nav class="nav d-flex justify-content-end p-4">
        <a href="/" class=" nav-link btn btn-light">Volver al mapa</a>
      </nav>
    </div>
  </header>
  <main>
    <div class="container py-4">
      <!-- Perfil -->
      <div class="row">
        <h1>El teu perfil</h1>
      </div>
      <!-- User -->
      <div class="row d-flex align-items-center py-4">
        <img class="col-1 img-fluid circle-icon" src="../../public/assets/imgs/logo1.png" alt="">
        <h3 class="col">David Marin</h3>
      </div>
      <!-- Stats -->
      <div class="row">
        <p class="p-0">Número de tesoros: 50</p>
      </div>
      <div class="row">
        Nivel: Experto
        <div class="progress p-0">
          <div class="progress-bar bg-green" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100">
          </div>
        </div>
      </div>
      <!-- Tesoros -->
      <div class="accordion p-4" id="tesorosEncontrados">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              Mis localizaciones
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <!-- TODO Iterar con un for para mostrar las localizaciones del usuario -->
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Mis reseñas
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <!-- TODO iterar con un for para mostrar reseñas del usuario -->
            </div>
          </div>
        </div>
      </div>

    </div>

  </main>
  <footer></footer>
</template>

<script>
export default {
  name: "home-page",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.circle-icon {
  background: #78d3af38;  
  padding: 20px;
  border: 3px solid black;
  border-radius: 50%;
}</style>
