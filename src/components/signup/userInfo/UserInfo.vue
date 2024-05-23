<script setup lang="ts">

import { useSignup } from '@/composables/useSignup';
import BasicInput from '@/components/atoms/inputs/BasicInput.vue';
import BasicButton from '@/components/atoms/buttons/BasicButton.vue';

const { userInfo } = useSignup();

const handleClick = () => {
  console.log(userInfo.value);
};

</script>

<template>
  <section class="user-info">
    <h2 class="user-info-header mb-3">
      개인정보입력
    </h2>
    <div class="input-row">
      <p>이메일</p>
      <BasicInput v-model="userInfo.email" />
    </div>
    <div class="input-row">
      <p>비밀번호</p>
      <BasicInput type="password" v-model="userInfo.password" />
    </div>
    <div class="input-row">
      <p>비밀번호 확인</p>
      <BasicInput type="password" v-model="userInfo.confirmPassword" />
    </div>
    <BasicButton class="mt-4" button-name="다음" is-full @on-click="handleClick" />
  </section>
</template>

<style lang="scss" scoped>
.user-info {
  width: 100%;
  max-width: 600px;
  min-height: 600px;

  .user-info-header {
    font-weight: 500;
    font-size: 28px;
    text-align: center;
  }

  .input-row {
    display: flex;
    align-items: center;

    :not(:first-child) {
      margin-top: 8px;
    }

    > p {
      flex-basis: 25%;
      letter-spacing: -.3px;
    }
  }
}
</style>