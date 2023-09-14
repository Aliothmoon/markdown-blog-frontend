<script lang="ts">
import {defineComponent, ref} from 'vue'
import {MdPreview, MdCatalog} from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

import {NScrollbar, NSkeleton} from "naive-ui";
import HeadView from "@/components/MD/HeadView/index.vue";
import MCatalogArea from "@/components/MD/MCatalogArea/index.vue";


// @ts-ignore
import md from '@/assets/tool.md?raw'
import {useRoute} from "vue-router";

export default defineComponent({
  name: "MPreview",
  components: {
    NSkeleton,
    MCatalogArea, HeadView,
    NScrollbar, MdPreview,
    MdCatalog
  },
  props: {
    aid: String,
  },
  setup(props) {
    const id = props.aid;
    const text = ref(md);
    const scrollElement = document.documentElement;
    console.log(props.aid)
    const complete = () => {
      console.log('ok')
    }
    return {
      id, text,
      scrollElement, complete
    }
  },
  mounted() {
    document.documentElement.scrollTo(0, 0)
  }
})
</script>

<template>

  <div>
    <!--    <HeadView img="https://airing.ursb.me/image/WechatIMG79.jpeg"></HeadView>-->
    <HeadView img="https://www.loliapi.com/acg/"></HeadView>
    <div class="flex mt-10 ml-10">
      <MdPreview :editorId="id" :modelValue="text"
                 :code-theme="'github'"
                 class="preview-box"
                 :preview-theme="'cyanosis'"
                 :showCodeRowNumber="true"
                 @onHtmlChanged="complete"
      />
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