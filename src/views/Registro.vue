<template>
  <header>
    <NavBar></NavBar>
  </header>

  <body>

    <div class="imagen-fondo">

      <div class="ajustar">

        <div class="contenedor">
    
          <h1>Registrate</h1>
          <form v-on:submit.prevent="enviarFormulario">
            <label for="" required>Nombre usuario:</label>
            <input class="input" type="text" v-model="name" name="name" id="nom_usuario"><br>
            <label for="" required>Contraseña:</label>
            <input class="input" type="password" v-model="password1" name="password1" id="con_usuario"><br>
            <label for="" required>Repita su contraseña:</label>
            <input class="input" type="password" v-model="password2" name="password2" id="rep_contra"><br><br>
    
            <input type="submit" value="Iniciar" class="submit"><br><br>
            <a href="/login">¿Eres miembro? Inicia sesión</a>
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
  </body>
</template>
     
<script>
import NavBar from "@/components/NavBar.vue";
export default {

  name: 'RegistroView',
  components: {
    NavBar
  },
  methods: {
    enviarFormulario() {
      if (!this.name) {
        alert("El nombre de usuario es obligatorio")
      }
      if (!this.password1 || !this.password2) {
        alert("Debes repetir la contraseña")
      }
      if (this.password1 != this.password2) {
        alert("Las contraseñas son diferentes!")
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

}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.contenedor {
  border: #78d3ae 2px;
  border-radius: 3em 0em;
  background-color: #fff;
  margin: 0px 100px;
  padding: 20px;
}

.input {
  background-color: #d9d9d9;
  border: none;
  border-radius: 2em;
  padding: 4px;
}

.submit {
  border-radius: 2em;
  border: none;
  background-color: #78d3ae;
  color: white;
  padding-left: 20px;
  padding-right: 20px;

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
     