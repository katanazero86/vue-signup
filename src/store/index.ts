import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useRootStore = defineStore('rootStore', () => {
  const state = ref({
    test: 'rootTest',
  });
  const updateTest = (payload: string) => {
    state.value.test = payload;
  };
  const getTest = computed(() => state.value.test);
  return { state, updateTest, getTest };
});
