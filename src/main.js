import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router/router.js'

import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
