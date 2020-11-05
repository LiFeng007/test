<template style="height:100%">
   <Search-list 
   :headerList ='headerList'
   :operation = 'operation'
   @operation1 = 'operation1'
   @operation2 = 'operation1'
   @operation3 = 'operation1'
   />
</template>

<script>
import SearchList from './searchList'
export default {
  data(){
    return{
      headerList:[ '选择' , '线索ID' , '线索类型' , 'VOP ID' , '姓名' , '手机号' , '意向省份' , '意向城市' ,'来源渠道' , '上报时间' , '业务评价' , '是否完成授权'],
      operation:['查看' , '下发' , '导出']
    }
  },
  methods:{
    // 查看方法
    operation1(e){
      console.log('查看' , e.target)
    },
    // 下发方法
    operation2(e){
      console.log('下发' , e.target)
    },
    // 导出方法
    operation3(e){
      console.log('导出' , e.target)
    },
  },
  components:{SearchList},
  mounted(){
    // this.$http.post('http://10.2.81.222:8090/phoenix/vop/vac/validclue' , 
    // {
    //   limit:6,
    //   start:0
    // }
    
    // ).then(res => console.log(JSON.parse(res.data)))
  }
}
</script>

