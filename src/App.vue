<script setup lang="ts">
import LeftAsideItem from "@/components/LeftAside/LeftAsideItem/index.vue";
import LeftAside from "@/components/LeftAside/index.vue";
import Main from "@/views/Main/index.vue";
import InfoItem from "@/components/InfoItemList/InfoItem/index.vue";
import ItemImage from "@/components/InfoItemList/ItemImage/index.vue";
import RightAside from "@/components/RightAside/index.vue";
import RDescribes from "@/components/RightAside/Describes/index.vue";
import ContentHeader from "@/components/InfoItemList/ContentHeader/index.vue";
import RTag from "@/components/RightAside/RTag/index.vue";
import RTags from "@/components/RightAside/RTags/index.vue";
import RCategory from "@/components/Category/index.vue";
import HeadLine from "@/components/HeadLine/index.vue";
import MPreview from "@/components/MD/MPreview/index.vue";
import AnchorToolBar from "@/components/AnchorToolBar/index.vue";
</script>

<template>
  <div>

    <router-view v-slot="{Component}">
      <transition enter-active-class='animated animate__fadeIn' leave-active-class='animated animate__fadeOut'>
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>

  <!--    <Main></Main>-->

  <!--region Description-->
  <!--        <InfoItem introduction="　予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎"-->
  <!--                  image="http://localhost:5173/image"-->
  <!--                  cover-title="待到秋来九月八 我花开尽百花杀"-->
  <!--                  title="Title"-->
  <!--                  category="Lisp"-->
  <!--        >-->
  <!--        </InfoItem>-->
  <!--    <CHeader></CHeader>-->
  <!--  <ItemImage></ItemImage>-->
  <!--  <RightAside></RightAside>-->
  <!--    <LeftAside></LeftAside>-->
  <!--  <RCategory></RCategory>-->
  <!--  <HeadLine></HeadLine>-->
  <!--endregion-->
  <!--  <AnchorToolBar></AnchorToolBar>-->
  <!--  <MPreview></MPreview>-->
</template>

<style scoped>
</style>
