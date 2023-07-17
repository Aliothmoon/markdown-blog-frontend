<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ItemImage",
  props: {
    title: String,
    image: String,
  }
})
</script>

<template>
  <div class="img-container">
    <div style="position: absolute;">
      <img :src="image" alt="">
    </div>
    <div class="shadow-container"/>
    <div class="text-box">
      <div>
        <p>{{ title }}</p>
        <!--        <p>待到秋来九月八 我花开尽百花杀</p>-->
        <!--        <p>冲天香阵透长安，满城尽带黄金甲</p>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

}

.shadow-container {
  background-image: linear-gradient(to right, rgba(134, 143, 150, 0.3) 0%, rgba(89, 97, 100, 0.8) 100%);
  position: absolute;
  height: 100%;
  width: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.text-box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;

}

p {
  font-family: 喜鹊聚珍体, serif;
  font-size: 1.1rem;
  color: rgb(255, 255, 255);
}
</style>