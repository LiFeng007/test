<template>
  <div class="vop_paging">
    <span>共{{count}}条记录,当前为{{start}}-{{end}}条</span>
        <el-pagination
        class="vop_pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count">
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
  },
  data(){
    return{
       currentPage4: 4
    }
  },
  methods:{
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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
    span{
      font-size:14px;
    }
  }
  // 修改一些elementui样式
  .vop_paging_pages .el-select{
    width:150px;
    
  }
  .vop_pagination{
    span{
      &:first-child{
        display: none;
      }
    }
  }
</style>