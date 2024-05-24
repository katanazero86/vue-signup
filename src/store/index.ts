import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useRootStore = defineStore('rootStore', () => {
  const rootState = ref({
    test: 'rootTest',
  });
  const updateTest = (payload: string) => {
    rootState.value.test = payload;
  };
  const getTest = computed(() => rootState.value.test);
  return { rootState, updateTest, getTest };
});
