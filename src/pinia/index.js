import {createPinia, defineStore} from 'pinia'


export const pinia = createPinia();


// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
    state: () => ({
        list: [],
        content: '',
        articleId: '',
        // 是否是搜索结果
        isSearch: false,
        //     锚点数组
        currentPage: ''
    })
})
