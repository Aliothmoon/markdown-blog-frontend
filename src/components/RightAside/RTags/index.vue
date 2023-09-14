<script lang="ts">
import {defineComponent} from 'vue'
import RTag from "@/components/RightAside/RTag/index.vue";
import {NButton, NIcon} from "naive-ui";

export default defineComponent({
  name: "RTags",
  components: {NIcon, NButton, RTag},
  data: () => ({
    contents: []
  }),
  setup() {

  },
  mounted() {
    let pris = []
    for (let i = 0; i < 10; i++) {
      pris.push(fetch('https://api.xygeng.cn/one').then(r => r.json()).then((r) => {
        return r.data.tag;
      }))
    }
    Promise.all(pris).then((r) => {
      r.sort((a: string, b: string) => {
        return a.length > b.length ? 1 : -1
      }).forEach((e) => {
        this.contents.push(e)
      })

    })
  }
})
</script>


<template>
  <div class="bg-white">
    <div class="text-center flex ">
      <div class="flex ml-3 mb-2 mt-2 mr-3 items-center">
        <n-icon size="15">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <g fill="none">
              <path
                  d="M15 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0zM9.704 2.584A2 2 0 0 1 11.129 2l4.89.032a2 2 0 0 1 1.988 1.997l.007 4.95a2 2 0 0 1-.586 1.417l-.36.36a4.526 4.526 0 0 0-.695-.72l.348-.347a1 1 0 0 0 .293-.708l-.008-4.95a1 1 0 0 0-.993-.999L11.123 3a1 1 0 0 0-.713.292L3.728 9.957a1 1 0 0 0 0 1.415l4.948 4.948a1 1 0 0 0 1.359.051c.214.258.456.492.721.696a2 2 0 0 1-2.787-.04L3.02 12.08a2 2 0 0 1 .002-2.83l6.682-6.665zm6.6 13.012a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 1 0 .707-.707l-2.55-2.55zM16 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z"
                  fill="currentColor"></path>
            </g>
          </svg>
        </n-icon>
        <p class="ml-3">标签</p>
      </div>
      <div style="right: 20px;" class="absolute mt-2">
        <n-button quaternary secondary size="small">
          <template #icon>
            <n-icon>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                   y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M216.4,163.7c5.1,5,5.1,13.3,0.1,18.4L155.8,243h231.3c7.1,0,12.9,5.8,12.9,13s-5.8,13-12.9,13H155.8l60.8,60.9
	c5,5.1,4.9,13.3-0.1,18.4c-5.1,5-13.2,5-18.3-0.1l-82.4-83c0,0,0,0,0,0c-1.1-1.2-2-2.5-2.7-4.1c-0.7-1.6-1-3.3-1-5
	c0-3.4,1.3-6.6,3.7-9.1l82.4-83C203.1,158.8,211.3,158.7,216.4,163.7z"></path></svg>
            </n-icon>
          </template>
        </n-button>
        <n-button type="info" secondary size="small">
          <template #icon>
            <n-icon>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                   y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M295.6,163.7c-5.1,5-5.1,13.3-0.1,18.4l60.8,60.9H124.9c-7.1,0-12.9,5.8-12.9,13s5.8,13,12.9,13h231.3l-60.8,60.9
	c-5,5.1-4.9,13.3,0.1,18.4c5.1,5,13.2,5,18.3-0.1l82.4-83c0,0,0,0,0,0c1.1-1.2,2-2.5,2.7-4.1c0.7-1.6,1-3.3,1-5
	c0-3.4-1.3-6.6-3.7-9.1l-82.4-83C308.9,158.8,300.7,158.7,295.6,163.7z"></path></svg>
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>
    <div class="warp">
      <div v-for="i in contents">
        <RTag :text="`${i.substring(0,14)}`" class="m-1"></RTag>
      </div>
    </div>
  </div>

</template>

<style scoped lang="less">
.warp {
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
}

p {
  font-weight: bold;
  font-family: TiZhong, serif;
}
</style>
