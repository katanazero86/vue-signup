<script setup lang="ts"></script>

<template>
  <main class="container pa-2">
    <RouterView />
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
