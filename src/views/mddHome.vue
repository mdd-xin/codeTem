<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="userName">
        <el-input v-model="formInline.user" placeholder="Approved by" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Go Detail</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
const router = useRouter()

const formInline = reactive({
  user: 'mdd',
})

function onSubmit() {
  router.push({
    path: '/about',
    query: {
      user: formInline.user,
    },
  })
}
</script>

<style></style>
