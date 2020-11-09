<template>
    <Issue 
    :dialogVisible="dialogVisible"
    @setdialog-visible="setdialogVisible"
    />
</template>
<script>
import Issue from './issue'
export default {
  components:{Issue},
  data(){
    return{
      dialogVisible:false
    }
  },
  methods:{
    setdialogVisible(payload){
      console.log(payload)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>