<template>
  <div>
    <!-- ta切换特殊线索类型 -->
    <TwoLevelTab 
    :routeInfo="routeInfo"
    v-if="$store.state.threeTabStatus"
    />
    <div class="vop_special_right">
      <router-view style="height:100%"></router-view>
    </div>
  </div>
</template>
<script>
import TwoLevelTab from '@/components/twoLevelTab/twoLevelTab'
export default {
  name:"specialThread",
  data(){
    return{
      // 三级路由跳转信息
      routeInfo:[
        {name:'黑名单潜客线索' , to:'/thread/特殊线索/黑名单潜客线索'},
        {name:'白名单潜客线索' , to: '/thread/特殊线索/白名单潜客线索'},
        {name:'消息免打扰潜客线索' , to:'/thread/特殊线索/消息免打扰潜客线索'},
    ],
  }
  },
  mounted(){
  },
  components:{TwoLevelTab}
}
</script>

<style lang="scss" scoped>
  .vop_special_right{
    height:100%;
  }
</style>