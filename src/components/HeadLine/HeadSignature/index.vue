<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HSignal",
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

p {
  //font-family: HarmonyOS_Sans_Medium,serif;
}

.h-sign {
  color: rgb(255, 253, 253);
  text-decoration: none;
  font-size: 15px;
  border: none;
  background: none;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.h-sign::before {
  margin-left: auto;
}

.h-sign::after, .h-sign::before {
  content: '';
  width: 100%;
  height: 2px;
  background: rgb(189, 6, 6);
  display: block;
  transition: 0.5s;
}

.h-sign:hover::after, .h-sign:hover::before {
  width: 0;
}
</style>