import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
  // other options...
  state: () => {
    return {
      content: 'this is mdd',
    }
  },
  actions: {
    change() {
      this.content = 'this is kfc'
    },
  },
})

export const useTheme = defineStore('theme', {
  state: () => {
    return {
      theme: 'light',
    }
  },
  actions: {
    switchTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
  },
})
