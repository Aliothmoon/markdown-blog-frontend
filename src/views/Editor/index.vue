<template>
    <div>
        <q-layout view="hhh LpR fff" style="background-color: #262525;" class="layout-m">

            <q-header bordered class=" text-white" style="background-color: rgba(0,0,0,0.95);">
                <q-toolbar>
                    <q-toolbar-title>
                        <q-avatar>
                        </q-avatar>
                        <q-btn size="large" @click="$router.back()">
                            EditorPro
                        </q-btn>
                    </q-toolbar-title>
                    <q-btn>
                        <el-icon :size="20" @click="upsert">
                            <UserFilled/>
                        </el-icon>
                    </q-btn>
                    <q-btn @click="night=!night" style="margin-right: 100px">
                        <el-icon size="20">
                            <Trophy/>
                        </el-icon>
                    </q-btn>
                </q-toolbar>
                <q-dialog v-model="showTitleEdit" persistent>
                    <div style="height: 40rem;width: 500px;background-color:#fff;padding: 20px 10px 10px;">
                        <n-space vertical>
                            <div>
                                <span style="margin-right: 10px">新增</span>
                                <n-switch v-model:value="isAdd"/>
                            </div>
                            <q-select
                                    v-if="!isAdd"
                                    dense outlined
                                    label="Change"
                                    @focus="briefListHandler"
                                    :options="selectedOptions"
                                    v-model="id"
                            >

                            </q-select>
                            <n-input type="text" placeholder="Title"
                                     v-model:value="editInfo.title"
                                     :status=" cks[0]?'success':'error'"
                                     @focus="cks[0] = true"

                            />
                            <n-input
                                    type="textarea"
                                    placeholder="描述"
                                    :status="cks[1] ?'success':'error'"
                                    v-model:value="editInfo.introduction"
                                    @focus="cks[1] = true"
                                    style="margin-bottom: 20px;height: 5rem"

                            />
                            <n-upload
                                    :max=1
                                    :custom-request="upload"
                            >
                                <div style="margin: 10px">
                                    <n-image :src="editInfo.img" height="100"></n-image>
                                </div>
                                <n-button>上传图片</n-button>
                            </n-upload>
                        </n-space>
                        <div style="height: 10%;width: 100%;display: flex;justify-content: center;margin-top: 2rem">
                            <n-button style="margin-right: 2rem"
                                      @click="submitTitleEdit"
                            >确定
                            </n-button>
                            <n-button
                                    @click="cancelTitleEdit"
                            >取消
                            </n-button>
                        </div>
                    </div>
                </q-dialog>
            </q-header>

            <q-page-container>
                <div style="width: 80%;height: 80vh;">
                    <div style="position: absolute;left: 50%;transform: translateX(-50%);bottom:5vh">
                        <MdEditor
                                v-model="text"
                                style="height: 85vh;width: 75vw;"
                                :theme="!night?'dark':'light'"
                                :toolbars="toolbars"
                                ref="editorRef"
                                @onUploadImg="onUploadImg"
                                @onChange="onChange"
                                @onSave="onSave"
                        >
                        </MdEditor>
                    </div>
                </div>
            </q-page-container>

        </q-layout>
    </div>
</template>

<script setup>
import {MdEditor} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {onMounted, ref, watch} from "vue";
import {toolbars} from "./staticConfig.js";
import {Trophy, UserFilled} from "@element-plus/icons-vue";
import {addArticle, getArticleBriefList, getEditInfo, updateArticle} from '@/api/article/index.js'
import {uploadImage} from '@/api/image/index.js'
import {NButton, NInput, NSpace, NSwitch, NUpload, NImage} from "naive-ui";
import {ElMessage} from 'element-plus'

const editorRef = ref();
const night = ref(false);

const isAdd = ref(true);

const upsert = () => {
    showTitleEdit.value = true;
}
const text = ref('');

// : InsertContentGenerator
const insert = (generator) => {
    editorRef.value?.insert(generator);
};

const showTitleEdit = ref(true);

const cks = ref([true, true])
const check = () => {
    if (editInfo.value.title === '') {
        cks.value[0] = false;
    }
    if (editInfo.value.introduction === '') {
        cks.value[1] = false;
    }
    return cks.value[0] && cks.value[1]
}

// Editor
const onUploadImg = (files, cb) => {
    uploadImage(files).then(r => {
        cb(r.data.data.map(name => `${location.origin}/api/img/${name}`))
    })
}


const onChange = (value) => {
    editInfo.value.content = value;
}

const onSave = (value, html) => {
    editInfo.value.content = value;

    update()
}
// Common

const update = () => {
    updateArticle(editInfo.value).then(r => {
        console.log(r.data);
        ElMessage.success("Save Success");
    })
}

const upload = (file) => {
    uploadImage(file.file.file).then(r => {
        console.log(r.data.data)
        editInfo.value.img = location.origin + '/api/img/' + r.data.data[0];
    })
}
const cancelTitleEdit = function () {
    // if (check()) {
    // }
    showTitleEdit.value = false;
}
const submitTitleEdit = () => {
    if (check()) {
        if (isAdd.value) {
            addArticle(editInfo.value).then(r => {
                id.value = r.data.data;
                editInfo.value.id = r.data.data;
            })
        }
        console.log(editInfo.value)
        showTitleEdit.value = false;
    }
}

const selectedOptions = ref([]);
const id = ref(null);
watch(id, (value, oldValue, onCleanup) => {
    if (value.value && value.value + '' !== '') {
        editInfo.value.id = value.value;
        getEditInfo(value.value).then(r => {
            console.log(r.data)
            editInfo.value.img = r.data.data.img
            editInfo.value.title = r.data.data.title
            editInfo.value.introduction = r.data.data.introduction
            editInfo.value.content = r.data.data.content
            insert((v) => {
                return {
                    targetValue: `${editInfo.value.content}`,
                    select: false,
                    deviationStart: 0,
                    deviationEnd: 0
                };
            })
        })
    }
})

const briefListHandler = function () {
    if (selectedOptions.value.length <= 0) {
        getArticleBriefList(1, 1024).then(r => {
            selectedOptions.value = r.data.data.map(r => ({
                label: r.title,
                value: r.id
            }))
        })
    }

}
const editInfo = ref({
    id: "",
    title: "",
    img: "",
    introduction: "",
    content: "",
    fixed: true
});


onMounted(function () {
})

</script>
<style lang="less">
.layout-m {
  font-family: HarmonyOS_Sans_Medium;
}
</style>