<template>
  <div>
    <TwoLevelTab 
    :routeInfo="routeInfo"
    v-if="$store.state.threeTabStatus"
    />
    <div style="height:100%">
      <router-view style="height:100%"></router-view>
    </div>
  </div>
</template>
<script>
import TwoLevelTab from '@/components/twoLevelTab/twoLevelTab'
export default {
  name:"invalidThread" ,
  components:{TwoLevelTab},
  data(){
    return{
      // 三级路由跳转信息
      routeInfo:[
        {name:'作废线索' , to:'/thread/无效线索/作废线索'},
        {name:'信息无效线索' , to: '/thread/无效线索/信息无效线索'},
    ],
    }
  }
}
</script>

<style lang="stylus">

</style>