<script setup lang="ts">
import { VueDaumPostcode, type VueDaumPostcodeCompleteResult } from 'vue-daum-postcode';
import BasicButton from '@/components/atoms/buttons/BasicButton.vue';
import { ref } from 'vue';

const emites = defineEmits(['onComplete']);

const isOpen = ref(false);

const handleComplete = (result: VueDaumPostcodeCompleteResult) => {
  isOpen.value = false;
  emites('onComplete', result);
};

const handleClick = (e: Event) => {
  if (e.target === e.currentTarget) {
    isOpen.value = false;
  }
};
</script>
<template>
  <template v-if="isOpen">
    <div class="daum-post-code-modal-container" @click="handleClick">
      <div class="daum-post-code-modal-body">
        <VueDaumPostcode @complete="handleComplete" :maxSuggestItems="20" />
      </div>
    </div>
  </template>
  <BasicButton buttonName="우편번호" @onClick="isOpen = true" />
</template>
<style lang="scss" scoped>
.daum-post-code-modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);

  .daum-post-code-modal-body {
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 500px;
    overflow-y: auto;
  }
}
</style>
