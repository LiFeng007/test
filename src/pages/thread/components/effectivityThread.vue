<template>
  <div class="vop_effectivityThread">
    <!-- 头部信息 -->
    <Header-info 
     v-on:export="handleRow"
     v-on:retrieval="retrieval"
     text="有效线索列表"
     :drawer="drawer"
    />
    <!-- 检索信息输入 -->
    <Check-info/>
    <!-- 检索列表 -->
    <div class="vop_serarchList">
     <el-table
      :height="height"
      :data="tableData"
      style="width: 100% ; margin-top:20px;"
      @selection-change="handleSelectionChange"
    >
    <el-table-column
      fixed
      type="selection"
      label="选择"
      min-width="80">
      
    </el-table-column>
    <el-table-column
      prop="threadId"
      label="线索ID"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="type"
      label="线索类型"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="VopId"
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
      prop="province"
      label="意向省份"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="city"
      label="意向城市"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="origin"
      label="来源渠道"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="date"
      label="上报时间"
      min-width="120">
    </el-table-column>
    <el-table-column
      prop="evaluate"
      label="业务评价"
      min-width="120">
    </el-table-column>
    <el-table-column
      prop="empower"
      label="是否完成授权"
      min-width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      min-width="160">
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
        <el-button
          @click.native.prevent="handleRowSingle(scope.row.VopId, tableData[scope.$index])"
          type="text"
          size="small">
          导出
        </el-button>
      </template>
    </el-table-column>
     </el-table>
    </div>
    <!-- 分页 -->
    <Pag-ing 
    :count='40'
    :start='1'
    :end='10'
    />
    <!-- 下发弹出框 -->
    <Issue 
    :dialogVisible="dialogVisible"
    @setdialog-visible="setdialogVisible"
    :vopId="vopId"
    />
    <!-- 导出弹出框 -->
    <Export-info 
    :dialogVisibleExport="dialogVisibleExport"
    :multipleSelection="multipleSelection"
    @setdialog-visible-export="setdialogVisibleExport"
    @handle-selection-change="handleSelectionChange"
    />
  </div>
</template>
<script>

/****/ 
import HeaderInfo from '@/components/headerInfo/headerInfo'
import CheckInfo from '@/components/checkInfo/checkInfo'
import SearchList from '@/components/searchList/searchList'
import PagIng from '@/components/paging/paging'
import Issue from '@/components/Issue/issue.vue'
import ExportInfo from '@/components/exportInfo/exportInfo'

/****/ 
import {mapState} from 'vuex'
export default {
  name:"effectivityThread",
  data(){
    return{
    height:'400px',
    //下发
     dialogVisible:false, 
    //导出
     dialogVisibleExport:false,
     multipleSelection: new Array(),
     vopId:'',
     drawer:false,
     tableData:[{
          threadId: '11001',
          date: '2016-05-01',
          VopId: '威马207',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是'
        }, {
          threadId: '11001',
          date: '2016-05-02',
          VopId: '威马307',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是'
        }, {
          threadId: '11001',
          date: '2016-05-04',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是'
        }, {
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
          empower:'是'
        }, {
          threadId: '11001',
          date: '2016-05-08',
          VopId: '威马005',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是'

        }, {
          threadId: '11001',
          date: '2016-05-06',
          VopId: '威马001',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是'
        }, {
          threadId: '11001',
          date: '2016-05-07',
          VopId: '威马000',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是'
      }],
    }
  },
  mounted(){
  },
  beforeupdate(vopId, tableData){
  },
  computed:{
    ...mapState([
      'serarchList'
    ])
  },
  methods:{
    // 批量导出
    handleRow(){
      if(this.multipleSelection.length === 0){
          this.$message({
          message: '请选择要导出的线索',
          type: 'warning',
          duration:2000
        })
        return
      }
      this.dialogVisibleExport = true
    },
    // 单个导出 
    handleRowSingle(vopId , row){
      this.dialogVisibleExport = true
      this.multipleSelection.push(row)
    },
    // 子组件中关闭模态框的方法
    setdialogVisibleExport(payload){
      this.dialogVisibleExport = payload
    },
    // 选中项 push到multipleSelection容器中
    handleSelectionChange(val) {
        this.multipleSelection = val;
    },
    // 详情页
    threadInfo(index , rows){
        console.log('详情页跳转',index, rows[index])
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
      this.drawer = true
    },
     deleteRow(index, rows) {
        // rows.splice(index, 1);
        console.log(index, rows)
     }
  },
  components:{HeaderInfo , CheckInfo  , PagIng , Issue , ExportInfo}
}
</script>

<style lang="scss" scoped>
.vop_effectivityThread{
  height:98%;
  .vop_serarchList{
    height:59%;
    /deep/.el-table {
      height:100% !important;
    }
    /deep/.el-table__body, /deep/.el-table__footer, /deep/.el-table__header{
      height:100% !important;
    }
  }}
  
</style>