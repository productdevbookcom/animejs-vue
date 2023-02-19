import { createApp } from 'vue'
import './style.css'
import { animejsPlugin } from '@productdevbook/animejs-vue'
import App from './App.vue'

const app = createApp(App)
app.use(animejsPlugin)
app.mount('#app')
