<script setup>
</script>

<template>
  <div>

    <transition enter-active-class='animated animate__fadeIn' leave-active-class='animated animate__fadeOut'>
      <router-view>
      </router-view>
    </transition>

  </div>
</template>

<style scoped>
</style>
