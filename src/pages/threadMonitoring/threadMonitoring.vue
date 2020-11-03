<template>
  <div class="vop_threadMonitoring">
   <LeftList
   :list="data"
    />
   <router-view />
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
  }
</style>