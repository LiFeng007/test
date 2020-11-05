<template>
  <Check-info 
  :list='checkInfoList'
  @on-change='onChange(arguments)'
  @query='query'
  />
</template>

<script>
import CheckInfo from './checkInfo'
export default {
  data(){
    
    return{
      threadId:'',
      VopId:'',
      phone:'',
      origin:'上海',
      province:'',
      city:'',
      checkInfoList:[
        {items:'线索ID',placeholder:'请输入线索ID',type:'text' ,value:this.threadId,name:'threadId'},
        {items:'VOP ID',placeholder:null,type:'text' ,value:this.VopId ,name:'VopId'},
        {items:'手机号',placeholder:null,type:'text' ,value:this.phone ,name:'phone'},
        {items:'来源渠道',placeholder:null,type:'text' , value:this.origin,name:'origin'},
        {items:'意向省份',placeholder:'请选择',type:'select' ,value:this.province ,name:'province'},
        {items:'意向城市',placeholder:'请选择',type:'select',value:this.city ,name:'city'},
      ]
    }
  },
  methods:{
    onChange(event){
      this[event[1]] = event[0]
    },
    query(e){
      console.log(e)
    },
    check(e){
      console.log(e)
    }
  },
  components:{CheckInfo}
}
</script>

<style lang="scss" scoped>

</style>