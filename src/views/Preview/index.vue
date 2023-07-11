<template>
  <div :class="!night?'dark-mode':'light-mode'" class="b-content">
    <n-page-header subtitle="返回" @back="$router.back()" style="height: 60px;padding: 10px">
      <template #extra>
        <n-space style="margin-right: 20rem;margin-top:20px">
          <n-switch :on-update-value="nightMode"/>
        </n-space>
      </template>
    </n-page-header>
    <div style="" class="pct d-content">
      <div class="c-content">
        <IzPreviewContent editorId="editorId" :modelValue="text" :theme="night?'light':'dark'"/>
        <IzCatalog editorId="editorId" :theme="night?'light':'dark'"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'md-editor-v3/lib/preview.css';
import {onMounted, ref} from "vue";
import IzCatalog from "@/components/Catalog/index.vue";
import {NPageHeader} from "naive-ui";
import {NSpace, NSwitch} from "naive-ui";
import {useStore} from "@/pinia/index.ts";
import cache from "@/utils/cache.ts";
import {getArticle} from "@/api/article/index.ts";
import {useRouter} from "vue-router";

const id = 'preview-only';
const text = ref('');
const night = ref(false);
const nightMode = (value) => {
  night.value = !night.value;
}
const router = useRouter();
const store = useStore();
onMounted(function () {
  if (store.articleId === '') {
    router.back()
  } else {
    let id = store.articleId;
    let reserve = cache.local.get(id)
    if (reserve == null) {
      getArticle(id)
          .then(r => {
            text.value = r.data.data.content;
            cache.local.set(id, text.value);
          })
    } else {
      text.value = cache.local.get(id);
    }
  }
})

</script>


<style scoped lang="less">


.dark-mode {
  background-color: #161618;
}

.light-mode {
  background-color: #fffdfd;
}

.b-content {
  min-height: 100vh;

}

.c-content {
  display: flex;
  width: 75vw;
  margin: auto;
  //background-color: rgba(0, 0, 0, 0.95);
}

.d-content {
  min-height: 100vh;
  //background-color: rgba(0, 0, 0, 0.95);
}

.pct {
  //font-size: 16px;
  font-family: 'HarmonyOS_Sans_Medium', monospace
}

</style>
