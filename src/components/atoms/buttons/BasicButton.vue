<script setup lang="ts">
import { computed } from 'vue';

interface BasicButtonProps {
  buttonName: string;
  isFull?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<BasicButtonProps>(), {
  isFull: false,
  disabled: false,
});

const buttonWidth = computed(() => (props.isFull ? '100%' : 'auto'));
const emits = defineEmits(['onClick']);

const handleClick = () => {
  emits('onClick');
};
</script>

<template>
  <button class="basic-button" @click="handleClick" :disabled="disabled">
    {{ buttonName }}
  </button>
</template>

<style lang="scss" scoped>
.basic-button {
  font-size: 18px;
  cursor: pointer;
  background-color: #4f46e5;
  color: #fff;
  padding: 12px 18px;
  border-radius: 8px;
  border: 1px solid #4f46e5;
  width: v-bind(buttonWidth);

  &:hover {
    background-color: #3730a3;
  }

  &:disabled {
    background-color: #cccccc;
    border-color: #cccccc;
    pointer-events: none;
  }
}
</style>
