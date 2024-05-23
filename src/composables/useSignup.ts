import { ref } from 'vue';

export const useSignup = () => {
  const userInfo = ref({
    email: '',
    password: '',
    confirmPassword: '',
  });


  return {
    userInfo,
  };

};