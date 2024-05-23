<script setup lang="ts">
import { computed } from 'vue';

const { buttonName, isFull } = defineProps({
  buttonName: {
    type: String,
    required: true,
  },
  isFull: {
    type: Boolean,
    default: false,
  },
});

const buttonWidth = computed(() => (isFull ? '100%' : 'auto'));
const emit = defineEmits(['onClick']);

const handleClick = () => {
  emit('onClick');
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
