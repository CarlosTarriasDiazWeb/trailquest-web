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


        <Map :modify="modify" :center="center" :localizaciones="localizacion"></Map><br>

        <label for="latitud" required>Latitud:</label><br>
        <input v-model="latitud" type="number" class="input" id="latitud"><br><br>
        <label for="longitud">Longitud:</label><br><br>
        <input v-model="longitud" type="number" class="input" id="longitud"><br><br>
        <input type="button" @click="addMarker" value="Añadir Marcador">
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
            center: [41.386415, 2.169987],
            modify: true,
            latitud: "",
            longitud: "",
            localizacion: []
        };
    },
    methods: {
        enviarFormulario() {
            console.log('Enviado!');
        },
        addMarker() {
            if (this.localizacion.length > 0) this.localizacion.pop()
            this.localizacion.push({
                nombre: "Añadido",
                descripcion: "Descripcion",
                favorito: false,
                descubierto: false,
                position: [this.latitud, this.longitud]
            })
        }

    }
}
</script>
     
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template {
    margin: 10px;
}

header {
    padding: 40px;
    margin: auto;
    background-color: #78d3ae;

}

.input {
    background-color: #d9d9d9;
    border: none;
    border-radius: 2em;
    padding: 4px;
}

button {
    border: none;
    border-radius: 2em;
    padding: 3px;

}

#map {

    height: 180px;
}
</style>
     
