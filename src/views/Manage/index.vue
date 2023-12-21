<template>
    <div class="mag-box">
        <div>
            <div class="text-white" style="text-align: center;" :class="color">
                {{ text }}
            </div>
            <div style="display:flex;justify-content:center;margin: 30px">
                <n-button color="white" text-color="black" label="EXEC" @click="toggle" :loading="loading"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import service from "@/utils/request/index.ts";
import {NONE, PENDING, FAIL, SUCCESS} from '@/views/Manage/status.ts'
const loading = ref(false);
const color = ref('bg-secondary');
const text = ref('None');

function toggle() {
    service.get('/submit');
    text.value = 'PENDING'
    color.value = 'bg-warning'
    loading.value = true
    const handle = setInterval(() => {
        service.get('/status').then(r => {
            let status = r.data.data;
            change(status, handle);
        })
    }, 1500)
}

function change(status, handle) {
    switch (status) {
        case PENDING:
            text.value = 'PENDING'
            color.value = 'bg-warning'
            loading.value = true
            break;
        case NONE:
            text.value = 'NONE'
            color.value = 'bg-accent'
            loading.value = false
            clearInterval(handle);
            break;
        case FAIL:
            text.value = 'FAIL'
            color.value = 'bg-negative'
            loading.value = false
            clearInterval(handle);
            break;
        case SUCCESS:
            text.value = 'SUCCESS'
            color.value = 'bg-positive'
            loading.value = false
            clearInterval(handle);
            break;
    }
}

onMounted(() => {
    service.get('/status').then(r => {
        change(r.data.data, 0);
        if (r.data.data === PENDING) {
            toggle()
        }
    })
})
</script>


<style scoped>
.mag-box {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.75);
}
</style>
