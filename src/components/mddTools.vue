<template>
  <div class="tool-wrap">
    <el-icon :size="20" @click="router.push('/')"><House /></el-icon>
    <el-icon :size="20" @click="theme.switchTheme()"><Sunny /></el-icon>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useTheme } from '@/store/store.js'
const router = useRouter()
const theme = useTheme()
</script>

<style lang="scss" scoped>
.tool-wrap {
  margin: 0 auto;
  i {
    cursor: pointer;
    background-color: orange;
    border-radius: 50%;
    padding: 5px;
    margin: 5px;
  }
}
</style>
