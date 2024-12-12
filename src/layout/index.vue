<template>
    <el-header></el-header>
    <header>
        <el-button @click="toggleDark()">{{ isDark ? '简白主题' : '暗黑主题' }}</el-button>
    </header>
    <main></main>
    <footer></footer>
</template>

<script setup lang="ts">

import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>