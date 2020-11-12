<template>
  <div class="vop_operation_rulr">
    业务条件规则配置
    <br />
    <el-button 
    class="operation_add_rulr" 
    type="primary"
    @click.native.prevent="threadInfo(null , '/业务条件规则配置详情' )"
    >新增规则</el-button>
    <!-- 检索列表 -->
    <div class="vop_serarchList">
     <el-table
      height="430"
      :data="tableData"
    >
    <el-table-column
      prop="priority"
      label="优先级"
      width="120">
    </el-table-column>

    <el-table-column
      prop="ruleName"
      label="规则名称"
      width="200">
    </el-table-column>

    <el-table-column
      prop="ruleType"
      label="规则类型"
      width="120">
    </el-table-column>
    
    <el-table-column
      prop="platform"
      label="下发平台"
      width="120">
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
      width="222">
      <template slot-scope="scope">
         <el-button
          type="text"
          size="small"
          >
          调整
        </el-button>
         <el-button
          type="text"
          size="small"
          @click.native.prevent="threadInfo(scope.row.ruleName, '/业务条件规则配置详情' , tableData )"
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
  name:"operationRulr",
  data(){
    return{
      tableData:[{
          ruleName: '风险配置' ,
          ruleType:'高风险线索',
          platform: '测试文字',
          founder: '管理员',
          priority: 1,
          date: '2016-05-01',
          empower:'是',
          status:'生效中',
        }, {
          ruleName: '风险配置' ,
          ruleType:'高风险线索',
          platform: '测试文字',
          founder: '管理员',
          priority: 2,
          date: '2016-05-02',
          status:'生效中',
        }, {
          ruleName: '风险配置' ,
          ruleType:'高风险线索',
          platform: '测试文字',
          founder: '管理员',
          priority: 3,
          date: '2016-05-04',
          status:'生效中',
        }, {
          ruleName: '风险配置' ,
          ruleType:'高风险线索',
          platform: '测试文字',
          founder: '管理员',
          priority: 4,
          date: '2016-05-01',
          status:'生效中',
        }, {
          ruleName: '风险配置' ,
          ruleType:'高风险线索',
          platform: '测试文字',
          founder: '管理员',
          priority: 5,
          date: '2016-05-08',
          status:'生效中',

        }, {
          ruleName: '风险配置' ,
          ruleType:'高风险线索',
          platform: '测试文字',
          founder: '管理员',
          priority: 6,
          date: '2016-05-06',
          status:'生效中',
        }, {
          ruleName: '风险配置' ,
          ruleType:'高风险线索',
          platform: '测试文字',
          founder: '管理员',
          priority: 7,
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
        this.$router.push({path:this.$route.path + path , query: { id: vopId }})
    },
  },
  components:{PagIng}
}
</script>
<style lang="scss" scoped>
.vop_operation_rulr{
  // 新增规则按钮
  .operation_add_rulr{
    margin-top:15px
  }
  //分頁
  .operation_paging{
    margin-top:9%;
  }
}
</style>