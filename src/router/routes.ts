import type {RouteRecordRaw} from "vue-router";
import MPreview from "@/components/MD/MPreview/index.vue";
import InfoItemList from "@/components/InfoItemList/index.vue";
import {useStore} from "@/store";


export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import('@/views/Home/index.vue')
    },
    {
        path: '/archives',
        component: () => import('@/views/Main/index.vue'),
        children: [
            {
                path: "",
                component: InfoItemList,
                beforeEnter: () => {
                    const store = useStore();
                    store.RightSideDirectory = false
                }
            },
            {
                path: ':aid',
                component: MPreview,
                beforeEnter: (to, form) => {
                    const store = useStore();
                    store.RightSideDirectory = true
                    store.Aid = <string>to.params.aid
                },
                props: true

            }
        ]
    },
    {
        path: "/test",
        component: () => import('@/components/LeftAside/LeftAsideItem/index.vue')
    },
    {
        path: '/:error*',
        component: () => import('@/views/NotFound/index.vue')
    }
]