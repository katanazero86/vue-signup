<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

type TextInputType = 'text' | 'password';

const { type, modelValue } = withDefaults(defineProps<{
  type?: TextInputType,
  modelValue: string,
}>(), {
  type: 'text',
  modelValue: '',
});

const emits = defineEmits(['update:modelValue']);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits('update:modelValue', target.value);
};

</script>

<template>
  <input class="basic-input pa-2" :type="type" :value="modelValue" @input="handleInput" />
</template>

<style lang="scss" scoped>
.basic-input {
  border: 1px solid #ccc;
  border-radius: 8px;
  appearance: none;
  outline: none;
  width: 100%;
}
</style>