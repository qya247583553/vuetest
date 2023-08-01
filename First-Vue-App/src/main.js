

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
const app = createApp(App)
axios.defaults.baseURL='https://localhost:7070/api/Adminuser/adminuser'
app.config.globalProperties.$http = axios
app.use(router)

app.mount('#app')
