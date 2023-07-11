<script lang="ts">
import {defineComponent} from 'vue'
import {CheckmarkCircle, PricetagOutline} from '@vicons/ionicons5'
import {NIcon, NTag} from "naive-ui";
import {ElCheckTag} from "element-plus";

export default defineComponent({
  name: "RTag",
  components: {NIcon, ElCheckTag},
  props: {
    text: String
  }
})
</script>

<template>
  <el-check-tag class="tag-box">
    <div class="flex w-full justify-center">
      <n-icon >
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20">
          <g fill="none">
            <path
                d="M14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm-2.87-5a2 2 0 0 0-1.426.584L3.022 9.249a2 2 0 0 0-.002 2.83l4.949 4.948a2 2 0 0 0 2.828 0l6.631-6.63a2 2 0 0 0 .586-1.418l-.008-4.95a2 2 0 0 0-1.986-1.997L11.13 2zm-.72 1.292A1 1 0 0 1 11.123 3l4.89.032a1 1 0 0 1 .993.999l.008 4.95a1 1 0 0 1-.293.708l-6.63 6.631a1 1 0 0 1-1.415 0l-4.949-4.948a1 1 0 0 1 .001-1.415l6.682-6.665z"
                fill="currentColor"></path>
          </g>
        </svg>
      </n-icon>
      <div class="ml-1">
        <p>{{ text }}</p>
      </div>
    </div>

  </el-check-tag>
</template>

<style scoped lang="less">

p {
  color: rgba(0, 0, 0, 0.95);
  //font-size: 12px;
  font-weight: normal;
  font-family: 喜鹊聚珍体, serif;
}

.tag-box {
  margin-left: 2px;
  height: 30px;
  padding: 7px 12px 7px 8px;
}
</style>