<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LButton",
  props: {
    text: String
  }
})
</script>

<template>
  <div class="button">
    <p>{{ text }}</p>
  </div>
</template>

<style scoped lang="less">
@import "@/components/Button/button";



.button {
  align-items: center;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  //font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  text-transform: uppercase;
  outline: 0;
  border: 0;
  padding: 1rem;
}

.button:before {
  background-color: #fff;
  content: "";
  display: inline-block;
  height: 1px;
  margin-right: 10px;
  transition: all .42s cubic-bezier(.25, .8, .25, 1);
  width: 0;
}

.button:hover:before {
  background-color: #fff;
  width: 1rem;
}
</style>