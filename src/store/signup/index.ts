import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface UserInfo {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserAddress {
  name: string;
  phone: string;
  zipcode: string;
  address: string;
  addressDetail: string;
}

export interface UserPayment {
  cardNumber: number;
}

export interface SignupState {
  userInfo: UserInfo;
  userAddress: UserAddress;
  userPayment: UserPayment;
}

export const useSignupStore = defineStore('signupStore', () => {
  const state = ref<SignupState>({
    userInfo: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    userAddress: {
      name: '',
      phone: '',
      zipcode: '',
      address: '',
      addressDetail: '',
    },
    userPayment: {
      cardNumber: 0,
    },
  });

  const actionUserInfo = (payload: UserInfo) => {
    state.value.userInfo = payload;
  };

  const actionUserAddress = (payload: UserAddress) => {
    state.value.userAddress = payload;
  };

  return {
    state,
    actionUserInfo,
    actionUserAddress,
  };
});
