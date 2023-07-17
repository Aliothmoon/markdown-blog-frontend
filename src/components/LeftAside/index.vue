<script lang="ts">

import LeftAsideItem from "@/components/LeftAside/LeftAsideItem/index.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {LeftAsideItem},
  name: "LeftAside",
  setup: () => {
    return {}
  }
})

</script>

<template>
  <LeftAsideItem>
    <template #default>
      <div class="flex items-center justify-center off-box">
        <div class="mr-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-bookmarks"
               viewBox="0 0 16 16">
            <path
                d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"/>
            <path
                d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"/>
          </svg>
        </div>
        <div class="">
          <p>养心斋</p>
        </div>
      </div>
    </template>
  </LeftAsideItem>
  <LeftAsideItem>
    <template #default>
      <div class="flex items-center justify-center off-box">
        <div class="mr-4  ">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-calendar2-day"
               viewBox="0 0 16 16">
            <path
                d="M4.684 12.523v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V8.418h-.672v4.105z"/>
            <path
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
          </svg>
        </div>
        <div class="">
          <p>浮尘台</p>
        </div>
      </div>
    </template>
  </LeftAsideItem>
  <LeftAsideItem>
    <template #default>
      <div class="flex items-center justify-center off-box">
        <div class="mr-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-github"
               viewBox="0 0 16 16">
            <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </div>
        <div class="">
          <p>听雨轩</p>
        </div>
      </div>
    </template>

  </LeftAsideItem>
  <LeftAsideItem>
    <template #default>
      <div class="flex items-center justify-center off-box">
        <div class="mr-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-cloud-haze2"
               viewBox="0 0 16 16">
            <path
                d="M8.5 3a4.002 4.002 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 12H4.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 3zM0 7.5A.5.5 0 0 1 .5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
        <div>
          <p>云梦苑</p>
        </div>
      </div>
    </template>
  </LeftAsideItem>
</template>

<style scoped lang="less">
p {
  font-size: 17px;

  font-family: 喜鹊聚珍体, serif;
  //font-family: HarmonyOS_Sans_Medium, serif;
}

.off-box {
  top: 50%;
  transform: translateY(50%);
}
</style>