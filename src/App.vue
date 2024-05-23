<script setup lang="ts">
import UserInfo from '@/components/signup/userInfo/UserInfo.vue';
</script>

<template>
  <main class="container pa-2">
    <UserInfo />
  </main>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
</style>
