import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PlaylistsView from '../views/PlaylistsView.vue';
import SearchView from '../views/SearchView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/playlists', name: 'Playlists', component: PlaylistsView },
  { path: '/search', name: 'Search', component: SearchView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
