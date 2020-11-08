<template>
  <div>
    <!-- 组件头部信息 -->
    <Header-info 
     @retrieval="retrieval"
    class="vop_MoblistThread vop_whiteList_headerInfo"
    text="白名单潜客线索"
    :ifExport="false"
    />
    <!-- 检索信息填写区域 -->
    <Check-info 
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
      prop="group"
      label="分组"
      width="120">
    </el-table-column>

    <el-table-column
      prop="date"
      label="上报时间"
      width="120">
    </el-table-column>

    <el-table-column
      prop="evaluate"
      label="业务评级"
      width="120">
    </el-table-column>

    <el-table-column
      prop="empower"
      label="是否完成授权"
      width="120">
    </el-table-column>

    <el-table-column
        prop="state"
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
          @click.native.prevent="handleRow(scope.row.VopId, tableData)"
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
  </div>
</template>

<script>
import HeaderInfo from '@/components/headerInfo/headerInfo' 
import CheckInfo from '@/components/checkInfo/checkInfo'
import PagIng from '@/components/paging/paging'
export default {
  name:"WhiteListThread",
  data(){
    return{
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
        }
      ]
    }
  },
  methods:{
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
     // 下发
    handleRow(){

    },
  },
   created(){
  },
  components:{HeaderInfo , CheckInfo , PagIng}
}
</script>

<style lang="scss" >
.vop_whiteList_headerInfo{
  margin-top:15px;
}
.vop_moblist_serarchList{
    height:370px;
    -moz-height:360px;
  }
</style>