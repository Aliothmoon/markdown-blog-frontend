<script lang="ts">
import {defineComponent} from "vue";
import ItemImage from "@/components/InfoItemList/ItemImage/index.vue";
import styles from "@/components/InfoItemList/ItemImage/styles.ts";
import {NIcon} from "naive-ui";

export default defineComponent({
  name: "InfoItem",
  components: {
    NIcon,
    ItemImage
  },
  props: {
    coverTitle: String,
    title: String,
    introduction: String,
    image: String,
    category: String,
  },
  setup() {
    const bgc = styles[Math.floor(Math.random() * styles.length)]
    return {
      bgc
    }
  }
})


</script>

<template>
  <div>
    <div class="card">
      <ItemImage :image="image" :title="coverTitle"></ItemImage>
      <div class="card__content" :style="bgc">
        <p class="card__title ">{{ title }}</p>
        <div class="card__description ">
          <div class="flex  items-center">
            <n-icon size="16" class="cr-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
                <g fill="none">
                  <path
                      d="M14.499 3a2.5 2.5 0 0 1 2.5 2.5v3.502a2.87 2.87 0 0 0-1 .229V7h-12v7.499a1.5 1.5 0 0 0 1.5 1.5h3.975c-.016.05-.03.103-.043.155l-.211.845H5.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 5.5 3h8.999zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5a1.5 1.5 0 0 0-1.5-1.5zm-3.52 11.376l4.829-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.829 4.828a2.197 2.197 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.498c.097-.386.296-.739.578-1.02z"
                      fill="currentColor"></path>
                </g>
              </svg>
            </n-icon>
            <div class="ttx-font  ml-2 cr-font">2022-6-10</div>
            <div class="mx-2 ttx-font cr-font">|</div>
            <n-icon size="13" class="cr-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
                <path
                    d="M11.17 6l3.42 3.41l.58.59H28v16H4V6h7.17m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4z"
                    fill="currentColor"></path>
              </svg>
            </n-icon>
            <div class="ttx-font  ml-2 cr-font"> Archived By {{ category }}</div>
          </div>
          <p class="ml-2 cr-font global-font-set">
            {{ introduction.slice(0, 55) + ' ...' }}
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="less">
@import "@/font/font";

.ttx-font {
  font-size: 2px !important;
  line-height: 2;
  font-weight: 50;
  font-family: 喜鹊聚珍体, serif;

}

.cr-icon {
  mix-blend-mode: difference;
  filter: invert(30%)
}

.cr-font {
  //mix-blend-mode: difference;
  color: black;
  //filter: invert(10%)
}


.card {
  margin: 10px;
  position: relative;
  width: 570px;
  height: 120px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

//.card svg {
//  width: 48px;
//  fill: #333;
//  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px 10px 0 15px;
  box-sizing: border-box;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

}

.card:hover .card__content {
  transform: rotateX(0deg);
}

//.card .card__content {
//  transform: rotateX(0deg);
//}

.card__title {
  margin: 0;
  font-size: 15px;
  color: rgb(255, 255, 255);
  font-weight: 700;
}

//.card:hover svg {
//  scale: 0;
//}

.card__description {
  margin: 10px 0 0;
  font-size: 10px;
  //font-weight: bold;
  color: rgb(255, 255, 255);
  //line-height: 1.4;
}

p {
  font-family: HarmonyOS_Sans_Medium, serif;
}
</style>
