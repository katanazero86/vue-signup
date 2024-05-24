import { ref } from 'vue';
import { defineStore } from 'pinia';

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
  cardNumber: string;
  numberGroup1: string;
  numberGroup2: string;
  numberGroup3: string;
  numberGroup4: string;
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
      cardNumber: '',
      numberGroup1: '',
      numberGroup2: '',
      numberGroup3: '',
      numberGroup4: '',
    },
  });

  const actionUserInfo = (payload: UserInfo) => {
    state.value.userInfo = payload;
  };

  const actionUserAddress = (payload: UserAddress) => {
    state.value.userAddress = payload;
  };

  const actionUserPayment = (payload: UserPayment) => {
    state.value.userPayment = payload;
  };

  return {
    state,
    actionUserInfo,
    actionUserAddress,
    actionUserPayment,
  };
});
