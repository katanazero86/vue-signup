import { createRouter, createWebHistory } from 'vue-router';
import UserInfo from '@/pages/signup/userInfo/UserInfo.vue';
import UserAddress from '@/pages/signup/userAddress/UserAddress.vue';

const routes = [
  { path: '/', redirect: '/signup/user-info' },
  { path: '/signup/user-info', component: UserInfo },
  { path: '/signup/user-address', component: UserAddress },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
