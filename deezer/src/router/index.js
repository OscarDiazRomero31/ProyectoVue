import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SearchView from "@/views/SearchView.vue";
import PlaylistsView from "@/views/PlaylistsView.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/login", component: LoginView },
  {
    path: "/home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("username")) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/search",
    component: SearchView,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("username")) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/playlists",
    component: PlaylistsView,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("username")) {
        next("/login");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
