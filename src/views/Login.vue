<template>
  <header>
    <NavBar login="false"></NavBar>
  </header>

  <div>
    <main class="flex-grow-1">
      <div class="imagen-fondo">
        <div class="ajustar">
          <div class="contenedor">
            <h1>Inicia sesión</h1>
            <form novalidate v-on:submit.prevent="enviarFormulario">
              <label for="" required>Nombre usuario:</label>
              <input
                type="text"
                class="input px-3"
                v-model="name"
                id="nom_usuario"
                required
              /><br /><br />
              <label for="" required>Contraseña:</label>
              <input
                type="password"
                class="input px-3"
                v-model="password"
                id="con_usuario"
                required
              /><br /><br />

              <button type="submit" class="submit">Iniciar</button><br />
              <a class="registro" href="/registro">¿Eres nuevo? Regístrate</a>
            </form>
            <!-- CAJA PARA MOSTRAR ERRORES -->
            <div v-if="error" class="error d-flex flex-column py-3 g-2 align-content-center px-2">
              <p v-for="(mensaje, index) in mensajesError" :key="index">
                {{ mensaje }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "LoginView",
  components: {
    NavBar,
    Footer,
  },

  data() {
    return {
      mensajesError: [],
      error: false,
      name: "",
      password: "",
    };
  },

  methods: {
    enviarFormulario() {
      this.error = false;
      this.mensajesError = [];

      //Validamos formulario
      if (this.nombreInvalidLength) {
        this.error = true;
        this.mensajesError.push("El nombre de usuario debe contener entre 1 y 50 carácteres");
      }

      if (this.passwordInvalidLength) {
        this.error = true;
        this.mensajesError.push("La contraseña debe contener entre 5 y 50 carácteres");
      }

      if (this.error) return;

      //Si llegamos a este punto el formulario está validado y se lo podemos enviar a la API
      const formData = new FormData();
      const axios = require("axios");

      formData.append("usu_username", this.name);
      formData.append("usu_password", this.password);

      //TOKEN?
      //const token = `${this.name}:${this.password}`;

      axios
        .post("http://172.23.7.110:8081/jugador", formData, {
          headers: {
            "Content-Type": "application/json",
            //Authorization: `Basic ${token}`, //???
            // Authorization : `Bearer ${localStorage.getItem("access_token")}`
          },
        })
        .then((response) => {
          console.log(response)
          //Si el usuario se autentica correctamente en la API, seteamos cookie de sesión y redirigimos a la página de jugador o admin
          //Cambiar la condición..
          // if (response !== "") {
          //   //Guardamos el booleano, el user_id?, el username?
          //   this.setCookie("login", "true", 2);

          //   //Tenemos que decidir si es admin o jugador de alguna manera... TODO
          //   this.$router.push("jugador");
          // }
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
      return this.name.trim().length === 0 || this.name.trim().length > 50;
    },
    passwordInvalidLength() {
      return this.password.trim().length === 0 || this.password.trim().length > 50;
    },
  },
};
</script>

<style scoped>
body {
  background-color: #59a888;
}
main {
  height: 100%;
}

.imagen-fondo {
  background-image: url(/public/assets/imgs/fotoFondo.jpg);
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
  border: none;
  border-radius: 3em 0em;
  background-color: #fff;
  margin: 0px 100px;
  padding: 20px;
  box-shadow: 10px 5px 10px #000;
}

.ajustar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.input {
  background-color: #d9d9d9;
  border: none;
  border-radius: 2em;
  padding: 4px;
  margin: 4px;
}

.submit {
  border-radius: 2em;
  border: none;
  background-color: #78d3ae;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.3s ease-in-out;
}

.submit:hover {
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

.nav-link {
  color: #fff;
  transition: all 0.3s ease-in-out;
}

.nav-link:hover {
  color: #78d3ae;
  cursor: pointer;
}

.registro {
  transition: all 0.3s ease-in-out;
}

.registro:hover {
  color: #59a888;
  cursor: pointer;
}

.error {
  background-color: rgb(208, 98, 98);
  border-radius: 2em;
}

.error p {
  font-size: smaller;
  font-weight: 500;
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
