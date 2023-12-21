<script lang="ts">
import {defineComponent, ref} from 'vue'
import {NPagination} from "naive-ui";

export default defineComponent({
  name: "Pagination",
  components: {
    NPagination
  },
  setup: () => {
    const current = ref(1);
    const pageNumber = ref(12);
    return {
      current,
      pageNumber
    }
  }
})
</script>

<template>

  <div class="flex justify-center mt-2 mb-4">
    <n-pagination v-model:page="current" :page-count="pageNumber" simple size="medium"/>
  </div>
</template>

<style scoped lang="less">
</style>
