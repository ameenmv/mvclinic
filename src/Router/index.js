import { createRouter, createWebHistory } from "vue-router";

import Home from "../Pages/Home.vue";
import Doctors from "../Pages/Doctors.vue";
import Doctor from "../Pages/Doctor.vue";
import Login from "../Pages/Login.vue";
import Login2 from "../Pages/Login2.vue";
import Doctordash from "../Pages/Doctordash.vue";
import Patientdash from "../Pages/Patientdash.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/doctors",
    name: "Doctors",
    component: Doctors,
  },
  {
    path: "/doctor/:id",
    name: "Doctor",
    component: Doctor,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Login2",
    name: "Login2",
    component: Login2,
  },
  {
    path: "/doctordash",
    name: "Doctordash",
    component: Doctordash,
  },
  {
    path: "/patientdash",
    name: "Patientdash",
    component: Patientdash,
  },
];

const router = createRouter({
  history: createWebHistory(), // دي مهمة جداً عشان ال URL يتغير بشكل طبيعي
  routes,
});

export default router;
