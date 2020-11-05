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
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    黑名单潜客线索
  </div>
</template>

<script>
import HeaderInfo from '../../../../components/headerInfo/headerInfo' 
import CheckInfo from '../../../../components/checkInfo/checkInfo'
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
        tableData: [{
          label:"操作",
          data:{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
          }
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
    }
  },
  methods:{
    vopExport(){
      alert('加入黑民单吗!')
    },
    retrieval(event){
      console.log('选择了高级检索' , event.target)
    },
    // 信息检索去相关方法
    onChange(event){
      this[event[1]] = event[0]
    },
    query(e){
      console.log(e)
    },
    check(e){
      console.log(e)
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
  components:{HeaderInfo , CheckInfo}
}
</script>

<style lang="scss" scoped>
  .vop_MoblistThread{
    margin-top:15px;
  }
</style>