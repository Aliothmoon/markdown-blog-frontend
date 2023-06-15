<template>
  <div style="display: flex;justify-content:center;">
    <MdPreview :editorId="id" :modelValue="text"/>
    <MdCatalog :editorId="id" :scrollElement="scrollElement"/>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "@/pinia/index.js";

// Api
import {getArticle} from '@/api/article/index.js'

// Cache
import cache from '../../../utils/cache.js'

// Style
import {MdCatalog, MdPreview} from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';


const store = useStore();
const router = useRouter()
const content = ref('');
const id = 'preview-only';
const text = ref('');
const scrollElement = document.documentElement;

async function preview(text) {

}


onMounted(function () {
  console.log('load content')
  console.log(store.articleId)
  if (store.articleId === '') {
    router.back()
  } else {
    let id = store.articleId;
    let reserve = cache.local.get(id)
    if (reserve == null) {
      getArticle(id)
          .then(r => {
            content.value = r.data.data.content;
            cache.local.set(id, content.value)
            preview(content.value)
          })
    } else {
      preview(cache.local.get(id))
    }
  }


})

</script>

<style scoped>

.content-outline {
  position: absolute;
  /*bottom: 100px;*/
  right: 17rem;
  margin-left: 1%;
  width: 2vh;
  height: 100vh;
}

.c-parent {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(207, 211, 220, 0.55);
  /*backdrop-filter: blur(5px);*/
  width: 55%;
}

.content {
  width: 70%;
  margin: auto;
  z-index: 110;
  font-family: 'JetBrains Mono SemiBold', system-ui;
  font-size: 115%
}

@font-face {
  font-family: 'JetBrains Mono SemiBold';
  src: url("public/ttf/JetBrainsMono-SemiBold.ttf");
}
</style>