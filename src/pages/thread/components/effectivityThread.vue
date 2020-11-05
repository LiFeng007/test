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
    <Search-list />
    <!-- 分页 -->
    <Pag-ing />
  </div>
</template>
<script>
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
      checkInfoList:[]
    }
  },
  mounted(){
    this.getCheckInfo()
  },
  beforeupdate(){
    console.log(this.origin)
    console.log('beforeupdate')
    this.getCheckInfo()
  },
  methods:{
    // 导出业务
    vopExport(){
      alert('确定导出吗')
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
  
  },
  components:{HeaderInfo , CheckInfo , SearchList , PagIng}
}
</script>

<style lang="scss" scoped>
//  .vop_effectivityThread{
  
//  }
  
</style>