
import {createRouter, createWebHashHistory} from "vue-router";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/mag',
            component: () => import('@/views/Main/index.vue')
        },
        {
            path: "/test",
            component: () => import('@/components/LeftAsideItem/index.vue')
        },
        {
            path: '/:error*',
            component: () => import('@/views/NotFound/index.vue')
        }
    ],
})

export default router;