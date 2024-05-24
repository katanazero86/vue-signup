<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSignupStore } from '@/store/signup';
import { useSignup } from '@/composables/useSignup';
import { useConfirmLeave } from '@/composables/useConfirmLeave';
import SignupFormContainer from '@/pages/signup/SignupFormContainer.vue';
import SignupFormTitle from '@/pages/signup/SignupFormTitle.vue';
import BasicInput from '@/components/atoms/inputs/basicInput/BasicInput.vue';
import BasicButton from '@/components/atoms/buttons/BasicButton.vue';
import NumberInput from '@/components/atoms/inputs/numberInput/NumberInput.vue';
import { validCardNumber } from '@/utils/validate.utils';

const signupStore = useSignupStore();
const router = useRouter();
const { userPayment } = useSignup(signupStore.state);

const handlePrevClick = () => {
  router.back();
};

const handleCompleteClick = () => {
  const { numberGroup1, numberGroup2, numberGroup3, numberGroup4 } = userPayment.value;
  if (numberGroup1 === '') {
    alert('numberGroup1 is required');
    return;
  }
  if (numberGroup2 === '') {
    alert('numberGroup2 is required');
    return;
  }
  if (numberGroup3 === '') {
    alert('numberGroup3 is required');
    return;
  }
  if (numberGroup4 === '') {
    alert('numberGroup4 is required');
    return;
  }

  const cardNumber = `${numberGroup1}${numberGroup2}${numberGroup3}${numberGroup4}`;
  if (!validCardNumber(cardNumber)) {
    alert('cardNumber is not valid');
    return;
  }

  signupStore.actionUserPayment({
    ...userPayment.value,
    cardNumber,
  });

  router.push('/signup/complete');
};

useConfirmLeave();

const numberGroup1Input = ref<typeof BasicInput | null>(null);

onMounted(() => {
  if (signupStore.state.userInfo.email === '' || signupStore.state.userAddress.name === '') {
    alert('회원가입 첫 페이지로 이동 합니다 :)');
    router.replace('/signup/user-info');
    return;
  }

  if (numberGroup1Input.value?.inputRef) numberGroup1Input.value?.inputRef.focus();
});
</script>

<template>
  <SignupFormContainer>
    <SignupFormTitle text="카드정보입력" />
    <div class="input-row">
      <p>카드번호</p>
      <NumberInput
        class="card-input"
        v-model="userPayment.numberGroup1"
        :maxLength="4"
        ref="numberGroup1Input"
      />
      <NumberInput class="card-input" v-model="userPayment.numberGroup2" :maxLength="4" />
      <NumberInput class="card-input" v-model="userPayment.numberGroup3" :maxLength="4" />
      <NumberInput class="card-input" v-model="userPayment.numberGroup4" :maxLength="4" />
    </div>
    <div class="buttons mt-4">
      <BasicButton buttonName="이전" isFull @onClick="handlePrevClick" />
      <BasicButton
        buttonName="완료"
        isFull
        @onClick="handleCompleteClick"
        :disabled="
          !userPayment.numberGroup1 ||
          !userPayment.numberGroup2 ||
          !userPayment.numberGroup3 ||
          !userPayment.numberGroup4
        "
      />
    </div>
  </SignupFormContainer>
</template>

<style scoped lang="scss">
.input-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  :not(:first-child) {
    margin-top: 8px;
  }

  > p {
    width: 100%;
    flex-basis: 100%;
    letter-spacing: -0.3px;
  }

  .card-input {
    flex-basis: calc(25% - 6px);
    width: calc(25% - 6px);
  }
}

.buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
