<script setup lang="ts">
interface SignupFormTitleProps {
  text: string;
}

const { text } = defineProps<SignupFormTitleProps>();
</script>

<template>
  <h2 class="signup-form-title mb-3">{{ text }}</h2>
</template>

<style scoped lang="scss">
.signup-form-title {
  font-weight: 500;
  font-size: 28px;
  text-align: center;
}
</style>
