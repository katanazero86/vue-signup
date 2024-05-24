import { ref } from 'vue';
import type { SignupState, UserInfo, UserAddress } from '@/store/signup';

export const useSignup = (initValue: SignupState) => {
  const userInfo = ref<UserInfo>({
    ...initValue.userInfo,
  });

  const userAddress = ref<UserAddress>({
    ...initValue.userAddress,
  });

  return {
    userInfo,
    userAddress,
  };
};
