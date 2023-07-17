<template>
  <div>
    <div class="header">
      <HeadLine></HeadLine>
    </div>
    <div class="main">
      <div class="left">
        <LeftAside></LeftAside>
      </div>
      <div class="content">

        <!--      <component :is="components[current]"></component>-->
        <!--            <InfoItemList></InfoItemList>-->
<!--        <router-view></router-view>-->
        <router-view v-slot="{Component}">
          <transition enter-active-class='animated animate__fadeIn' leave-active-class='animated animate__fadeOut'>
            <component :is="Component"></component>
          </transition>
        </router-view>
        <!--                <MPreview></MPreview>-->
      </div>

      <div class="right flex justify-center">
        <RightAside></RightAside>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>

</template>


<script lang="ts">
import {defineComponent, ref} from "vue";
import LeftAside from "@/components/LeftAside/index.vue";
import InfoItem from "@/components/InfoItemList/InfoItem/index.vue";
import RAsideClock from "@/components/Clock/index.vue";
import RightAside from "@/components/RightAside/index.vue";
import ContentHeader from "@/components/InfoItemList/ContentHeader/index.vue";
import RTags from "@/components/RightAside/RTags/index.vue";
import HeadLine from "@/components/HeadLine/index.vue";
import MPreview from "@/components/MD/MPreview/index.vue";
import InfoItemList from "@/components/InfoItemList/index.vue";

export default defineComponent({
  components: {
    InfoItemList, MPreview, HeadLine,
    RTags, ContentHeader, RightAside,
    RAsideClock, InfoItem, LeftAside
  },
  name: "Main",
  setup() {

    const components = ref([MPreview, InfoItemList])
    const current = ref(1)

    return {
      components,
      current
    }
  }
})


</script>

<style scoped lang="less">


.footer {
  width: 100%;
  height: 50px;
  bottom: 50px;
  background-color: rgba(87, 198, 225, 0.4);
}

.header {
  width: 100%;
  //height: 50px;
  z-index: 1;
  top: 0;
  position: fixed;
  margin-bottom: 40px;
  background-color: rgba(147, 151, 156, 0.3);
}

.main {
  display: flex;
  margin-top: 60px;
  justify-content: center;
  width: 100vw;
  background-color: rgb(250, 247, 245);
  //background-image: url("public/imgs/star-wars.jpeg");
}

.content {
  background-color: #ffffff;
  width: 700px;
}

.left {
  //background-color: rgba(87, 198, 225, 0.4);
  position: sticky;
  top: 80px;
  width: 200px;
  height: 400px;
}

.right {
  //background-color: rgba(87, 198, 225, 0.4);
  position: relative;
  top: 40px;
  margin-bottom: 50px;
  width: 320px;
  //height: 1000px;
}

</style>