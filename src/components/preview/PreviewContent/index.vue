<template>
  <div class="content">
    <MdPreview
        :editorId="props.editorId"
        :theme=props.theme
        :modelValue="props.modelValue"
        :showCodeRowNumber="props.showCodeRowNumber"
        @onHtmlChanged="onHtmlChanged"
    >

    </MdPreview>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IzPreviewContent'
};
</script>

<script setup lang="ts">
import type {PropType} from 'vue';
import {ref} from 'vue';
import {InsertContentGenerator, MdPreview} from 'md-editor-v3';
import type {ExposeParam} from 'md-editor-v3';
import MarkExtension from "../../md/MarkExtension/index.vue";
import EmojiExtension from "../../md/EmojiExtension/index.vue";
import ReadExtension from "../../md/ReadExtension/index.vue";

const props = defineProps({
  editorId: {
    type: String as PropType<string>,
    default: ''
  },
  modelValue: {
    type: String as PropType<string>,
    default: ''
  },
  showCodeRowNumber: {
    type: Boolean as PropType<boolean>,
    default: true
  }, theme: {
    type: String as PropType<string>,
    default: 'dark'
  },
});


const onHtmlChanged = () => {
  const {hash} = location;

  if (/^#/.test(hash)) {
    const headingId = decodeURIComponent(hash.replace('#', ''));

    if (headingId) {
      const targetHeadDom = document.getElementById(headingId);

      if (targetHeadDom) {
        const scrollLength = (targetHeadDom as HTMLHeadElement).offsetTop + 414;

        window.scrollTo({
          top: scrollLength,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>
<style scoped>
.content {
  width: 90%;

}
</style>