<template>
  <div class="card ">
    <div class="card-content">
      <div class="card-top">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "LeftAsideItem"
})

</script>


<style scoped lang="less">
@card-width: 120px;
@card-height: 50px;

.card {
  width: @card-width;
  height: @card-height;
  background: transparent;
  color: rgb(38, 37, 37);
  position: relative;
  border-radius: 7px;
  transition: transform 0.4s ease;
}

.card .card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5em;
  transition: transform 0.4s ease;
}

.card .card-top, .card .card-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card .card-top p, .card .card-top, .card .card-bottom p, .card {
  margin-top: 2px;
}

.card .card-title {
  font-weight: bold;
}

.card .card-top p, .card .card-bottom p {
  font-weight: 600;
}

.card .card-bottom {
  align-items: flex-end;
}

.card .card-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
  transition-duration: 0.3s;
}

.card .card-image svg {
  width: 4em;
  height: 4em;
  transition: transform 0.4s ease;
}

.card:hover {
  cursor: pointer;
  transform: scale(0.97);
  //background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
  //background-color: rgb(243, 243, 245);
  background-color: rgb(240, 240, 241);
}

.card:hover .card-content {
  transform: scale(0.96);
}

.card:hover .card-image svg {
  transform: scale(1.05);
}

.card:active {
  transform: scale(0.9);
}
</style>