<template>
  <div class="vop_highrisk_thread">
    <!-- 头部信息 -->
    <Header-info 
     :ifExport="false"
     v-on:retrieval="retrieval"
     text="高风险线索列表"
    />
    <!-- 检索信息输入 -->
    <Check-info/>
     <!-- 主内容区 -->
    <div class="vop_serarchList vop_highrisk_serarchList">
     <el-table
      height="420"
      :data="tableData"
      style="width: 100% ; margin-top:20px;"
    >
    <el-table-column
      fixed
      prop="threadId"
      label="线索ID"
      width="120">
    </el-table-column>

    <el-table-column
      prop="type"
      label="线索类型"
      width="120">
    </el-table-column>

    <el-table-column
      prop="rulename"
      label="命中风险规则名称"
      width="200">
    </el-table-column>

    <el-table-column
      prop="VopId"
      label="VOP ID"
      width="120">
    </el-table-column>
    
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>

    <el-table-column
      prop="phone"
      label="手机号"
      width="120">
    </el-table-column>

    <el-table-column
      prop="province"
      label="意向省份"
      width="120">
    </el-table-column>

    <el-table-column
      prop="city"
      label="意向城市"
      width="120">
    </el-table-column>

    <el-table-column
      prop="origin"
      label="来源渠道"
      width="120">
    </el-table-column>

    <el-table-column
      prop="group"
      label="分组"
      width="120">
    </el-table-column>

    <el-table-column
      prop="date"
      label="上报时间"
      width="200">
    </el-table-column>

    <el-table-column
      prop="evaluate"
      label="业务评级"
      width="120">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="threadInfo(scope.row.VopId, tableData)"
          type="text"
          size="small">
          查看
        </el-button>
        <el-button
          @click.native.prevent="del(scope.$index, tableData)"
          type="text"
          size="small">
          移出
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
    <!-- 分页 -->
    <Pag-ing 
    :count="40"
    :start="10"
    :end="20"
    />
  </div>
</template>
<script>
import HeaderInfo from '@/components/headerInfo/headerInfo'
import CheckInfo from '@/components/checkInfo/checkInfo'
import PagIng from '@/components/paging/paging'
export default {
  name:"HighRiskThread",
  components:{HeaderInfo , CheckInfo , PagIng},
  data(){
    return{
       tableData: [
        {
          threadId: '11001',
          rulename:'测试文字',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          group: 'SMP员工',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          date:'2020-11-08 12:00',
          origin: '门店质询',
        }, {
          threadId: '11001',
          rulename:'测试文字',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          group: 'SMP员工',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          date:'2020-11-08 12:00',
          origin: '门店质询',
        }
      ]
    }
  },
  methods:{
     // 导出业务 ==> 批导
    vopExport(){
      alert('确定导出吗')
    },
    // 导出业务 ==> 单个
    handleRow(index, rows){
        console.log( '单个导出',index, rows[index])
    },
    // 详情页
    threadInfo(index , rows){
        console.log('详情页跳转',index, rows[index])
        this.$router.push({name:'threadInfo', query: { id: index }})
    },
    // 下发
    issue(index , rows){
      this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
    },
    // 高级检索业务
    retrieval(event){
      console.log('选择了高级检索' , event.target)
    },
    // 查看 ==> 详情页面
    threadInfo(vopId){
      // console.log(this.$route.path)
        this.$router.push({path:this.$route.path + '/线索详情', query: { id: vopId }})
    },
    // 移出
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
    
  }
}
</script>

<style lang="stylus">

</style>