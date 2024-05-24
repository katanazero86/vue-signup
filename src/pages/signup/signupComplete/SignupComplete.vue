<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useSignupStore } from '@/store/signup';
import SignupFormContainer from '@/pages/signup/SignupFormContainer.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const signupStore = useSignupStore();

onMounted(() => {
  if (!signupStore.isCompleted) {
    alert('회원 가입을 진행해 주세요 :)');
    router.replace('/signup/user-info');
  }
});

onUnmounted(() => {
  signupStore.actionInitSignupStoreState();
});
</script>

<template>
  <template v-if="signupStore.isCompleted">
    <SignupFormContainer>
      <p class="complete-welcome">
        "{{ signupStore.state.userAddress.name }}" 님,
        <br />
        회원가입이
        <br />
        완료 되었습니다.
      </p>
      <div class="complete-info">
        <p>
          이메일 :
          <a :href="`mailto:${signupStore.state.userInfo.email}`">{{
            signupStore.state.userInfo.email
          }}</a>
        </p>
        <p>
          주소 : {{ signupStore.state.userAddress.address }}
          <template v-if="signupStore.state.userAddress.addressDetail !== ''">
            <br />
            {{ signupStore.state.userAddress.addressDetail }}
          </template>
        </p>
        <p>연락처 : {{ signupStore.state.userAddress.phone }}</p>
      </div>
    </SignupFormContainer>
  </template>
</template>

<style scoped lang="scss">
.complete-welcome {
  font-size: 28px;
  font-weight: 500;
  text-align: center;
}
.complete-info {
  margin-top: 28px;
  text-align: center;
  letter-spacing: -0.3px;
}
</style>
