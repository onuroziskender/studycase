import { createApp } from 'vue'
import './css/styles.scss'
import router from "./routes/index.js";
import App from './App.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
