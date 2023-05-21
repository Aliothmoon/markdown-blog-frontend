<template>
  <div style="display: flex;justify-content:center;">
    <div class="c-parent text-body2" style="justify-content: center">
      <div ref='idtor' class="content"></div>
    </div>
  </div>

</template>

<script setup>
import {onMounted, ref, defineProps, reactive} from "vue";
import 'vditor/dist/index.css';
import Vditor from "vditor";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "../pinia/index.js";

// Api
import {getArticle} from '../api/article/index'

// Cache
import cache from '../utils/cache'

// Style
const scrollerStyle = ref({
  opacity: 0.2,
  width: '4px'

});

const idtor = ref();
const store = useStore();
const router = useRouter()
const content = ref('');


async function preview(text) {
  await Vditor.preview(idtor.value, text, {
    mode: "dark",
    hljs: {
      style: "ant-design",
      lineNumber: true
    },
    markdown: {
      autoSpace: true,
      paragraphBeginningSpace: true
    },
    transform(html) {
      // console.log(html.replace(/<[^>]+>/g, ''));
      return html.replace('<table>', "<table style='border: none'>");
    },
    theme: {
      current: "ant-design"
    }
  });
}


onMounted(function () {
  console.log('load content')
  console.log(store.articleId)
  if (store.articleId === '') {
    router.back()
  } else {
    let id = store.articleId;
    if (cache.local.get(id) == null) {
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
  z-index:110;
  font-family: 'JetBrains Mono SemiBold', system-ui;
  font-size: 115%
}

@font-face {
  font-family: 'JetBrains Mono SemiBold';
  src: url("../../public/ttf/JetBrainsMono-SemiBold.ttf");
}
</style>