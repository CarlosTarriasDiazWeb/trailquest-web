import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Anadir from "../views/Anadir.vue";
import Jugador from "../views/Jugador.vue";
import Perfil from "../views/Perfil.vue";
import Registro from "../views/Registro.vue";
import Admin from "../views/Admin.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to) => {
//   if (
//     // make sure the user is authenticated
//     document.cookie === "" &&
//     // ❗️ Avoid an infinite redirect
//     to.name === "users"
//   ) {
//     // redirect the user to the login page
//     return { name: "login" };
//   }
//   if (document.cookie !== "" && to.name === "login") {
//     return { name: "users" };
//   }
// });

export default router;
