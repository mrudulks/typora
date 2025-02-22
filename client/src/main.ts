import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import { QuillEditor } from '@vueup/vue-quill'
import ApiPlugin from './plugins/api'
import clickOutside from './directives/clickOutside'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(ApiPlugin, { store: pinia })
app.component("QuillEditor", QuillEditor)
app.directive('click-outside', clickOutside)
app.mount('#app')