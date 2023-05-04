<template>
  <header>
    <NavBar></NavBar>
  </header>

  <body>

    <div class="contenedor">
      <h1>Inicia sesión</h1>
      <form v-on:submit.prevent="enviarFormulario">
        <label for="" required>Nombre usuario:</label>
        <input type="text" class="input" v-model="name" id="nom_usuario" required><br><br>
        <label for="" required>Contraseña:</label>
        <input type="password" class="input" v-model="password" id="con_usuario" required><br><br>

        <!-- TODO comprobar validación -->
        <router-link class="submit" to="/jugador">Iniciar</router-link><br>
        <a href="/registro">¿Eres nuevo? Regístrate</a>
      </form>
    </div>
  </body>
</template>
   
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: 'LoginView',
  components:{
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
body {
  background-color: #a7a8a8;
  display: flex;
  align-items: stretch;
  justify-content: center;

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
</style>
   