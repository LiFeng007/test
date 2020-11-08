<template>
  <div class="vop_header_info">
     <span>
       {{text}}
     </span>
     <div>
        <el-button
      v-if="ifExport"
      size="small"
      type="primary"
      @click="$emit('export' , $event)"
      >{{ExportText}}</el-button>
      <el-button
      v-if="ifEetrieval"
      size="small"
      @click="$emit('retrieval' , $event)"
      style="border:1px solid gray"
      >高级检索</el-button>
     </div>
  </div>
</template>

<script>
export default {
  props:{
    text:{
      type:String,
      required:true,
    },
    ifExport:{
      type:Boolean,
      default:true
    },
    ifEetrieval:{
      type:Boolean,
      default:true
    },
    ExportText:{
      type:String,
      default:'导出',
    }
  }
}
</script>

<style lang="scss" scoped>
    .el-button--small{
      width:90px;
    }
    span{
    font-family: 'PingFangSC-Medium', 'PingFang SC Medium', 'PingFang SC';
    font-weight: 500;
    text-decoration: none;
    }
    .vop_header_info{
      display: flex;
      justify-content: space-between;
    }
</style>