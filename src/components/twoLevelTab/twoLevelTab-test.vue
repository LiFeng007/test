<template>
  <div>
     <TwoLevelTab 
     :routeInfo="routeInfo"
     />
  </div>
</template>

<script>
import TwoLevelTab from './twoLevelTab'
export default {
  name:'twoLevelTab',
  data(){
    return{
      routeInfo:[
        {name:'白名单潜客线索' , to: '/thread/特殊线索/白名单潜客线索'},
        {name:'黑名单潜客线索' , to:'/thread/特殊线索/黑名单潜客线索'},
        {name:'消息免打扰潜客线索' , to:'/thread/特殊线索/消息免打扰潜客线索'},

      ]
    }
  },
  components:{TwoLevelTab}
}
</script>

<style lang="scss" scoped>

</style>