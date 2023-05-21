import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [vue({
        template: {transformAssetUrls}
    }), quasar()],
    assetsInclude: ['**/*.md'],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:9993/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
