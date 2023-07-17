<script lang="ts">
import {defineComponent, ref} from 'vue'
import ContentHeader from "@/components/InfoItemList/ContentHeader/index.vue";
import InfoItem from "@/components/InfoItemList/InfoItem/index.vue";
import {NPagination} from "naive-ui";
import Pagination from "@/components/InfoItemList/Pagination/index.vue";

export default defineComponent({
  name: "InfoItemList",
  components: {Pagination, InfoItem, ContentHeader},
  setup() {
    const text = '君不见黄河之水天上来，奔流到海不复回。\n' +
        '君不见高堂明镜悲白发，朝如青丝暮成雪。\n' +
        '人生得意须尽欢，莫使金樽空对月。\n' +
        '天生我材必有用，千金散尽还复来。\n';
    return {
      text,
    }
  }
})
</script>

<template>
  <div>
    <div class="mb-2">
      <ContentHeader></ContentHeader>
    </div>
    <div class="flex justify-center" v-for="i in 12" @click="$router.push('/a')">

      <InfoItem :introduction="text"
                :image="'http://localhost:5173/image'"
                cover-title="待到秋来九月八 我花开尽百花杀"
                :title="i+''"
                category="Lisp"
      >
      </InfoItem>
    </div>
    <Pagination></Pagination>
  </div>

</template>

<style scoped lang="less">

</style>