<template>
    <header>
        <router-link class="volver" to="/admin">Volver al mapa</router-link><br>

    </header>
    <h1>Añadir tesoro</h1>
    <form v-on:submit.prevent="enviarFormulario" enctype="multipart/form-data">
        <label for="" required>Nombre monumento:</label><br>
        <input type="text" v-model="nombre" class="input" id="nom_tesoro"><br><br>
        <input type="file"  name="foto_tesoro" id="foto_tesoro">
        <label for="" required>Descripción:</label><br>
        <textarea v-model="descripcion" name="" id="inf_tesoro" class="input" cols="30" rows="10"></textarea><br><br>

        <label for="latitud" required>Latitud:</label><br>
        <input v-model="latitud" type="number" class="input" id="latitud"><br><br>
        <label for="longitud">Longitud:</label><br>
        <input v-model="longitud" type="number" class="input" id="longitud"><br><br>
        <input type="button" @click="addMarker" class="marcador" value="Añadir Marcador"> <br><br>

        <label for="">Selecciona una ubicación:</label><br><br>
        <Map :modify="modify" :center="center" :localizaciones="localizacion"></Map><br>
    
        
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
            nombre: "",
            descripcion: "",
            localizacion: []
        };
    },
    methods: {
        enviarFormulario() {
            const axios = require('axios')
            // Create a new FormData object
            const formData = new FormData();

            // Append data to the form data object
            //const fileInput = document.getElementById("foto_tesoro")
            
            formData.append('titulo', this.nombre);
            formData.append('descripcion', this.descripcion );
            formData.append('latitud', this.latitud );
            formData.append('longitud', this.longitud );
            formData.append('foto_tesoro', this.$refs.foto_tesoro.files[0]);

            // Send the form data as a POST request
            axios.post('http://localhost:8082/tesoros', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
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
    background-color: #59a888;
    color: white;
    transition: all 0.3s ease-in-out;
}

.submit:hover {
    background-color: white;
    color: black;
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

.marcador:hover {
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
    display: flex;
    justify-content: center;
}
</style>
     
