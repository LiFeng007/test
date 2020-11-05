<template>
   <div>
     <HeaderInfo
     v-on:export="vopExport"
     v-on:retrieval="retrieval"
     text="有效线索列表"
     :ifExport="true"
     :ifEetrieval="true"
      />
   </div>
</template>

<script>
import HeaderInfo from './headerInfo'
export default {
  methods:{
    vopExport(){
      alert('确定导出吗')
    },
    retrieval(event){
      console.log('选择了高级检索' , event.target)
    }
  },
  components:{HeaderInfo}
}
</script>