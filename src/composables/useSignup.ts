import { ref } from 'vue';
import type { SignupState, UserInfo, UserAddress, UserPayment } from '@/store/signup';

export const useSignup = (initValue: SignupState) => {
  const userInfo = ref<UserInfo>({
    ...initValue.userInfo,
  });

  const userAddress = ref<UserAddress>({
    ...initValue.userAddress,
  });

  const userPayment = ref<UserPayment>({
    ...initValue.userPayment,
  });

  return {
    userInfo,
    userAddress,
    userPayment,
  };
};
