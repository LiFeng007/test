<template>
  <div class="vop_thread_exportInfo">
    <el-dialog
  title="导出"
  :visible.sync="dialogVisibleExport"
  width="30%"
  :before-close="Close"
  >
  <div class="vop_exportInfo_main">
    <p>导出线索</p>
      <span 
      v-for="(item , index) of multipleSelection"
      :key="index"
      >
      {{item.VopId}}
      <i 
      class="el-icon-close"
      @click="delItem(index)"
      ></i>
      </span>
  </div>
    
 
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="handleClose">确 定</el-button>
    <el-button @click="Close">取 消</el-button>
  </span>
</el-dialog>
  </div>
</template>
<script>

export default {
  name:'exportInfo',
  data(){
    return{
    }
  },
  props:{
    dialogVisibleExport:{
      type:Boolean,
      required:true,
    },
    multipleSelection:{
      type:Array,
      required:true,
    }
  },
  updated(){
  },
   methods: {
    //  点击确定下发执行的业务
      handleClose() {
        let _this = this
        this.$confirm('确定导出吗?')
          .then(_ => {
            this.Close()
          })
          .catch(_ => {});
      },
      // 关闭模态框 ==> 清空 选中线索容器中的内容 
      Close(){
          this.$emit('setdialog-visible-export' , false)
          this.$emit('handle-selection-change' , new Array())
      },
      // 删除一项
      delItem(index){
          this.multipleSelection.splice(index , 1)
          this.$message('已取消导出');
      }
    }
}
</script>

<style lang="scss" scoped>
.vop_thread_exportInfo{
  /deep/.el-dialog{
    width:900px !important;
    height:300px
  }
  .vop_exportInfo_main{
    padding:30px 0 0 10px;
    color:black;
    p{
      padding-bottom:10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
    }
    span{margin-right: 30px;}
    .el-icon-close{
      font-size:20px;
      &:hover{
        color:#169bd5;
        font-weight:bold;
      }
    }
  }
  /deep/.el-dialog__body{
    border-top:2px solid #aaaaaa;
    margin-bottom:60px;
  }
  .el-button--primary{
    background: #169bd5;
  }
  .el-button{
    width:130px;
  }
}
</style>