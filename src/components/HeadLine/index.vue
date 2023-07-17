<script lang="ts">
import {defineComponent, ref} from 'vue'
import HButton from "@/components/Button/HButton/index.vue";
import LButton from "@/components/Button/LButton/index.vue";
import CButton from "@/components/Button/CButton/index.vue";
import SButton from "@/components/Button/SButton/index.vue";
import HSignal from "@/components/HeadLine/HeadSignature/index.vue";
import {NCard, NModal} from "naive-ui";
import SearchModal from "@/components/SearchModal/index.vue";

export default defineComponent({
  name: "HeadLine",
  components: {
    SearchModal,
    NCard,
    NModal,
    SButton,
    HSignal,
    CButton,
    LButton,
    HButton
  },

  setup() {
    const showModal = ref(false);
    return {
      showModal
    }
  }

})
</script>

<template>
  <!--关于 时间线 扩展 搜索 标签 分类  -->
  <div class="flex items-center justify-center line-box">
    <div class="absolute left-11">
      <HSignal text="Aliothmoon"></HSignal>
    </div>
    <CButton class="mr-7" text="关于"></CButton>
    <HButton text="标签"></HButton>
    <LButton class="mr-4" text="时间线"></LButton>
    <HButton class="mr-6" text="分类"></HButton>
    <CButton class="mr-4" text="扩展"></CButton>
    <div class="absolute right-14">
      <SButton @click="showModal=!showModal"></SButton>
    </div>
  </div>

  <SearchModal v-model:show="showModal" ></SearchModal>

</template>

<style scoped lang="less">
.line-box {
  height: 50px;
  width: 100vw;
  background-color: rgb(38, 37, 37);
}

</style>