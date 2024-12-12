<template>
  <el-config-provider :size="size">
    <RouterView></RouterView>
  </el-config-provider>
</template>

<script setup lang="ts">
import 'element-plus/theme-chalk/dark/css-vars.css'
import { ref } from "vue";
const size = ref("default");

</script>

<style scoped></style>
