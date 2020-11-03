<template>
  <div id="app"
  v-loading="this.$parent.isLoading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
  <VopHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import VopHeader from './layouts/header.vue'
export default {
  name: 'app',
  components: {
    VopHeader
  }
}
</script>

<style>
 #app{
   height:100%;
   background:#f0f2f5;
 }
</style>
