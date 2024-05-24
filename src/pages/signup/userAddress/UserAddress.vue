<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSignupStore } from '@/store/signup';
import { useSignup } from '@/composables/useSignup';
import SignupFormContainer from '@/pages/signup/SignupFormContainer.vue';
import BasicButton from '@/components/atoms/buttons/BasicButton.vue';
import SignupFormTitle from '@/pages/signup/SignupFormTitle.vue';
import BasicInput from '@/components/atoms/inputs/BasicInput.vue';
import DaumPostCodeModal from '@/components/modals/daumPostCodeModal/DaumPostCodeModal.vue';
import { type VueDaumPostcodeCompleteResult } from 'vue-daum-postcode';
import { validPhone } from '@/utils/validate.utils';

const signupStore = useSignupStore();
const router = useRouter();

const { userAddress } = useSignup(signupStore.state);

const handleComplete = (result: VueDaumPostcodeCompleteResult) => {
  userAddress.value.zipcode = result.zonecode;
  userAddress.value.address = `${result.address}${result.buildingName ? ` (${result.buildingName})` : ''}`;
};

const handlePrevClick = () => {
  router.back();
};

const handleNextClick = () => {
  const { name, phone, zipcode, address } = userAddress.value;

  if (name === '') {
    alert('name is required');
    return;
  }
  if (phone === '') {
    alert('phone is required');
    return;
  }
  if (zipcode === '') {
    alert('zipcode is required');
    return;
  }
  if (address === '') {
    alert('address is required');
    return;
  }
  if (!validPhone(phone)) {
    alert('phone is not valid');
    return;
  }

  signupStore.actionUserAddress({
    ...userAddress.value,
  });
};

const nameInput = ref<typeof BasicInput | null>(null);

onMounted(() => {
  if (nameInput.value?.inputRef) nameInput.value?.inputRef.focus();
});
</script>

<template>
  <SignupFormContainer>
    <SignupFormTitle text="배송지정보입력" />
    <div class="input-row">
      <p>이름</p>
      <BasicInput v-model="userAddress.name" @keydown.space.prevent ref="nameInput" />
    </div>
    <div class="input-row">
      <p>연락처</p>
      <BasicInput v-model.trim="userAddress.phone" isNumber placeholder="010 1234 5678" />
    </div>
    <div class="input-row">
      <p>주소</p>
      <DaumPostCodeModal @onComplete="handleComplete" />
    </div>
    <div>
      <BasicInput class="my-2" v-model="userAddress.zipcode" disabled />
      <BasicInput class="mb-2" v-model="userAddress.address" disabled />
      <BasicInput v-model="userAddress.addressDetail" :disabled="!userAddress.zipcode" />
    </div>
    <div class="buttons mt-4">
      <BasicButton button-name="이전" is-full @onClick="handlePrevClick" />
      <BasicButton
        buttonName="다음"
        isFull
        @onClick="handleNextClick"
        :disabled="
          !userAddress.name || !userAddress.phone || !userAddress.zipcode || !userAddress.address
        "
      />
    </div>
  </SignupFormContainer>
</template>

<style scoped lang="scss">
.input-row {
  display: flex;
  align-items: center;
  justify-content: space-between;

  :not(:first-child) {
    margin-top: 8px;
  }

  > p {
    flex-basis: 25%;
    letter-spacing: -0.3px;
  }
}

.buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
