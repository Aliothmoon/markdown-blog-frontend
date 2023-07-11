<script lang="ts">
import {defineComponent} from "vue";
import RAsideClock from "@/components/Clock/index.vue";
import RDescribes from "@/components/Describes/index.vue";
import RTags from "@/components/RTags/index.vue";
import RCategory from "@/components/Category/index.vue";

export default defineComponent({
  name: "RightAside",
  components: {RCategory, RTags, RDescribes, RAsideClock}
})
</script>

<template>
  <div style="margin-top: 20px;align-items: center;display:flex;flex-direction: column">
    <RDescribes ></RDescribes>
    <RAsideClock style="margin-top: 30px"> </RAsideClock>
    <div style="width: 250px;margin-top: 20px">
      <RCategory></RCategory>
    </div>
    <div style="width: 250px;margin-top: 50px">
      <RTags></RTags>
    </div>

  </div>
</template>

<style scoped>

</style>