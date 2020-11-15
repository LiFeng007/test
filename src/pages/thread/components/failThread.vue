<template>
  <div class="vop_failThread_thread">
    <!-- 头部信息 -->
    <Header-info 
     :ifExport="false"
     v-on:retrieval="retrieval"
     text="战败线索列表"
    />
    <!-- 检索信息输入 -->
    <Check-info
    @updList = "updList"
    reqMethods="queryDefeat"
    />
     <!-- 主内容区 -->
    <div class="vop_serarchList vop_failThread_serarchList">
     <el-table
      height="400"
      :data="testData.length ? testData : tableData "
      style="width: 100% ; margin-top:20px;"
    >
    <el-table-column
      fixed
      prop="leadsId"
      label="线索ID"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="leadsType"
      label="线索类型"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="vid"
      label="VOP ID"
      min-width="120">
    </el-table-column>
    
    <el-table-column
      prop="name"
      label="姓名"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="phone"
      label="手机号"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="intentionProvinceName"
      label="意向省份"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="intentionCityName"
      label="意向城市"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="sourceChannelName"
      label="来源渠道"
      min-width="120">
    </el-table-column>


    <el-table-column
      prop="reportTime"
      label="上报时间"
      min-width="200">
    </el-table-column>

    <el-table-column
      prop="evaluate"
      label="业务评级"
      min-width="120">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      min-width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="threadInfo(scope.row.VopId, tableData)"
          type="text"
          size="small">
          查看
        </el-button>
        <el-button
          @click.native.prevent="issue(scope.$index, tableData)"
          type="text"
          size="small">
          下发
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
    <!-- 下发弹出框 -->
    <Issue 
    :dialogVisible="dialogVisible"
    @setdialog-visible="setdialogVisible"
    :vopId="vopId"
    />
  </div>
</template>
<script>
import HeaderInfo from '@/components/headerInfo/headerInfo'
import CheckInfo from '@/components/checkInfo/checkInfo'
import PagIng from '@/components/paging/paging'
import Issue from '@/components/Issue/issue.vue'

export default {
  name:"failThread",
  components:{HeaderInfo , CheckInfo , PagIng , Issue},
  data(){
    return{
       vopId:'',
       dialogVisible:false, 
       testData:'',
       tableData: [
        {
          threadId: '11001',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          date:'2020-11-08 12:00',
          origin: '门店质询',
        }, {
          threadId: '11001',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          date:'2020-11-08 12:00',
          origin: '门店质询',
        },{
          threadId: '11001',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          date:'2020-11-08 12:00',
          origin: '门店质询',
        }, {
          threadId: '11001',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          date:'2020-11-08 12:00',
          origin: '门店质询',
        },{
          threadId: '11001',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          date:'2020-11-08 12:00',
          origin: '门店质询',
        }, {
          threadId: '11001',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          date:'2020-11-08 12:00',
          origin: '门店质询',
        },{
          threadId: '11001',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          date:'2020-11-08 12:00',
          origin: '门店质询',
        }, {
          threadId: '11001',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
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
    // 更新列表
    updList(date){
      this.testData = date
    },
    // 导出业务 ==> 单个
    handleRow(index, rows){
        console.log( '单个导出',index, rows[index])
    },
    // 详情页
    threadInfo(index , rows){
        this.$router.push({name:'threadInfo', query: { id: index }})
    },
    // 下发
    issue(index , rows){
      this.dialogVisible = true
      this.vopId = rows[index].VopId
    },
    setdialogVisible(payload){
      this.dialogVisible = false
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
     issue(index , rows){
      this.dialogVisible = true
      this.vopId = rows[index].VopId
    },
    setdialogVisible(payload){
      this.dialogVisible = false
    },
  }
}
</script>

<style lang="scss" scoped>
.vop_failThread_thread{
  height:98%;
  .vop_serarchList{
    height:63%;
    /deep/.el-table {
      height:100% !important;
    }
    /deep/.el-table__body, /deep/.el-table__footer, /deep/.el-table__header{
      height:100% !important;
    }
  }}
</style>