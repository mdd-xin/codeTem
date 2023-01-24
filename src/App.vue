<template>
  <div class="dark" ref="content">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
    <mdd-tools />
  </div>
</template>

<script setup>
import mddTools from '@/components/mddTools.vue'
import { ref } from 'vue'

import { useTheme } from '@/store/store.js'

const content = ref(null)

const theme = useTheme()

theme.$subscribe((mutation, state) => {
  const html = document.documentElement
  html.classList = [state.theme]
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
