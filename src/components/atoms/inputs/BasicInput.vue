<script setup lang="ts">
type InputType = 'text' | 'password';

interface BasicInputProps {
  type?: InputType;
  modelValue: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<BasicInputProps>(), {
  type: 'text',
  disabled: false,
});

// const { type, modelValue } = defineProps<BasicInputProps>();

const emits = defineEmits(['update:modelValue', 'onFocus', 'onBlur']);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  target.value = target.value.trim();
  emits('update:modelValue', target.value);
};

const handleFocus = () => {
  emits('onFocus');
};

const handleBlur = () => {
  emits('onBlur');
};
</script>

<template>
  <input
    class="basic-input pa-2"
    :type="type"
    :value="modelValue"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    :disabled="disabled"
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
