<template>
  <div style="display: flex;justify-content: center;  height: 100%;">
    <div class="edit-container">
      <div id="vditor"></div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css';

const toolbars = ["emoji", "headings", "bold", "italic", "strike", "|", "line", "quote",
  "list", "ordered-list", "check", "outdent", "indent", "code", "inline-code", "insert-after",
  "insert-before", "undo", "redo", "upload", "link", "table", "edit-mode", "both", "preview",
  "outline", "code-theme", "content-theme", "export", "br"];
const vditor = ref<Vditor | null>(null);

onMounted(() => {
  console.log('mounting vditor')
  vditor.value = new Vditor('vditor', {
    preview: {
      hljs: {
        lineNumber: true
      },
      theme: {
        current: "ant-design"
      }
    },
    outline: {
      position: "right",
      enable: false
    },
    toolbar: toolbars,
    after: () => {
      vditor.value.setValue('');
    }
  });
});
</script>

<style scoped>
.vditor-content {
  background-color: #980e0e;
}

.edit-container {
  /*background-color: rgba(255, 255, 255, 0.3);*/
  /*background: transparent;*/
  display: flex;
  justify-content: center;
}

.vditor {

}

#vditor {
  height: 80vh !important;
  width: 80vw !important;
}
</style>