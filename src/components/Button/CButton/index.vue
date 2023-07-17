<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CButton",
  props: {
    text: String
  }
})
</script>

<template>
  <div class="button font-set">
    <p class="font-set">{{ text }}</p>
  </div>
</template>

<style scoped lang="less">
@import "@/components/Button/button";

@height: 20px;
@width: 70px;

.button {
  //font-size: 10px;
  color: #e1e1e1;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

.button:focus,
.button:hover {
  color: #fff;
}

.button:focus:after,
.button:hover:after {
  width: 100%;
  left: 0%;
}

.button:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 1.2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
</style>