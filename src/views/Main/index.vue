<template>

  <div class="header">
  </div>
  <div class="main">
    <div class="left">
      <LeftAside></LeftAside>
    </div>
    <div class="content">
      <div class="mb-2">
        <CHeader></CHeader>
      </div>
      <div class="flex justify-center" v-for="i in 12">
        <InfoItem :introduction="text"
                  :image="f(i+'')"
                  cover-title="待到秋来九月八 我花开尽百花杀"
                  :title="i+''"
        >
        </InfoItem>
      </div>

    </div>
    <div class="right flex justify-center">
      <RightAside></RightAside>
    </div>
  </div>
  <div class="footer">
  </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import LeftAside from "@/components/LeftAside/index.vue";
import InfoItem from "@/components/InfoItem/index.vue";
import RAsideClock from "@/components/Clock/index.vue";
import RightAside from "@/components/RightAside/index.vue";
import CHeader from "@/components/ContentHeader/index.vue";
import RTags from "@/components/RTags/index.vue";

export default defineComponent({
  components: {RTags, CHeader, RightAside, RAsideClock, InfoItem, LeftAside},
  name: "Main",
  setup() {
    const text = '君不见黄河之水天上来，奔流到海不复回。\n' +
        '君不见高堂明镜悲白发，朝如青丝暮成雪。\n' +
        '人生得意须尽欢，莫使金樽空对月。\n' +
        '天生我材必有用，千金散尽还复来。\n';

    function f(i) {
      return `http://localhost:5173/image?${new Date().valueOf()}`;
    }

    return {
      text,
      f
    }
  }
})


</script>

<style scoped lang="less">
* {
  --distance: 10vw;
  --distance-main: 12vw;
}


.footer {
  width: 100%;
  height: 50px;
  bottom: 50px;
  //background-color: rgba(87, 198, 225, 0.4);
}

.header {
  width: 100%;
  height: 50px;
  z-index: 1;
  top: 0;
  position: fixed;
  margin-bottom: 40px;
  background-color: rgba(147, 151, 156, 0.3);
}

.main {
  display: flex;
  margin-top: 50px;
  justify-content: center;
  width: 100vw;
  background-color: #fff;
  //background-image: url("public/imgs/star-wars.jpeg");
}

.content {
  background-color: #ffffff;
  width: 570px;
}

.left {
  background-color: rgba(87, 198, 225, 0.4);
  position: sticky;
  top: 50px;
  width: 160px;
  height: 400px;
}

.right {
  background-color: rgba(87, 198, 225, 0.4);
  position: sticky;
  top: 50px;
  right: 0;
  margin-bottom: 50px;
  width: 280px;
  height: 1200px;
}

</style>