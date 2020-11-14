<template>
  <div>
    <Two-level-tab :routeInfo="routeInfo" />
    <div class="vop_dealer_rule_right">
      <router-view style="height:100%;"></router-view>
    </div>
  </div>
</template>
<script>
import TwoLevelTab from '@/components/twoLevelTab/twoLevelTab'
export default {
  name:"dealerRule",
  components:{TwoLevelTab},
  data(){
    return{
      routeInfo:[
        {name:'经销商列表' , to:'/rule/经销商配置/经销商列表'},
        {name:'权重配置' , to: '/rule/经销商配置/权重配置'},
    ],
    }
  }
}
</script>
<style lang="scss" scoped>
.vop_dealer_rule_right{
  width:100%;
  height:100%;
}
</style>