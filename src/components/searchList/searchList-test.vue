<template style="height:100%">
   <Search-list 
   :headerList ='headerList'
   but1="查看"
   but2="移出"
   but3="下发"
   @but1-click="but1Click(arguments)"
   @but2-click="but2Click(arguments)"
   @but3-click="but3Click(arguments)"
   />
</template>

<script>
import SearchList from './searchList'
export default {
  data(){
    return{
      headerList:[ '线索ID' , '线索类型' , 'VOP ID' , '姓名' , '手机号' , '意向省份' , '意向城市' ,'来源渠道' ,'来源平台', '上报时间' , '业务评价' , '是否完成授权' , '备注'],
    }
  },
  methods:{
    // 查看方法
    but1Click(e){
      console.log('查看' , e[2])
      // this.$router.push({name:'threadInfo', query: { id: index }})
    },
    // 移出方法
    but2Click(e){
      console.log('移出' , e[2])
      this.$confirm('此操作将永久删除该线索, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          e[2].splice(e[1].$index , 1) 
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消移出'
          });
        })
     
    },
    // 下发方法
    but3Click(e){
      console.log('下发' , e)
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

