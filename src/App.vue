<template>
  <div id="app"
  v-loading="this.$parent.isLoading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
  <VopHeader 
  v-if="isHeader"
  />
    <router-view></router-view>
  </div>
</template>

<script>
import VopHeader from './layouts/header.vue'
export default {
  name: 'app',
  data(){
    return{
      isHeader:true,
      isRouterAlive: true,
    }
  },
  components: {
    VopHeader
  },
   provide() {
        return {
            reloadAll: this.reloadAll
        }
    },
   methods:{
     reloadAll() {
            this.isRouterAlive = false
            this.$nextTick(() => {
                this.isRouterAlive = true
            })
  },
   },
  watch:{
  $route(to,from){
    if(/login|index/.test(to.path)){
      this.isHeader = false
    }else{
      this.isHeader = true
    }
  }
},
}
</script>

<style>
 #app{
   height:100%;
   background:#f0f2f5;
 }
</style>
