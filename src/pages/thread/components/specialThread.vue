<template>
  <div>
    <!-- ta切换特殊线索类型 -->
    <TwoLevelTab 
    :routeInfo="routeInfo"
    />
    <router-view></router-view>
  </div>
</template>
<script>
import TwoLevelTab from '../../../components/twoLevelTab/twoLevelTab'
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
  components:{TwoLevelTab}
}
</script>

<style lang="stylus">

</style>