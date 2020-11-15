<template>
  <div style="height:100%">
    <!-- 组件头部信息 -->
    <Header-info 
     @retrieval="retrieval"
    class="vop_MoblistThread vop_whiteList_headerInfo"
    text="消息免打扰潜客信息"
    :ifExport="false"
    />
     <!-- 检索信息填写区域 -->
    <Check-info
    reqMethods="queryDisturb"
    @updList = "updList"
    />
    <!-- 主内容 -->
    <div class="vop_serarchList vop_moblist_serarchList" 
        :class="tableData.length > 6 ? vop_moblist_serarchList2 : ''"
      >
     <el-table
      height="360"
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
      prop="vopId"
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
      prop="group"
      label="分组"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="reportTime"
      label="上报时间"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="evaluate"
      label="业务评级"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="isauth"
      label="是否完成授权"
      min-width="120">
    </el-table-column>

    <el-table-column
        prop="state"
        label="状态"
        min-width="120">
      </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      min-width="140">
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
    <!-- 分类 -->
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
  name:"NoDisturbThread",
  data(){
    return{
    vopId:'',
     dialogVisible:false, 
     testData:'',
      tableData: [
        {
          threadId: '11001',
          date: '2020-11-06',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          group: 'SMP员工',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          state:'回传待下发',
          origin: '门店质询',
        }, {
          threadId: '11001',
          date: '2020-11-06',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          group: 'SMP员工',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          state:'回传待下发',
          origin: '门店质询',
        },
      ]
    }
  },
  methods:{
    // 更新列表
    updList(date){
      this.testData = date
    },
    // 高级检索
    retrieval(event){
      console.log('选择了高级检索' , event.target)
    },
    // 详情
     threadInfo(vopId){
      // console.log(this.$route.path)
        this.$router.push({path:this.$route.path + '/线索详情', query: { id: vopId }})
    },
     // 下发
      issue(index , rows){
      this.dialogVisible = true
      this.vopId = rows[index].VopId
    },
    setdialogVisible(payload){
      this.dialogVisible = false
    },
  },
   created(){
  },
  components:{HeaderInfo , CheckInfo , PagIng , Issue}
}
</script>

<style lang="scss" scoped>
.vop_whiteList_headerInfo{
  margin-top:15px;
  margin-bottom:10px;
}
.vop_moblist_serarchList{
  margin-top:10px;
}
.vop_moblist_serarchList{
    height:58%;
    /deep/.el-table {
      height:100% !important;
    }
   
  }
  .vop_moblist_serarchList2{
     /deep/.el-table {
      height:100% !important;
    }
    /deep/.el-table__body, /deep/.el-table__footer, /deep/.el-table__header{
      height:100% !important;
    }
  }
</style>