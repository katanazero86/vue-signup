<script setup lang="ts">
import { ref } from 'vue';

interface BasicInputProps {
  modelValue: string;
  disabled?: boolean;
  placeholder?: string;
  maxLength?: number;
}

const props = withDefaults(defineProps<BasicInputProps>(), {
  disabled: false,
  placeholder: '',
});

const emits = defineEmits(['update:modelValue']);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  let value = target.value;
  value = value.replace(/[^0-9]/g, '');
  if (props.maxLength !== undefined && value.length > props.maxLength) {
    value = value.slice(0, props.maxLength);
  }

  emits('update:modelValue', value);
  target.value = value;
};

const inputRef = ref<HTMLInputElement | null>(null);
defineExpose({
  inputRef,
});
</script>

<template>
  <input
    ref="inputRef"
    class="number-input pa-2"
    type="number"
    :value="modelValue"
    @input="handleInput"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>

<style lang="scss" scoped>
.number-input {
  border: 1px solid #ccc;
  border-radius: 8px;
  appearance: none;
  outline: none;
  width: 100%;

  &:disabled {
    background-color: #ccc;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;
}
</style>
