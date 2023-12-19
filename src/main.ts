import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import vSelect from 'vue-select'
import App from './App.vue'
import router from './router'

import 'vue-select/dist/vue-select.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use ('v-select', vSelect)

app.mount('#app')
