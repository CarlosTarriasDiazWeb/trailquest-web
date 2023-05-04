<template>
    <header>
        <router-link class="volver" to="/admin">Volver al mapa</router-link><br>

    </header>
    <h1>Añadir tesoro</h1>
    <form v-on:submit.prevent="enviarFormulario">
        <label for="" required>Nombre monumento:</label><br>
        <input type="text" class="input" id="nom_tesoro"><br><br>
        <label for="" required>Descripción:</label><br>
        <textarea name="" id="inf_tesoro" class="input" cols="30" rows="10"></textarea><br><br>

        <label for="latitud" required>Latitud:</label><br>
        <input v-model="latitud" type="number" class="input" id="latitud"><br><br>
        <label for="longitud">Longitud:</label><br>
        <input v-model="longitud" type="number" class="input" id="longitud"><br><br>
        <input type="button" @click="addMarker" class="marcador" value="Añadir Marcador"> <br><br>

        <label for="">Selecciona una ubicación:</label><br><br>
        <Map :modify="modify" :center="center" :localizaciones="localizacion"></Map><br>
    </form>

    <footer>
        <input type="submit" value="Hecho" class="submit">

    </footer>
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
            console.log('Marcador añadido!');
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
    border-radius: 1em;
    padding-left: 10px;
    margin-left: 4px;
    width: 700px;
}

.submit {
    border: none;
    border-radius: 2em;
    padding: 3px 20px;
    transition: all 0.3s ease-in-out;
}

.submit:hover {
    background-color: var(--black);
    color: white !important;
    cursor: pointer;
}

.marcador {
    border: none;
    border-radius: 2em;
    padding: 3px 12px;
    background-color: #59a888;
    color: #fff;
    transition: all 0.3s ease-in-out;
}

.marcador:hover{
    background-color: #78d3ae;
    color: #000;
    cursor: pointer;
}

.volver {
    color: #fff;
    background-color: #d9d9d9;
    border-radius: 1em;
    padding: 6px;
}

#map {
    height: 180px;
}

footer {
    background-color: #59a888;
    padding: 20px;

}
</style>
     
