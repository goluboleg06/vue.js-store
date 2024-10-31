import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import StoreView from '@/views/StoreView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = 
[
  { path: '/', component: HomeView },
  { path: '/stores', component: StoreView },
  { path: '/about', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;