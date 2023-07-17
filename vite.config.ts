import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import {visualizer} from "rollup-plugin-visualizer";
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    plugins: [
        vue(),
        visualizer({open: true})
    ],
    assetsInclude:['**/*.md'],
    envDir: 'env',
    worker: {
        format: 'es'
    },
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer]
        }
    },
    resolve: {
        alias: [{
            find: '@',
            replacement: path.resolve(__dirname, './src')
        }, {
            find: 'public',
            replacement: path.resolve(__dirname, './public')
        },{
            find: 'assets',
            replacement: path.resolve(__dirname,'./src/assets')
        }]
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:9993/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/image': {
                target: 'https://www.dmoe.cc/random.php',
                changeOrigin: true,
                followRedirects: false
            }
        }
    }
})
