<template>
  <div style="display:flex;justify-content:center;background-color:#1a1a1a;height:100vh;">
    <el-result title="404" sub-title="Play with Genshin Impact" class="text-blue"
               style="background-color: #242424;margin: 50px;width:60vw;height: 70vh">
      <template #icon>
        <el-image
            :src="`/api/img/nf/${Math.ceil(Math.random()*7)}.jpg`"
            style="width:20vw;"
        />
      </template>
      <template #extra>
        <n-button flat type="secondary" @click="this.$router.push('/')" color="purple">Back</n-button>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts">
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>