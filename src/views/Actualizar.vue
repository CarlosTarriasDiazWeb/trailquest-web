<template>
    <header><router-link class="volver" to="/admin">Volver al mapa</router-link><br /></header>

    <div class="fondoColor">
        <main class="container">
            <h1>Modificar tesoro</h1>
            <form v-on:submit.prevent="enviarFormulario" enctype="multipart/form-data">
                <label for="" required>Nombre monumento:</label><br />
                <input type="text" v-model="nombre" class="input" id="nom_tesoro" /><br /><br />
                <input type="file" name="foto_tesoro" id="foto_tesoro" /><br><br>
                <label for="" required>Descripción:</label><br />
                <textarea v-model="descripcion" name="" id="inf_tesoro" class="input" cols="30"
                    rows="10"></textarea><br /><br />

                <label for="latitud" required>Latitud:</label><br />
                <input v-model="latitud" type="number" class="input" id="latitud" /><br /><br />
                <label for="longitud">Longitud:</label><br />
                <input v-model="longitud" type="number" class="input" id="longitud" /><br /><br />
                <input type="button" @click="addMarker" class="marcador" value="Añadir Marcador" /> <br /><br />

                <div class="selección">
                    <label for="">Selecciona una ubicación:</label><br />
                </div>
                
            </form>
            <Map :modify="modify" :center="center" :localizaciones="localizacion"></Map>
            
        </main>
        <footer>
            <input type="submit" value="Hecho" class="submit" />
        </footer>
    </div>
</template>
  
<script>
import Map from "@/components/Map.vue";
export default {
    name: "ActualizarView",

    components: {
        Map,
    },
    data() {
        return {
            zoom: 8,
            center: [41.386415, 2.169987],
            modify: true,
            latitud: this.$route.query.latitud,
            longitud: this.$route.query.longitud,
            nombre: this.$route.query.titulo,
            descripcion: this.$route.query.descripcion,
            localizacion: [],
        };
    },
    methods: {
        enviarFormulario() {
            const axios = require("axios");
            // Create a new FormData object
            const formData = new FormData();

            // Append data to the form data object
            const fileInput = document.getElementById("foto_tesoro");

            formData.append("titulo", this.escapeString(this.nombre.trim()));
            formData.append("descripcion", this.escapeString(this.descripcion.trim()))
            formData.append("latitud", this.latitud);
            formData.append("longitud", this.longitud);
            formData.append("foto_tesoro", fileInput.files[0]);

            //console.log(formData);

            // const tesoro = {
            //     tesoro_data : {
            //         'titulo': this.nombre,
            //         'descripcion': this.descripcion,
            //         'latitud': this.latitud,
            //         'longitud':this.longitud,
            //         'foto_tesoro': fileInput.files[0]
            //     }
            // }

            // Send the form data as a POST request
            axios
                .post("http://172.23.7.110:8081/tesoros", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        addMarker() {
            if (this.localizacion.length > 0) this.localizacion.pop();
            this.localizacion.push({
                nombre: "Añadido",
                descripcion: "Descripcion",
                favorito: false,
                descubierto: false,
                position: [this.latitud, this.longitud],
            });
            this.modifyCenter();
            console.log("Marcador añadido!");
        },
        modifyCenter() {
            this.center = [this.latitud, this.longitud];
        },
        escapeString(string) {
            return `'${string}'`;
        }
    },
};
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
    display: flex;
    justify-content: end;
}

.volver {
    background-color: #a7a8a8;
    color: #fff;
    transition: all 0.3s ease-in-out;
}

.volver:hover {
    background-color: #59a888;
    cursor: pointer;
}

.container {
    display: flex;
    align-items: center;
    border-radius: 2em 2em 0em 0em;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 20px 0px 0px 0px;
    background-color: #fff;
}

.fondoColor {
    background-color: #a7a8a8;
}

.input {
    background-color: #d9d9d9;
    border: none;
    border-radius: 1em;
    padding-left: 10px;
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
    transition: all 0.3s ease-glpat-ygys_qpEpu1yyZqPdPh1in-out;
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
    padding: 0%;
    
}

footer {
    background-color: #59a888;
    padding: 20px;
    display: flex;
    justify-content: center;
}
</style>
  