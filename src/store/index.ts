import {createPinia, defineStore} from 'pinia'


export const pinia = createPinia();


// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
    state: () => ({
        RightSideDirectory: false
    })
})
