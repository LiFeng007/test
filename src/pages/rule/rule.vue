<template>
  <div class="vop_rule">
    <LeftList 
    :list="data"
    />
    <router-view />
  </div>
</template>
<script>
import LeftList from '../../components/leftList/leftList'
export default {
  name:"rule",
  components:{LeftList},
  data(){
    return{
      // 左侧导航数据信息
      data:[
         {
                    id:1,
                    to:'业务条件规则配置',
                    name:'operationRulr',
                },
                {
                    id:2,
                    to:'经销商配置',
                    name:'dealerRule',
                },
                {
                    id:3,
                    to:'线索回收规则配置',
                    name:'threadRecycle',
                },
                {
                    id:4,
                    to:'风险配置',
                    name:'risk',
                },
                {
                    id:5,
                    to:'城市轮询表',
                    name:'cityPoll',
                },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
 .vop_rule{
    display: flex;
    height:calc(100% - 40px);
  }
</style>