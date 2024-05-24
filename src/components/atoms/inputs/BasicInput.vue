<script setup lang="ts">
import { ref } from 'vue';

type InputType = 'text' | 'password';

interface BasicInputProps {
  type?: InputType;
  modelValue: string;
  disabled?: boolean;
  isNumber?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<BasicInputProps>(), {
  type: 'text',
  disabled: false,
  isNumber: false,
  placeholder: '',
});

// const { type, modelValue } = defineProps<BasicInputProps>();

const emits = defineEmits(['update:modelValue', 'onFocus', 'onBlur']);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  let value = target.value;
  if (props.isNumber) value = value.replace(/[^0-9 -]/g, '');
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
    class="basic-input pa-2"
    :type="type"
    :value="modelValue"
    @input="handleInput"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>

<style lang="scss" scoped>
.basic-input {
  border: 1px solid #ccc;
  border-radius: 8px;
  appearance: none;
  outline: none;
  width: 100%;

  &:disabled {
    background-color: #ccc;
  }
}
</style>
