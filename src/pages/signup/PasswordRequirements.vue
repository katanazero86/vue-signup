<script setup lang="ts"></script>

<template>
  <div class="password-requirements">
    <h3>비밀번호 입력 조건</h3>
    <ul>
      <li>영문 대문자, 소문자, 숫자, 특수문자를 포함한 8자리 이상의 문자열</li>
      <li>공백 입력 불가능</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.password-requirements {
  position: absolute;
  top: -114px;
  left: 118px;
  padding: 8px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;

  > h3 {
    margin-top: 0;
  }

  > ul {
    list-style: none;
    padding-left: 0;

    > li {
      margin-bottom: 4px;
      font-size: 12px;
      letter-spacing: -0.3px;
    }
  }
}
</style>
