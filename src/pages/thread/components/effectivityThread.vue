<template>
  <div class="vop_effectivityThread">
    <!-- 头部信息 -->
    <Header-info 
    v-on:export="vopExport"
     v-on:retrieval="retrieval"
     text="有效线索列表"
    />
    <!-- 检索信息输入 -->
      <Check-info 
        :list='checkInfoList'
        @on-change='onChange(arguments)'
        @query='query'
        />
    <!-- 检索列表 -->
    <div class="vop_serarchList">
     <el-table
      height="420"
      :data="tableData"
      style="width: 100% ; margin-top:20px;"
    >
    <el-table-column
      fixed
      type="selection"
      label="选择"
      width="80">
      <!-- <template slot-scope="scope"
      border
      v-if="headerList[index] === '选择' "
      class="vop_serarchList_checkbox"
      >
        <el-checkbox @click="handleClick(scope.row)"></el-checkbox>
      </template> -->
    </el-table-column>
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
        <el-button
          @click.native.prevent="handleRow(scope.row.VopId, tableData)"
          type="text"
          size="small">
          导出
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
    <!-- 分页 -->
    <Pag-ing />
    <router-view></router-view>
  </div>
</template>
<script>
// 组件
import HeaderInfo from '../../../components/headerInfo/headerInfo'
import CheckInfo from '../../../components/checkInfo/checkInfo'
import SearchList from '../../../components/searchList/searchList-test'
import PagIng from '../../../components/paging/paging-test'

export default {
  name:"effectivityThread",
  data(){
    return{
      threadId:'',
      VopId:'',
      phone:'',
      origin:'',
      province:'',
      city:'',
      checkInfoList:[],
     tableData:[{
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
          date: '2016-05-02',
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
        }]
    }
  },
  mounted(){
    this.getCheckInfo()
  },
  beforeupdate(){
    this.getCheckInfo()
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
    // 检索信息输入改变data元数据方法 ==> [PS]此处并不是双绑,待修改
     onChange(event){
      this[event[1]] = event[0]
    },
    // 信息输入完成检索业务
    query(e){
      console.log(e)
    },
    // 获取检索信息
    getCheckInfo(){
      this.checkInfoList = [
        {items:'线索ID',placeholder:'请输入线索ID',type:'text' ,value:this.threadId,name:'threadId'},
        {items:'VOP ID',placeholder:null,type:'text' ,value:this.VopId ,name:'VopId'},
        {items:'手机号',placeholder:null,type:'text' ,value:this.phone ,name:'phone'},
        {items:'来源渠道',placeholder:null,type:'text' , value:this.origin,name:'origin'},
        {items:'意向省份',placeholder:'请选择',type:'select' ,value:this.province ,name:'province'},
        {items:'意向城市',placeholder:'请选择',type:'select',value:this.city ,name:'city'},
      ]
    },
     deleteRow(index, rows) {
        // rows.splice(index, 1);
        console.log(index, rows)
      }
  },
  components:{HeaderInfo , CheckInfo  , PagIng}
}
</script>

<style lang="scss" scoped>
//  .vop_effectivityThread{
  
//  }
  
</style>