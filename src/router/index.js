import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Anadir from "../views/Anadir.vue";
import Jugador from "../views/Jugador.vue";
import Perfil from "../views/Perfil.vue";
import Registro from "../views/Registro.vue";
import Admin from "../views/Admin.vue";
import Actualizar from "../views/Actualizar.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/anadir",
    name: "anadir",
    component: Anadir,
  },
  {
    path: "/jugador",
    name: "jugador",
    component: Jugador,
  },
  {
    path: "/perfil",
    name: "perfil",
    component: Perfil,
  },
  {
    path: "/registro",
    name: "registro",
    component: Registro,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
  {
    path: "/actualizar",
    name: "actualizar",
    component: Actualizar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//FUNCIONES DE GESTIÓN DE COOKIE

// function getValue(key) {
//   // let name = key + "=";
//   // let decodedCookie = decodeURIComponent(document.cookie);
//   // let ca = decodedCookie.split(";");
//   // for (let i = 0; i < ca.length; i++) {
//   //   let c = ca[i];
//   //   while (c.charAt(0) == " ") {
//   //     c = c.substring(1);
//   //   }
//   //   if (c.indexOf(name) == 0) {
//   //     return c.substring(name.length, c.length);
//   //   }
//   // }
//   // return "";
//   return document.cookie
//     .split("; ")
//     .find((row) => row.startsWith(`${key}=`))
//     ?.split("=")[1];
// }

//ROUTES GUARD

// router.beforeEach(async (to, from) => {
//   //Si el usuario no tiene sesión no puede ir a la página del jugador o la del admin
//   if (
//     getValue("login") !== "true" &&
//     (to.name === "jugador" || to.name === "admin" || to.name === "perfil" || to.name === "anadir")
//   ) {
//     return { name: "login" };
//   }

//   //Si el usuario tiene sesión iniciada, no tiene sentido permitirle ir a los formularios o a la portada
//   if (
//     getValue("login") === "true" &&
//     (to.name === "login" || to.name === "registro" || to.name === "home") &&
//     (from.name === "jugador" || from.name === "admin")
//   ) {
//     return { name: from };
//   }
// });

export default router;
