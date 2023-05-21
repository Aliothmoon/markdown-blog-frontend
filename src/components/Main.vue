<template>
  <div class="parent">
    <el-container style=""
                  class="container">
      <el-drawer
          v-model="drawer"
          direction='ltr'
          size="20%"
          :show-close=false
          :with-header=false
          style="--el-dialog-padding-primary:0;height: 100%"
      >
        <q-scroll-area style="height: 100%" :bar-style=scrollerStyle :thumb-style="scrollerStyle">
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" style="padding: 0;" height="250px">
            <div style="
            display: flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100%;
            background-color: transparent;
          ">
              <el-icon size="40">
                <MoonNight/>
              </el-icon>
            </div>
            <div class="absolute-bottom text-subtitle1 text-center">
              Aliothmoon
            </div>
          </q-img>
          <el-collapse :accordion=true style="margin: 20px">
            <el-collapse-item title="Consistency" name="1" v-if="editable">
              <div>
                <q-btn flat class="fit" color="purple" @click="router.push({name:'editor'});drawer = false">
                  <span>Edit</span>
                </q-btn>
              </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="2">
              <div>
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;
              </div>
              <div>
                Visual feedback: reflect current state by updating or rearranging
                elements of the page.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3" v-if="!editable">

              <n-space vertical style="margin-bottom: 20px">
                <n-input type="text" autosize placeholder="None" v-model:value=psw style="height:100%;width: 100%"/>
              </n-space>
              <div>
                <q-btn flat class="fit" color="purple" @click="Identification">
                  <span>Submit</span>
                </q-btn>
              </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
              <div>
                Decision making: giving advices about operations is acceptable, but do
                not make decisions for the users;
              </div>
              <div>
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
              </div>
            </el-collapse-item>
          </el-collapse>
        </q-scroll-area>
      </el-drawer>


      <!--      -->
      <el-container class="main-content" :style="{
          filter: searchDialog || drawer?'blur(3px)':'none',
        }">
        <el-header style="
          background-color: #212121;
          display: flex;
          align-items: center;
          justify-content: space-between">

          <el-button size="default"
                     style="margin-left: -20px;background-color: transparent ;border: none"
                     @click="drawer=!drawer"
          >
            <el-icon :size="25" color="#626aef">
              <Operation/>
            </el-icon>
          </el-button>
          <el-button style="background-color: transparent ;border: none;margin-right: 80vw"
                     @click="backLastPage">
            <el-icon color="#efbe2a" :size="25">
              <ArrowLeftBold/>
            </el-icon>
          </el-button>
          <el-button
              style="background-color: transparent;border: none;padding: 0;margin-right: 2%;"
              @click="openSearchBar"
          >
            <el-icon :size="25" color="#e23c32">
              <Search/>
            </el-icon>
          </el-button>
        </el-header>

        <el-main style="padding: 15px 20px 10px">
          <q-scroll-area style="height: 100%;"
                         ref=contentScroller
                         :visible=false
                         :bar-style=scrollerStyle
                         :thumb-style=scrollerStyle
          >
            <transition enter-active-class='animated animate__fadeIn' leave-active-class='animated animate__fadeOut'>
              <router-view></router-view>
            </transition>

            <el-footer height="60px" hidden style="background-color:rgba(29, 38, 49,0.5);margin: 0 10px 0 ">
              <div style="height: 100%;display: flex;text-align: center;justify-content: center;align-items: center;">
                <span>Footer</span>
              </div>
            </el-footer>
          </q-scroll-area>

        </el-main>
      </el-container>
    </el-container>

    <q-dialog v-model="searchDialog" full-height>
      <div style="padding: 0;width:75%;">
        <q-card style=" background-color: rgb(250, 250, 250,0.7); margin-top: 5em">
          <q-card-section style="padding: 5px 12px;">
            <q-toolbar style="padding: 0">
              <q-input
                  color='green-4'
                  placeholder="你好，世界"
                  class="fit pl-input"
                  flat round
                  style="border: 0;font-size: 20px;padding: 0"
                  :loading=searchLoading
                  v-model="searchContent"
              >
                <template #append v-if="!searchLoading">
                  <q-btn flat round @click=searchNow>
                    <el-icon class="fit" :size="30">
                      <Search/>
                    </el-icon>
                  </q-btn>
                </template>
              </q-input>
            </q-toolbar>
            <q-menu fit style="background-color: rgb(250, 250, 250,0.7);"
                    :offset=[0,12] max-height="40rem"
                    v-model="showResults"
                    :no-focus=true
                    transition-show="jump-down"
                    transition-hide="jump-up"
            >
              <q-scroll-area :style="{
                height: associativeWords.length< 7 ? `${associativeWords.length*3 }rem`:'20rem',
              }"
                             :visible=true
                             :bar-style=scrollerStyle
                             :thumb-style=scrollerStyle

              >
                <q-item clickable v-for="i in associativeWords">
                  <q-item-section @click="previewMd(i.id)">
                    {{ i.title + " " + i.introduction.slice(0, 20) }}
                  </q-item-section>
                </q-item>
                <q-separator/>
              </q-scroll-area>
            </q-menu>
          </q-card-section>


        </q-card>
      </div>

    </q-dialog>
  </div>
