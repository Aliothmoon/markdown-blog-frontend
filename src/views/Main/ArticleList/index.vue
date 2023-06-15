<template>
    <div class="list-one">
        <div v-for="i in articles" class="items text-white">
            <!--                style="height: 300px;width: 55%"-->
            <q-card class="item-card"
                    :style="{
                        height: i.img?'300px':'150px',
                        width:'55%',
                        boxShadow:'var(--el-box-shadow)',
                      }"
                    @click="click(i.id)"
            >
                <q-parallax
                        :src=i.img
                        style="height: 60%;margin:auto;"
                        v-if="i.img"
                >
                    <div class="text-h4 text-white text-center">{{ i.title }}</div>
                </q-parallax>

                <q-card-section v-if="!i.img">
                    <div class="text-h4 card-title ">{{ i.title }}</div>
                </q-card-section>
                <q-card-section>
                    <div class=" card-main-content text-body1 text-subtitle1">{{
                        i.introduction.slice(0, 70) + "…………"
                        }}
                    </div>
                </q-card-section>
            </q-card>
        </div>
        <el-footer height="40px" hidden>
            <div style="height: 100%;display: flex;text-align: center;justify-content: center;align-items: center;">
                <q-pagination
                        v-model="currentPage"
                        color="purple"
                        :max=maxPage
                        :max-pages="5"
                        :ellipses="false"
                        :boundary-numbers="false"
                        @update:model-value="updateBriefList"
                />
            </div>
        </el-footer>
    </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
// Store
import {useStore} from '@/pinia/index.js'

// Api
import {getArticleBriefList, getPageCount} from '@/api/article/index.js'

const store = useStore()


const router = useRouter();

const click = function (id) {
    store.articleId = id
    router.push({name: 'preview'})
}
const articles = ref([])


const maxPage = ref(1);
const currentPage = ref(1);
const pageSize = 5;


function updateBriefList() {
    getArticleBriefList(currentPage.value, pageSize).then(r => {
        articles.value = r.data.data;
    })
}

function searchResults() {

}

onMounted(function () {
    if (!store.isSearch) {
        getPageCount(pageSize).then(r => {
            maxPage.value = r.data.data;
        })
        updateBriefList()
    } else {
        searchResults()
    }

})

</script>

<style scoped>

.list-one {
}

.items {
    display: flex;
    justify-content: center;
    font-family: '喜鹊聚珍体';
}

.item-card {
    margin-bottom: 30px;
    /*background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);*/
    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);

}

.card-title {

}

.card-main-content {
    color: #222222;
}
</style>