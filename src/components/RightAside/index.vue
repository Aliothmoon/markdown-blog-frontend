<script lang="ts">
import {defineComponent} from "vue";
import RAsideClock from "@/components/RightAside/Clock/index.vue";
import RDescribes from "@/components/RightAside/Describes/index.vue";
import RTags from "@/components/RightAside/RTags/index.vue";
import RCategory from "@/components/RightAside/Category/index.vue";
import {NScrollbar} from "naive-ui";
import MCatalogArea from "@/components/MD/MCatalogArea/index.vue";
import AnchorToolBar from "@/components/RightAside/AnchorToolBar/index.vue";
import {useStore} from "@/store";

export default defineComponent({
  name: "RightAside",
  components: {
    AnchorToolBar,
    MCatalogArea,
    NScrollbar,
    RCategory, RTags,
    RDescribes, RAsideClock
  },
  setup: () => {
    const store = useStore();
    return {
      store
    }
  }
})
</script>

<template>

  <div style="" class="right-side-box">
    <RDescribes></RDescribes>
    <RAsideClock style="margin-top: 30px"></RAsideClock>
    <div style="width: 280px;margin-top: 50px">
      <RCategory></RCategory>
    </div>

    <div style="width: 280px;margin-top: 30px" v-if="store.RightSideDirectory">
      <RTags></RTags>
    </div>
    <div class="bottom-sticky-box" style="width: 280px">
      <div style="width: 280px;margin-top: 30px" v-if="!store.RightSideDirectory">
        <RTags></RTags>
      </div>
      <MCatalogArea :editor-id="store.Aid" v-if="store.RightSideDirectory"></MCatalogArea>
      <AnchorToolBar></AnchorToolBar>
    </div>

  </div>


</template>

<style scoped lang="less">
.right-side-box {
  margin-top: 20px;
  align-items: center;
  display: flex;
  flex-direction: column
}

.bottom-sticky-box {
  position: sticky;
  top: 50px;
}
</style>
