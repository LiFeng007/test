<template>
  <div class="vop_paging">
    <span>共{{count}}条记录,当前为{{start}}-{{end}}条</span>
     <el-pagination
     class="vop_paging_pages"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="sizes, prev, pager, next"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props:{
    count:{
      type:Number,
      required:true,
      default:null
    },
     start:{
      type:Number,
      required:true,
      default:null
    },
     end:{
      type:Number,
      required:true,
      default:null
    },
  }
}
</script>


<style lang="scss">
  .vop_paging{
    margin-top:4px;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    text-decoration: none;
    display:flex;
    justify-content: space-between;
  }
  .vop_paging_pages .el-select{
    width:150px;
  }
</style>