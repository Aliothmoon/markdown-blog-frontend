<script lang="ts">
import {defineComponent} from 'vue'
import {NIcon} from "naive-ui";

export default defineComponent({
  name: "HButton",
  components: {NIcon},
  props: {
    text: String
  }
})
</script>

<template>
  <div class="h-sign">
    <p>{{ text }}</p>
  </div>
</template>

<style scoped lang="less">
@import "@/components/Button/button";


.h-sign {
  color: rgb(255, 253, 253);
  text-decoration: none;
  //font-size: 10px;
  border: none;
  background: none;
  font-weight: 600;
  //font-family: 'Poppins', sans-serif;
}

.h-sign::before {
  margin-left: auto;
}

.h-sign::after, .h-sign::before {
  content: '';
  width: 0;
  height: 2px;
  background: rgb(189, 6, 6);
  display: block;
  transition: 0.5s;
}

.h-sign:hover::after, .h-sign:hover::before {
  width: 100%;
}
</style>