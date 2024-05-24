import { createRouter, createWebHistory } from 'vue-router';
import UserInfo from '@/pages/signup/userInfo/UserInfo.vue';
import UserAddress from '@/pages/signup/userAddress/UserAddress.vue';
import UserPayment from '@/pages/signup/userPayment/UserPayment.vue';
import SignupComplete from '@/pages/signup/signupComplete/SignupComplete.vue';

const routes = [
  { path: '/', redirect: '/signup/user-info' },
  { path: '/signup/user-info', component: UserInfo },
  { path: '/signup/user-address', component: UserAddress },
  { path: '/signup/user-payment', component: UserPayment },
  { path: '/signup/complete', component: SignupComplete },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
