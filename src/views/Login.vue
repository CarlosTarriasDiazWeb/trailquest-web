<template>
  <header>
    
  </header>

  <h1>Inicia sesión</h1>
  <form v-on:submit.prevent="enviarFormulario">
    <label for="" required>Nombre usuario:</label><br>
    <input type="text" name="" id="nom_usuario"><br><br>
    <label for="" required>Contraseña:</label><br>
    <input type="text" name="" id="con_usuario"><br><br>

    <input type="submit" value="Iniciar" class="submit"><br><br>
    <a href="./web/src/views/Home.vue">¿Eres nuevo? Regístrate</a>
  </form>

</template>
   
<script>
export default {
  
  name: 'LoginView',

  components: {

    },
  methods:{
    enviarFormulario(){
      console.log('Enviado!');
    },
    
    comprobarUsuario(){
      
    }
  }
}
</script>
   
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
   