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

function getValue(key) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`))
    ?.split("=")[1];
} 

//ROUTES GUARD

//Implementamos las rutas que se deben proteger en función de si la cookie de sesión está seteada o no.

router.beforeEach(async (to) => {
  //Si el usuario no tiene sesión no puede ir a la página del jugador o la del admin
  if (
    !getValue("login") &&
    (to.name === "jugador" || to.name === "admin" || to.name === "perfil" || to.name === "anadir")
  ) {
    return { name: "login" };
  }

  //Si el usuario tiene sesión iniciada, no tiene sentido permitirle ir a los formularios o a la portada
  if (getValue("login") && (to.name === "login" || to.name === "registro" || to.name === "home" || to.name === "admin") && getValue("type").includes("jugador")) {
    return { name: "jugador" };
  }
  else if (getValue("login") && (to.name === "login" || to.name === "registro" || to.name === "home" || to.name === "jugador") && getValue("type").includes("admin")) {
    return { name: "admin" };
  }
}); 

export default router;
