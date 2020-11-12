<template>
  <div class="vop_threadMonitoring">
   <LeftList
   :list="data"
    />
    <div class="vop_threadMonitoring_right">
      <router-view />
    </div>
  
  </div>
</template>
<script>
import LeftList from '../../components/leftList/leftList' 
export default {
  name:"threadMonitoring",
  components:{LeftList},
  data(){
    return{
    data:[{
      id:1,
     to:'线索流转监控',
     name:'threadMonitoring'
     }]
    }
  },
}
</script>
<style lang="scss" scoped>
  .vop_threadMonitoring{
    display: flex;
    height:calc(100% - 40px);
    .vop_threadMonitoring_right{
      padding:20px 56px 0 27px;
      flex:1;
      overflow-y: auto;
    }
  }
</style>