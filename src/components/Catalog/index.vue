<template>
    <div class="catalog">
        <div class="affix">
            <MdCatalog
                    :editorId="props.editorId"
                    :theme=props.theme
                    :class="props.theme ==='dark'?'dark-mode':'light-mode'"
                    :scrollElement="scrollElement"
                    :scrollElementOffsetTop="10"
                    @onClick="onClick"
            />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'IzCatalog'
};
</script>

<script setup lang="ts">
import type {PropType} from 'vue';
import {MdCatalog} from 'md-editor-v3';
import type {TocItem} from 'md-editor-v3/lib/types/MdCatalog/MdCatalog';


const props = defineProps({
    editorId: {
        type: String as PropType<string>,
        default: ''
    },
    theme: {
        type: String as PropType<string>,
        default: 'dark'
    }
});

const scrollElement = document.documentElement;

const onClick = (e: MouseEvent, t: TocItem) => {
    // history.replaceState({}, '', `${location.pathname}#${t.text}`);
};
</script>
<style scoped>


.dark-mode {
    background-color: rgba(0, 0, 0, 0.95);
}

.light-mode {
    background-color: #fffdfd;
}

@media screen and (max-width: 768px) {
    .catalog {
        display: none;
    }
}

.catalog {
    width: 18rem;
    /*background-color: rgba(0, 0, 0, 0.7);*/
    margin-left: 5px;
    padding: 30px;
    /*display: none;*/
    /*background-color: #fff;*/
}

.affix {
    /*height: 100vh;*/
    position: sticky;
    top: 10px;
    width: 10rem;
    max-height: 100vh;
    overflow: auto;
}

.affix::-webkit-scrollbar {
    height: 0;
    width: 0;
}
</style>