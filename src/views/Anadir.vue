<template>
    <header>
        <button>Volver al mapa</button>
    </header>

    <h1>Añadir tesoro</h1>
    <form v-on:submit.prevent="enviarFormulario">
        <label for="" required>Nombre monumento:</label><br>
        <input type="text" class="input" id="nom_tesoro"><br><br>
        <label for="" required>Descripción:</label><br>
        <input type="text" class="input" id="inf_tesoro"><br><br>
        <label for="">Selecciona una ubicación:</label><br><br>

        <div id="map" style="height:600px; width:800px">
            <Map></Map>
        </div><br>

        <input type="submit" value="Hecho" class="submit">
    </form>
</template>
     
<script>
import Map from '@/components/Map.vue';
export default {

    name: 'AnadirView',

    components: {
        Map
    },
    data() {
        return {
            zoom: 8,
        };
    },
    methods: {
        enviarFormulario() {
            console.log('Enviado!');
        },

    }
}
</script>
     
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template{
    margin: 10px;
}

header{
    padding: 40px;
    margin: auto;
    background-color: #78d3ae;
    
}

.input{
    background-color: #d9d9d9;
    border: none;
    border-radius: 2em;
    padding: 4px;
  }

button{
    border: none;
    border-radius: 2em;
    padding: 3px;
    
}
#map {
    
    height: 180px;
}
</style>
     
