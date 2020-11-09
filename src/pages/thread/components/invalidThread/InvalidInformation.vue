<template>
  <div>
    <!-- 头部信息 -->
    <Header-info
    style="margin-top:15px" 
    :ifExport="false"
     v-on:retrieval="retrieval"
     text="信息无效线索列表"
    />
    <!-- 检索信息输入 -->
    <Check-info/>
    <!-- 检索列表 -->
    <div class="vop_serarchList">
     <el-table
      height="370"
      :data="tableData"
    >
    <el-table-column
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
      prop="invalidType"
      label="无效类型"
      width="120">
    </el-table-column>

    <el-table-column
      prop="status"
      label="状态"
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
          @click.native.prevent="issue(scope.$index, tableData)"
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
import PagIng from '@/components/paging/paging-test'
import Issue from '@/components/Issue/issue.vue'

import {mapState} from 'vuex'
export default {
  name:"InvalidInformation",
  data(){
    return{
      vopId:'',
      dialogVisible:false, 
      tableData:[{
          threadId: '11001',
          date: '2016-05-01',
          VopId: '威马00745',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          status:'下发sop',
          invalidType:'NA'
        }, {
          threadId: '11001',
          date: '2016-05-02',
          VopId: '威马007344',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          status:'下发sop',
          invalidType:'NA'
        }, {
          threadId: '11001',
          date: '2016-05-04',
          VopId: '威马00722',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          status:'下发sop',
          invalidType:'NA'
        }, {
          threadId: '11001',
          date: '2016-05-01',
          VopId: '威马00723',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          status:'下发sop',
          invalidType:'NA'
        }, {
          threadId: '11001',
          date: '2016-05-08',
          VopId: '威马00523',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          status:'下发sop',
          invalidType:'NA'

        }, {
          threadId: '11001',
          date: '2016-05-06',
          VopId: '威马0034',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          status:'下发sop',
          invalidType:'NA'
        }, {
          threadId: '11001',
          date: '2016-05-07',
          VopId: '威马001',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          status:'下发sop',
          invalidType:'NA'
      }]
    }
  },
  components:{HeaderInfo , CheckInfo , PagIng , Issue},
  computed:{
    ...mapState([
      'serarchList'
    ])
  },
  methods:{
    // 导出业务 ==> 单个
    handleRow(index, rows){
        console.log( '单个导出',index, rows[index])
    },
    // 详情页
    threadInfo(index , rows){
        this.$router.push({path:this.$route.path + '/线索详情', query: { id: index }})
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
    // 信息输入完成检索业务
    query(e){
      console.log(e[0] , e[1])
    },
     deleteRow(index, rows) {
        // rows.splice(index, 1);
        console.log(index, rows)
      }
  },
}
</script>

<style lang="scss" scoped>

</style>