import ArticleList from "@/views/Main/ArticleList/index.vue";

import {createRouter, createWebHashHistory} from "vue-router";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/mag',
            component: () => import('@/views/Manage/index.vue')
        },
        {
            path: '/editor',
            name: 'editor',
            component: () => import('@/views/Editor/index.vue')
        },
        {
            path: '/preview',
            name: 'preview',
            component: () => import('@/views/Preview/index.vue')
        },
        {
            path: '/start',
            name: 'start',
            alias: '/',
            component: () => import('@/views/Home/index.vue')
        },
        {
            path: '/home',
            component: () => import('@/views/Main/index.vue'),
            children: [
                {
                    name: 'alist',
                    path: '',
                    component: ArticleList,
                },
                {
                    name: 'content',
                    path: 'ct',
                    component: () => import('@/views/Main/ArticleContent/index.vue'),
                },
            ]
        },
        {
            path: '/:error*',
            component: () => import('@/views/NotFound/index.vue')
        }
    ],
})

// CDN 验证
// router.beforeEach(async (to, from, next) => {
//     let data = await Auth(Storage.local.get("ATTACK"));
//     if (to.name === 'editor') {
//         if (data.data.data) {
//             next()
//         } else {
//             next({name: 'start'})
//         }
//     } else {
//         next();
//     }
// })
export default router;