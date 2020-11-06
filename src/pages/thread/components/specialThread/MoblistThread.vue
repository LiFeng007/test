<template>
  <div>
    <!-- 组件头部信息 -->
    <Header-info 
     @export="vopExport"
     @retrieval="retrieval"
     ExportText="加入黑名单"
      class="vop_MoblistThread"
      text="黑名单潜客线索"
    />
    <!-- 检索信息填写区域 -->
    <Check-info 
    :list='checkInfoList'
    @on-change='onChange(arguments)'
    @query='query'
    />
    <!-- 主内容区 -->
    <div class="vop_serarchList vop_moblist_serarchList">
     <el-table
      height="370"
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
      prop="platform"
      label="来源平台"
      width="120">
    </el-table-column>

    <el-table-column
      prop="date"
      label="上报时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="evaluate"
      label="业务评价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="empower"
      label="是否完成授权"
      width="120">
    </el-table-column>

    <el-table-column
      prop="marks"
      label="备注"
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
        <el-button
          @click.native.prevent="handleRow(scope.row.VopId, tableData)"
          type="text"
          size="small">
          下发
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
    <Pag-ing 
    :count="40"
    :start="10"
    :end="20"
    />
  </div>
</template>

<script>
import HeaderInfo from '../../../../components/headerInfo/headerInfo' 
import CheckInfo from '../../../../components/checkInfo/checkInfo'
import PagIng from '../../../../components/paging/paging'
export default {
  name:"MoblistThread",
  data(){
    return{
      // 检索信息
      threadId:'',
      VopId:'',
      phone:'',
      origin:'',
      province:'',
      city:'',
      checkInfoList:[],
      tableData: [
        {
          threadId: '11001',
          date: '2016-05-01',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          platform:'VOP 系统',
          marks:'这是备注信息'
        }, {
          threadId: '11001',
          date: '2016-05-02',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          platform:'VOP 系统',
          marks:'这是备注信息'
        }
      ]
    }
  },
  methods:{
    vopExport(){
      alert('加入黑民单吗!')
    },
    retrieval(event){
      console.log('选择了高级检索' , event.target)
    },
    // 信息检索相关方法
    onChange(event){
      this[event[1]] = event[0]
    },
    query(e){
      console.log(e)
    },
    check(e){
      console.log(e)
    },
    // 查看 ==> 详情页面
    threadInfo(vopId){
      // console.log(this.$route.path)
        this.$router.push({path:this.$route.path + '/线索详情', query: { id: vopId }})
    },
    // 移出
    del(index , row){
        this.$confirm('此操作将永久删除该线索, 是否继续?', '提示', {
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
    // 下发
    handleRow(){

    },
    setCheckInfoList(){
     this.checkInfoList =  [
        {items:'线索ID',placeholder:'请输入线索ID',type:'text' ,value:this.threadId,name:'threadId'},
        {items:'VOP ID',placeholder:null,type:'text' ,value:this.VopId ,name:'VopId'},
        {items:'手机号',placeholder:null,type:'text' ,value:this.phone ,name:'phone'},
        {items:'来源渠道',placeholder:null,type:'text' , value:this.origin,name:'origin'},
        {items:'意向省份',placeholder:'请选择',type:'select' ,value:this.province ,name:'province'},
        {items:'意向城市',placeholder:'请选择',type:'select',value:this.city ,name:'city'},
      ]
    },
    handleClick(row) {
        console.log(row);
      }
  },
  created(){
    this.setCheckInfoList()
  },
  components:{HeaderInfo , CheckInfo ,PagIng }
}
</script>

<style lang="scss" scoped>
  .vop_MoblistThread{
    margin-top:15px;
  }
  .vop_moblist_serarchList{
    height:370px;
  }
</style>