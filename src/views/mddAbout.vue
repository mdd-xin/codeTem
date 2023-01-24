<template>
  <h4>{{ route.query.user }}</h4>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style></style>
