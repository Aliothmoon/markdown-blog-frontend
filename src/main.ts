import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

// El-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// router
import router from './router/index'

// Create  App
const app = createApp(App)

// Animate.css
import 'animate.css';

// Pinia
import {pinia} from '@/pinia'
import {config} from "md-editor-v3";




app.use(pinia)
    .use(router)
    .use(ElementPlus)

app.mount('#app')
