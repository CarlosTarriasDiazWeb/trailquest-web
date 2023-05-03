<template>
    <header>

    </header>

    <h1>Registrate</h1>
    <form v-on:submit.prevent="enviarFormulario">
        <label for="" required>Nombre usuario:</label><br>
        <input type="text" name="" id="nom_usuario"><br><br>
        <label for="" required>Contraseña:</label><br>
        <input type="text" name="" id="con_usuario"><br><br>
        <label for="" required>Repita su contraseña:</label><br>
        <input type="text" name="" id="rep_contra"><br><br>

        <input type="submit" value="Iniciar" class="submit"><br><br>
        <a href="/login">¿Eres miembro? Inicia sesión</a>
    </form>
</template>
     
<script>
export default {

    name: 'RegistroView',

    components: {

    },
    methods: {
        enviarFormulario() {
            console.log('Enviado!');
        },

        comprobarUsuario() {

        }
    }
}
</script>
     
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    header{
      background-color: #78d3ae;
      padding: 100px;
    }
  
    label{
      color: #a7a8a8;
    }
  
    .input{
      background-color: #d9d9d9;
      border: none;
      border-radius: 2em;
      padding: 4px;
    }
    
    .submit{
      border-radius: 2em;
      border: none;
      background-color: #78d3ae;
      color: white;
      padding-left: 20px;
      padding-right: 20px;
    }
  
    a{
      color: #a7a8a8;
    }
  
  </style>
     