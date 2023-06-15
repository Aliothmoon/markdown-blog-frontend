import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

// El-Plus
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

// router
import router from './router/index'

// Create  App
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// Animate.css
import 'animate.css';


// Quasar
import {Quasar} from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'

// Import Quasar css
import 'quasar/dist/quasar.css'

// HighLightJs
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

// Pinia
import {pinia} from './pinia/index'
import {config} from "md-editor-v3";




import iconSet from 'quasar/icon-set/fontawesome-v6'

app.use(pinia)
    .use(router)
    .use(ElementPlus)
    .use(Quasar, {
        plugins: {}, // import Quasar plugins and add here
        lang: quasarLang,
        iconSet: iconSet
    })


app.mount('#app')
