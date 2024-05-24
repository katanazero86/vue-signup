<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSignup } from '@/composables/useSignup';
import BasicInput from '@/components/atoms/inputs/BasicInput.vue';
import BasicButton from '@/components/atoms/buttons/BasicButton.vue';
import SignupFormContainer from '@/pages/signup/SignupFormContainer.vue';
import SignupFormTitle from '@/pages/signup/SignupFormTitle.vue';
import PasswordRequirements from '@/pages/signup/PasswordRequirements.vue';
import { validEmail, validPassword } from '@/utils/validate.utils';

const router = useRouter();

const { userInfo } = useSignup();
const isOpenRequirements = ref(false);

const handleNextClick = () => {
  const { email, password, confirmPassword } = userInfo.value;

  if (email === '') {
    alert('email is required');
    return;
  }
  if (password === '') {
    alert('passwords is required');
    return;
  }
  if (confirmPassword === '') {
    alert('confirmPassword is required');
    return;
  }
  if (!validEmail(email)) {
    alert('email is not valid');
    return;
  }
  if (!validPassword(password)) {
    alert('password is not valid');
    return;
  }
  if (password !== confirmPassword) {
    alert('confirm password is not valid');
    return;
  }

  router.push('/signup/user-address');
};
</script>

<template>
  <SignupFormContainer>
    <SignupFormTitle text="개인정보입력" />
    <div class="input-row">
      <p>이메일</p>
      <BasicInput v-model="userInfo.email" />
    </div>
    <div class="input-row relative">
      <p>비밀번호</p>
      <BasicInput
        type="password"
        v-model="userInfo.password"
        @onFocus="isOpenRequirements = true"
        @onBlur="isOpenRequirements = false"
      />
      <PasswordRequirements v-if="isOpenRequirements" />
    </div>
    <div class="input-row">
      <p>비밀번호 확인</p>
      <BasicInput type="password" v-model="userInfo.confirmPassword" />
    </div>
    <BasicButton
      class="mt-4"
      button-name="다음"
      is-full
      @on-click="handleNextClick"
      :disabled="!userInfo.email || !userInfo.password || !userInfo.confirmPassword"
    />
  </SignupFormContainer>
</template>

<style lang="scss" scoped>
.input-row {
  display: flex;
  align-items: center;

  :not(:first-child) {
    margin-top: 8px;
  }

  > p {
    flex-basis: 25%;
    letter-spacing: -0.3px;
  }
}
</style>