</template>

<script setup>
import 'animate.css';
import {debounce} from 'lodash'
import {onMounted, reactive, ref, watch} from "vue";
import {ArrowLeftBold, MoonNight, Operation, Search} from "@element-plus/icons-vue";
import {useStore} from '../pinia/index'
import {useRouter} from "vue-router";


import {getSearchResult} from '../api/article/index'
import {QScrollArea} from "quasar";
import {NInput, NSpace} from "naive-ui";
import LocalStorage from '../utils/cache'
import {Auth, GetAuth} from '../api/article/auth'


const drawer = ref(false);
const scrollerStyle = reactive({
  opacity: 0.2,
  width: '4px'

});
const searchDialog = ref(false);
const searchLoading = ref(false);

watch(searchDialog, (t) => {
  !t && (searchLoading.value = false) || (searchContent.value = '')
})

const store = useStore()
const router = useRouter()

const editable = ref(false);
const psw = ref('')
const Identification = () => {
  GetAuth(psw.value).then(r => {
    console.log(r.data)
    if (r.data.data) {
      LocalStorage.local.set("ATTACK", r.data.data);
      editable.value = true
    }
  }).finally(() => {
    psw.value = '';
  })
  console.log(psw.value)

}
onMounted(() => {
  let certificate = LocalStorage.local.get("ATTACK")
  if (certificate) {
    Auth(certificate).then(r => {
      if (r.data.data) {
        editable.value = true;
      }
    })
  }
})

const previewMd = function (id) {
  store.articleId = id
  router.push({name: 'pre'})
}

const backLastPage = () => {
  router.back()
}


const searchContent = ref('');
const showResults = ref(false);
const associativeWords = ref([])
const toSearch = (keyword) => {
  getSearchResult(keyword, 7).then(r => {
    console.log('Searching ...');
    associativeWords.value = r.data.data.articles
  })
}
const relieveSearch = debounce(toSearch, 400);
watch(searchContent, (keyword) => {
  if (keyword === "") {
    showResults.value = false
    associativeWords.value = []
  } else {
    showResults.value = true;
    relieveSearch(keyword)
  }
})
const openSearchBar = function () {
  searchDialog.value = true
}
const searchNow = function () {
  searchLoading.value = true
}

</script>

<style scoped>

/*.items {*/
/*  display: flex;*/
/*  justify-content: center;*/

/*}*/

/*.item-card {*/
/*  margin-bottom: 30px;*/
/*}*/

.parent {
  height: 100vh;
  /*background-color: #303030;*/
  background: url('../../public/imgs/b2.jpg') no-repeat center center fixed;
  background-size: 100% 100%;
  background-attachment: fixed;
  /*filter: blur(5px);*/
  /*z-index: 1;*/

}

.parent::after {
  /*background: inherit;*/
  /*filter: blur(5px);*/
  /*z-index: 2;*/
}

.container {
  height: 100%;
  margin: 0px;
  /*z-index: 11;*/
  backdrop-filter: blur(5px);
}


.slider {
  height: 100%;
  /*width: 0; !* 0 宽度 - 使用 JavaScript 更改 *!*/
  position: fixed; /* 原地不动 */
  z-index: 1; /* 保持在顶部 */
  /*top: 0;*/
  /*background-color: #111; !* 黑色*!*/
  /*overflow-x: hidden; !* 禁用水平滚动 *!*/
  /*padding-top: 60px; !* 将内容从顶部放置 60px *!*/
  transition: 0.3s; /* 0.5 秒过渡效果在侧边栏中滑动 */

}

#pl-input::-webkit-input-placeholder {
  color: blue;
}


@font-face {
  font-family: 'JetBrains Mono SemiBold';
  src: url("../../public/ttf/JetBrainsMono-SemiBold.ttf");
}

</style>