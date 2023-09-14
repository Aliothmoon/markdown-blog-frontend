<script lang="ts">
import {defineComponent} from 'vue'
import {MdCatalog} from "md-editor-v3";
import {NScrollbar} from "naive-ui";

export default defineComponent({
  name: "MCatalogArea",
  components: {NScrollbar, MdCatalog},
  props: {
    editorId: String,
    // scrollElement: [String, HTMLElement]
  },
  setup() {
    return {
      scrollElement: document.documentElement
    }
  }
})
</script>

<template>
  <div class="catalog-box mt-4">
    <p>目录</p>
    <n-scrollbar style="max-height: 45vh">
      <MdCatalog :editorId="editorId"
                 :scrollElement="scrollElement"
                 :scrollElementOffsetTop="70"
      />
    </n-scrollbar>
  </div>
</template>

<style scoped lang="less">
.catalog-box {
  //position: sticky;
  //top: 10px;
  width: 100%;
  padding: 10px;
  flex: 1;
  background-color: #fff;
}
</style>