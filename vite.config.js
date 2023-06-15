import {defineConfig} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'
import {visualizer} from "rollup-plugin-visualizer";
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        vue({
            template: {transformAssetUrls}
        }),
        quasar(),
        visualizer({open: true})
    ],
    resolve: {
        alias: [{
            find: '@',
            replacement: path.resolve(__dirname, './src')
        }, {
            find: 'public',
            replacement: path.resolve(__dirname, './public')
        }]
    },
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
