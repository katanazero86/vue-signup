import { createRouter, createWebHistory } from 'vue-router';
import UserInfo from '@/pages/signup/userInfo/UserInfo.vue';

const routes = [
  { path: '/', redirect: '/signup' },
  { path: '/signup', component: UserInfo },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
