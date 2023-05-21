import ArticleList from "../components/ArticleList.vue";
import Home from "../components/Home.vue";

import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import EditorPro from "../components/edit/EditorPro.vue";
import Preview from "../components/preview/Preview.vue";
import {Auth} from '../api/article/auth'
import Storage from '../utils/cache'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/edit',
            name: 'editor',
            component: EditorPro
        },
        {
            path: '/preview',
            name: 'preview',
            component: Preview
        },
        {
            path: '/start',
            name: 'start',
            alias: '/',
            component: Home
        },
        {
            path: '/home',
            component: () => import('../components/Main.vue'),
            children: [
                {
                    name: 'alist',
                    path: '',
                    component: ArticleList,
                },
                {
                    name: 'content',
                    path: 'ct',
                    component: () => import('../components/ArticleContent.vue'),
                },
            ]
        },
        {
            path: '/:error*',
            component: () => import('../components/NotFound.vue')
        }
    ],
})

router.beforeEach(async (to, from, next) => {
    let data = await Auth(Storage.local.get("ATTACK"));
    if (to.name === 'editor') {
        if (data.data.data) {
            next()
        } else {
            next({name: 'start'})
        }
    } else {
        next();
    }
})
export default router;