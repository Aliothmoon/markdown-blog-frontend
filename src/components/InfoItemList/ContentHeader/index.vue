<script lang="ts">
import {defineComponent, ref} from 'vue'
import {NCarousel, NIcon} from "naive-ui";
import {ArrowBack, ArrowForward} from '@vicons/ionicons5'

export default defineComponent({
  name: "ContentHeader",
  components: {
    NIcon,
    NCarousel, ArrowBack,
    ArrowForward
  },
  props: {
    text: String,
  }
})
</script>
<script setup lang="ts">
const f = (i) => {
  return `https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel${i}.jpeg`
}
const carousel = ref()
const actives = ref();
const over = () => {
  actives.value = carousel.value?.getCurrentIndex() + 1;
}
const leave = () => {
  actives.value = Math.PI;
}
</script>

<template>
  <div class="">
    <n-carousel
        ref="carousel"
        effect="custom"
        :transition-props="{ name: 'creative' }"
        :show-arrow="false"
        draggable
        autoplay
        mousewheel
        dot-type="line"
        trigger="hover"

        direction="vertical"
        class="sized-box"
        @mouseenter="over"
        @mouseleave="leave"
    >
      <!--       :dot-placement="'right'"   -->
      <template #default>
        <div v-for="i in 6" class="carousel-img flex justify-center" :class="{'hover-div':actives==i }">
          <div class="py-1">
            <img :src=f(i%5) alt="" @error.once="e=>{ e.target['src']='http://localhost:5173/image'}">
            <div class="absolute top-1/2 left-1/2 text-box">
              <p>Hello, World! </p>
              <!--            <p>{{text}} </p>-->
            </div>
          </div>
        </div>
      </template>

    </n-carousel>
  </div>
</template>

<style scoped lang="less">
@image-width: 550px;
@image-height: 220px;

.sized-box {
  width: 100%;
  height: @image-height+10px
}

.text-box {
  transform: translateX(-50%) translateY(-50%);
}

p {
  font-family: 喜鹊聚珍体, serif;
  //font-family: HarmonyOS_Sans_Medium, serif;
  font-size: 1.3rem;
  font-weight: bolder;
  color: rgb(189, 6, 6);
    mix-blend-mode: difference;
}

img {
  width: @image-width;
  height: @image-height;
  object-fit: cover;
  filter: blur(0.5px);

}

.carousel-img {
  transition: all .9s;
}

.hover-div {
  transform: scale(1.05);
}


:deep(.creative-enter-from),
:deep(.creative-leave-to) {
  opacity: 0;
  transform: scale(0.8);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
  transition: all 0.3s ease;
}
</style>