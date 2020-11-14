<template>
  <div class="vop_thread">
    
    <LeftList 
    :list="data"
    />
    <div class="vop_thread_right">
      <router-view></router-view>
    </div>
    
  </div>
</template>
<script>
import LeftList from '../../components/leftList/leftList'
export default {
  data(){
    return{
      data:[
        {
          id:1,
          to:'有效线索',
          name:'effectivityThread',
        },
        {
          id:2,
          to:'特殊线索',
          name:'specialThread',
        },
        {
          id:3,
          to:'高风险线索',
          name:'highRiskThread',
        },
        {
          id:4,
          to:'无效线索',
          name:'invalidThread',
        },
        {
          id:5,
          to:'重复线索',
          name:'RepetitionThread',
        },
        {
          id:6,
          to:'战败线索',
          name:'FailThread',
        },
        ],
    }
  },
  name:"thread",
  components:{
    LeftList
  },
}
</script>
<style lang="scss" scoped>
  .vop_thread{
    display: flex;
    height:calc(100% - 40px);
    overflow: auto;
    .vop_thread_right{
      width:100%;
      padding:20px 56px 0 27px;
      height:calc(100% - 20px);
      overflow-y: auto;
      &>div:first-child{
        height:90%;
      }
    }
  }
</style>