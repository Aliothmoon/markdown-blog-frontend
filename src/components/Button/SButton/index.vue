<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SButton"
})
</script>

<template>

  <div class="btn flex justify-center">
    <p>搜索</p>
  </div>
</template>

<style scoped lang="less">
@font-set: TiZhong;
@font-tmp: 喜鹊聚珍体;
@f-size: 15px;
p {
  font-weight: bold;
  font-family: TiZhong, 喜鹊聚珍体;
  font-size: @f-size;
}


.btn {
  width: 4.5em;
  height: 2.2em;
  margin: 1em;
  //background: black;
  color: white;
  border: none;
  border-radius: 1px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.btn:hover {
  color: black;
}

.btn:after {
  content: "";
  background: rgb(255, 253, 253);
  position: absolute;
  z-index: -1;
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(-45deg) scale(0, 1);
  transition: all 0.5s;
}

.btn:hover:after {
  transform: skewX(-45deg) scale(1, 1);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
</style>