import { ref } from 'vue';

export const useSignup = () => {
  const userInfo = ref({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const userAddress = ref({
    name: '',
    phone: '',
    zipcode: '',
    address: '',
    addressDetail: '',
  });

  return {
    userInfo,
    userAddress,
  };
};
