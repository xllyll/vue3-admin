<template>
  <div class="login-root">
    123
    <el-button @click="onLogin">login</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const onLogin = () => {
  router.push({
    path: "/",
  });
};
</script>

<style lang="less">
.login-root {
  width: 100vw;
  height: 100vh;
  background-color: #f80000;
}
</style>
