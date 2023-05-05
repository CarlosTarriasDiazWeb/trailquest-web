<template>
  <header>
    <NavBar></NavBar>
  </header>

  <body>

    <main>
      <div class="imagen-fondo">
        <div class="ajustar">

          <div class="contenedor">
            <h1>Inicia sesión</h1>
            <form v-on:submit.prevent="enviarFormulario">
              <label for="" required>Nombre usuario:</label>
              <input type="text" class="input" v-model="name" id="nom_usuario" required><br><br>
              <label for="" required>Contraseña:</label>
              <input type="password" class="input" v-model="password" id="con_usuario" required><br><br>


              <router-link class="submit" to="/jugador">Iniciar</router-link><br>
              <a class="registro" href="/registro">¿Eres nuevo? Regístrate</a>
            </form>
          </div>
        </div>

      </div>
      <footer>
        <a href="" class="nav-link">
          <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook
        </a>
        <a href="" class="nav-link">
          <font-awesome-icon icon="fa-brands fa-twitter" /> Twitter
        </a>
        <a href="" class="nav-link">
          <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram
        </a>
      </footer>
    </main>
  </body>
</template>
   
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: 'LoginView',
  components: {
    NavBar,
  },

  methods: {
    enviarFormulario() {
      if (this.name != "Ana") {
        alert("El nombre de usuario es incorrecto")
      }
      if (this.password != "123") {
        alert("La contraseña es incorrecta")
      }
      else {
        console.log('Enviado!');

      }
    },
  }
}
</script>
   
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{
  background-color: #59a888;
  
}
main {
  
  height: 100%;
}

.imagen-fondo {
  background-image: url(/public/assets/imgs/fotoFondo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 83vh;
  
}


h1 {
  display: flex;
  justify-content: center;
  margin: 30px;
}

label {
  color: #a7a8a8;
  display: flex;

}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.contenedor {
  border: none;
  border-radius: 3em 0em;
  background-color: #fff;
  margin: 0px 100px;
  padding: 20px;
  width: 100%;
}

.ajustar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.input {
  background-color: #d9d9d9;
  border: none;
  border-radius: 2em;
  padding: 4px;
  margin: 4px;
}

.submit {
  border-radius: 2em;
  border: none;
  background-color: #78d3ae;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.3s ease-in-out;
}

.submit:hover{
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

.nav-link{
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.nav-link:hover{
  color: #78d3ae;
  cursor: pointer;
}

.registro{
  transition: all 0.3s ease-in-out;
}

.registro:hover{
  color: #59a888;
  cursor: pointer;
}

a {
  color: #a7a8a8;
}

footer {
  background-color: #59a888;
  bottom: 0;
  left: 0;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}
</style>
   