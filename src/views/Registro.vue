<template>
  <header>
    <NavBar login="false"></NavBar>
  </header>
  <body>
    <div class="imagen-fondo">
      <div class="ajustar">
        <div class="contenedor">
          <h1>Registrate</h1>
          <form v-on:submit.prevent="enviarFormulario">
            <label for="" required>Nombre usuario:</label>
            <input
              class="input px-3"
              type="text"
              v-model="name"
              name="name"
              id="nom_usuario"
            /><br />
            <label for="" required>Contraseña:</label>
            <input
              class="input px-3"
              type="password"
              v-model="password1"
              name="password1"
              id="con_usuario"
            /><br />
            <label for="" required>Repita su contraseña:</label>
            <input
              class="input px-3"
              type="password"
              v-model="password2"
              name="password2"
              id="rep_contra"
            /><br /><br />

            <input type="submit" value="Iniciar" class="submit" /><br /><br />
            <a href="/login" class="registro">¿Eres miembro? Inicia sesión</a>
          </form>
          <!-- CAJA PARA MOSTRAR ERRORES -->
          <div v-if="error" class="error px-3">
            <p v-for="(mensaje, index) in mensajesError" :key="index">
              {{ mensaje }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer>
      <a href="" class="nav-link"> <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook </a>
      <a href="" class="nav-link"> <font-awesome-icon icon="fa-brands fa-twitter" /> Twitter </a>
      <a href="" class="nav-link">
        <font-awesome-icon icon="fa-brands fa-instagram" /> Instagram
      </a>
    </footer> -->
    <Footer></Footer>
  </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "RegistroView",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      mensajesError: [],
      error: false,
      name: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    enviarFormulario() {
      this.error = false;
      this.mensajesError = [];

      if (!this.name) {
        this.error = true;
        this.mensajesError.push("El nombre de usuario es obligatorio");
        return;
      }
      if (!this.password1 || !this.password2) {
        this.error = true;
        this.mensajesError.push("Debes repetir la contraseña");
        return;
      }
      if (this.password1 != this.password2) {
        this.error = true;
        this.mensajesError.push("Las contraseñas no pueden ser diferentes!");
        return;
      }

      if (this.nombreInvalidLength) {
        this.error = true;
        this.mensajesError.push("El nombre de usuario debe contener entre 1 y 50 carácteres");
        return;
      }

      if (this.passwordInvalidLength) {
        this.error = true;
        this.mensajesError.push("La contraseña debe contener entre 5 y 50 carácteres");
        return;
      }

      //Si llegamos a este punto el formulario está validado y se lo podemos enviar a la API
      const formData = new FormData();
      const axios = require("axios");

      formData.append("name", this.name);
      formData.append("password", this.password1);

      axios
        .post("http://localhost:8081/usuario", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          //Si el usuario se registra correctamente en la API, seteamos cookie de sesión y redirigimos a la página de jugador o admin
          if (response !== "") {
            //Guardamos el booleano, el user_id?, el username? TODO
            this.setCookie("login", "true", 2);
            //Tenemos que decidir si es admin o jugador de alguna manera... TODO
            this.$router.push("jugador");
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
          this.mensajesError.push(
            "Hemos tenido un problema con el servidor. Por favor, inténtelo más tarde. "
          );
        });
    },
    setCookie(key, value, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = d.toUTCString();
      document.cookie = `${key}=${value}; Path=/; Expires=${expires}; Secure`;
    },
  },
  computed: {
    nombreInvalidLength() {
      return this.name.length === 0 || this.name.length > 50;
    },
    passwordInvalidLength() {
      return this.password1.length === 0 || this.password1.length > 50;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imagen-fondo {
  background-image: url(/public/assets/imgs/fondo4.jpg);
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
.submit:hover {
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

.error {
  background-color: rgb(208, 98, 98);
  border-radius: 2em;
}

.error p {
  font-size: smaller;
}

.registro {
  transition: all 0.3s ease-in-out;
}

.registro:hover {
  color: #59a888;
  cursor: pointer;
}

a {
  color: #a7a8a8;
}

footer {
  background-color: #59a888;
  /* bottom: 0;
  left: 0; */
  width: 100%;
  /* position: fixed; */
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}
</style>
