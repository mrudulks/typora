import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import { QuillEditor } from '@vueup/vue-quill'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.component("QuillEditor", QuillEditor)
app.mount('#app')