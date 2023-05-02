import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";


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
