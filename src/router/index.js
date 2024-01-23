import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import PokemonsView from "../views/PokemonsView.vue";
import PokeView from "../views/PokeView.vue";
import NotFoundViewVue from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/pokemons",
    name: "pokemons",
    component: PokemonsView,
  },
  {
    path: "/pokemons/:pokeName",
    name: "pokeName",
    component: PokeView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});

export default router;
