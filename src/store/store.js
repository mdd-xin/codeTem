import { defineStore } from 'pinia'

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
