<template>
  <div ref="content" class="dark">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>{{ route.name }}</h2>
    <router-view />
    <mdd-tools />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import mddTools from '@/components/mddTools.vue'
import { useTheme } from '@/store/store.js'
const route = useRoute()

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
