<script lang="ts">
import {defineComponent, ref} from 'vue'
import {NButton, NIcon, NList, NListItem, NSpace, NThing} from "naive-ui";

export default defineComponent({
  name: "RCategory",
  components: {NSpace, NThing, NListItem, NList, NButton, NIcon},
  setup() {
    const cag = ref([])
    for (let i = 0; i < 7; i++) {
      fetch('https://api.xygeng.cn/one').then(r => r.json()).then((r) => {
        return r.data;
      }).then((r) => {
        // console.log(r)
        cag.value.push(r.origin.substring(0,10))
      })
    }

    return {
      cag
    }
  }
})
</script>

<template>
  <div>
    <div class="text-center flex" >
      <div class="ml-3 mb-2 mt-2 flex items-center">
        <n-icon size="15">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
            <path d="M15 6l-1.41 1.41L17.17 11l-3.58 3.59L15 16l5-5l-5-5z" fill="currentColor"></path>
            <path
                d="M28 24H17v-4h6a2.003 2.003 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2H9a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h6v4H4a2 2 0 0 0-2 2v4h2v-4h11v4h2v-4h11v4h2v-4a2 2 0 0 0-2-2zM9 4h14l.002 14H9z"
                fill="currentColor"></path>
          </svg>
        </n-icon>
        <p class="ml-3 font-bold">分类</p>
      </div>
      <div class="absolute mt-2 mr-4 btn-box">
        <n-button quaternary secondary size="small">
          <template #icon>
            <n-icon>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                   y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M216.4,163.7c5.1,5,5.1,13.3,0.1,18.4L155.8,243h231.3c7.1,0,12.9,5.8,12.9,13s-5.8,13-12.9,13H155.8l60.8,60.9
	c5,5.1,4.9,13.3-0.1,18.4c-5.1,5-13.2,5-18.3-0.1l-82.4-83c0,0,0,0,0,0c-1.1-1.2-2-2.5-2.7-4.1c-0.7-1.6-1-3.3-1-5
	c0-3.4,1.3-6.6,3.7-9.1l82.4-83C203.1,158.8,211.3,158.7,216.4,163.7z"></path></svg>
            </n-icon>
          </template>
        </n-button>
        <n-button type="info" secondary size="small">
          <template #icon>
            <n-icon>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                   y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M295.6,163.7c-5.1,5-5.1,13.3-0.1,18.4l60.8,60.9H124.9c-7.1,0-12.9,5.8-12.9,13s5.8,13,12.9,13h231.3l-60.8,60.9
	c-5,5.1-4.9,13.3,0.1,18.4c5.1,5,13.2,5,18.3-0.1l82.4-83c0,0,0,0,0,0c1.1-1.2,2-2.5,2.7-4.1c0.7-1.6,1-3.3,1-5
	c0-3.4-1.3-6.6-3.7-9.1l-82.4-83C308.9,158.8,300.7,158.7,295.6,163.7z"></path></svg>
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
    <n-list hoverable clickable >
      <n-list-item v-for="i in 6">
        <template #default>
          <n-thing content-style="margin-top: 10px;">
            <template #description>
              <p>{{ cag[i] }}</p>
            </template>
          </n-thing>
        </template>

        <template #suffix>
          <div class="flex items-center">
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <g fill="none">
                  <path
                      d="M8.99 2.877a.75.75 0 0 0-1.48-.254l-.667 3.88l-3.093.001a.75.75 0 0 0 0 1.5l2.835-.001l-.688 3.996L2.75 12a.75.75 0 0 0 0 1.5L5.64 13.5l-.624 3.624a.75.75 0 1 0 1.478.254l.668-3.879l4.477-.002l-.625 3.627a.75.75 0 1 0 1.479.255l.668-3.883l3.094-.001a.75.75 0 0 0 0-1.5l-2.835.001L14.107 8l3.143-.001a.75.75 0 1 0 0-1.5l-2.885.001l.624-3.622a.75.75 0 0 0-1.478-.254L12.843 6.5l-4.478.002l.624-3.625zm-.883 5.125L12.585 8l-.689 3.996l-4.477.002l.688-3.996z"
                      fill="currentColor"></path>
                </g>
              </svg>
            </n-icon>
            <p class="ml-2">{{ i }}</p>
          </div>

        </template>
      </n-list-item>
    </n-list>
  </div>

</template>

<style scoped lang="less">
.btn-box {
  right: 20px;
  transform: translateY(-10%)
}
p {
  font-weight: bold;
  font-family: TiZhong, serif;
}
</style>