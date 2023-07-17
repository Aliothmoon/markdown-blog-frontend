import {createApp} from 'vue'
import '@/style.css'
import App from '@/App.vue'

// router
import router from '@/router/index.ts'

// Create  App
const app = createApp(App)

// Animate.css
import 'animate.css';

// Pinia
import {pinia} from '@/store'
import {config} from "md-editor-v3";


app.use(pinia)
    .use(router)

app.mount('#app')
