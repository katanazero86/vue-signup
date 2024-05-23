<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';

interface BasicButtonProps {
  buttonName: string;
  isFull?: boolean;
}

const { buttonName, isFull } = withDefaults(defineProps<BasicButtonProps>(), {
  isFull: false,
});

const buttonWidth = computed(() => (isFull ? '100%' : 'auto'));
const emits = defineEmits(['onClick']);

const handleClick = () => {
  emits('onClick');
};
</script>

<template>
  <button class="basic-button" @click="handleClick">
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
}
</style>
