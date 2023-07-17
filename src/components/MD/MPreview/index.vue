<script lang="ts">
import {defineComponent, ref} from 'vue'
import {MdPreview, MdCatalog} from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

import {NScrollbar} from "naive-ui";
import HeadView from "@/components/MD/HeadView/index.vue";
import MCatalogArea from "@/components/MD/MCatalogArea/index.vue";


// @ts-ignore
import md from '@/assets/tool.md?raw'

export default defineComponent({
  name: "MPreview",
  components: {
    MCatalogArea, HeadView,
    NScrollbar, MdPreview,
    MdCatalog
  },
  setup() {
    const id = 'preview-only';
    const text = ref(md);
    const scrollElement = document.documentElement;

    return {
      id, text, scrollElement
    }
  },
  mounted() {
    document.documentElement.scrollTop = 0
  }
})
</script>

<template>
  <div>
    <!--    <HeadView img="https://airing.ursb.me/image/WechatIMG79.jpeg"></HeadView>-->
    <HeadView img="https://www.loliapi.com/acg/"></HeadView>
    <div class="flex mt-10 ml-10">
      <MdPreview :editorId="id" :modelValue="text" class="preview-box"/>
      <!--      <MCatalogArea :editorId="id" :scroll-element="scrollElement"></MCatalogArea>-->
    </div>
  </div>

</template>

<style scoped lang="less">
.preview-box {
  flex: 6;
  width: 40px;
  padding: 0 10px 0 0;
}


</style>