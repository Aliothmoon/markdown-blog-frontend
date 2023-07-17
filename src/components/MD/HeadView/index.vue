<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeadView",
  props: {
    img: String
  }
})
</script>

<template>
  <div class="w-100  flex justify-center items-center mt-1">
    <div class="img-box p-1">
      <img :src="img" alt="">
    </div>
    <div class="introduce-box absolute ">
      <p class="">风雨不动安如山</p>
    </div>
  </div>
</template>

<style scoped lang="less">
.introduce-box {
  color: white;
  font-family: 喜鹊聚珍体;
  font-size: 20px;
  //transform: translateX(-50%) translateY(-50%);
  //background-color: #fffdfd;
}

.img-box {
  width: 80vw;
  height: 20vh;
  overflow:hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>