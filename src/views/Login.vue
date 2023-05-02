<template>
  <header>
    <button>Volver al mapa</button>
  </header>

  <h1>Añadir tesoro</h1>
  <form v-on:submit.prevent="enviarFormulario">
    <label for="" required>Nombre monumento:</label><br>
    <input type="text" name="" id="nom_tesoro"><br><br>
    <label for="" required>Descripción:</label><br>
    <input type="text" name="" id="inf_tesoro"><br><br>
    <label for="">Selecciona una ubicación:</label><br><br>
    <div id="map">
      <Map></Map>
    </div>
    <input type="submit" value="Hecho" class="submit">
  </form>

</template>
   
<script>
export default {
  

  name: 'LoginView',
  
  props: {

  },
  methods:{
    enviarFormulario(){
      console.log('Enviado!');
    },
    
  }
}
</script>
   
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map { height: 180px; }
</style>
   