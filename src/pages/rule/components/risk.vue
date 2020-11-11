<template>
  <div class="vop_operation_risk">
    业务条件规则配置
    <br />
    <el-button 
    class="operation_add_risk" 
    type="primary"
    @click.native.prevent="threadInfo(null , '/风险配置详情' )"
    >新增规则</el-button>
    <!-- 检索列表 -->
    <div class="vop_serarchList">
     <el-table
      height="430"
      :data="tableData"
    >
    <el-table-column
      prop="sort"
      label="排序"
      width="120">
    </el-table-column>

    <el-table-column
      prop="ruleName"
      label="规则名称"
      width="200">
    </el-table-column>

    <el-table-column
      prop="targetType"
      label="指标类型"
      width="200">
    </el-table-column>
    

    <el-table-column
      prop="date"
      label="创建时间"
      width="200">
    </el-table-column>

    <el-table-column
      prop="founder"
      label="创建人"
      width="120">
    </el-table-column>

    <el-table-column
      prop="status"
      label="状态"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="260">
      <template slot-scope="scope">

         <el-button
          type="text"
          size="small"
          @click.native.prevent="threadInfo(scope.row.ruleName, '/风险配置详情' , tableData )"
          >
          修改
        </el-button>
        <el-button
          @click.native.prevent="threadInfo(scope.row, '/线索详情' , tableData )"
          type="text"
          size="small">
          查看
        </el-button>
        <el-button
          @click.native.prevent="del(scope.$index, tableData )"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
     </el-table>
    </div>
    <!-- 分頁 -->
    <div class="operation_paging">
       <Pag-ing 
        :count='40'
        :start='1'
        :end='10'
        />
    </div>
  </div>
</template>
<script>
import PagIng from '@/components/paging/paging.vue'
export default {
  name:"risk",
  data(){
    return{
      tableData:[{
          ruleName: '风险配置' ,
          targetType:'测试文字',
          platform: '测试文字',
          founder: '管理员',
          sort: 1,
          date: '2016-05-01',
          empower:'是',
          status:'生效中',
        }, {
          ruleName: '风险配置' ,
          targetType:'测试文字',
          platform: '测试文字',
          founder: '管理员',
          sort: 2,
          date: '2016-05-02',
          status:'生效中',
        }, {
          ruleName: '风险配置' ,
          targetType:'测试文字',
          platform: '测试文字',
          founder: '管理员',
          sort: 3,
          date: '2016-05-04',
          status:'生效中',
        }, {
          ruleName: '风险配置' ,
          targetType:'测试文字',
          platform: '测试文字',
          founder: '管理员',
          sort: 4,
          date: '2016-05-01',
          status:'生效中',
        }, {
          ruleName: '风险配置' ,
          targetType:'测试文字',
          platform: '测试文字',
          founder: '管理员',
          sort: 5,
          date: '2016-05-08',
          status:'生效中',

        }, {
          ruleName: '风险配置' ,
          targetType:'测试文字',
          platform: '测试文字',
          founder: '管理员',
          sort: 6,
          date: '2016-05-06',
          status:'生效中',
        }, {
          ruleName: '风险配置' ,
          targetType:'测试文字',
          platform: '测试文字',
          founder: '管理员',
          sort: 7,
          date: '2016-05-07',
          status:'生效中',
      }]
    }
  },
  methods:{
    //刪除
     del(index , row){
        this.$confirm('移出此线索, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          row.splice(index , 1) 
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
    // 查看 修改 新增 页面
    threadInfo(vopId , path , data){
      console.log(vopId)
        this.$router.push({path:this.$route.path + path , query: { id: vopId }})
    },
  },
  components:{PagIng}
}
</script>
<style lang="scss" scoped>
.vop_operation_risk{
  // 新增规则按钮
  .operation_add_risk{
    margin-top:15px
  }
  //分頁
  .operation_paging{
    margin-top:9%;
  }
}
</style>