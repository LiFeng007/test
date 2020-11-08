<template>
  <div class="vop_serarchList">
       <el-table
       :data="tableData"
        height="420"
        border
       >
       <!-- 表头 -->
    <el-table-column
     v-for="(item , index) of headerList"
      :key="index"
      :prop="item"
      :label="item"
      width="170"
      >

      <template slot-scope="scope"
      border
      class="vop_serarchList_checkbox"
      @click="handleClick(scope)"
      >
        <!-- <el-checkbox @click="handleClick(scope.row)"></el-checkbox> -->
        <span>{{scope.row}}</span>
      </template>
    </el-table-column>
    
    <!-- 内容 -->

    <!-- 操作 -->
    <el-table-column
    class="vop_serarchList_ope"
      fixed="right"
      label="操作"
      v-if="operation"
      width="100">
      <template slot-scope="scope"
      border
      >
      <!-- 操作栏按钮1 -->
        <el-button
        type="text"
        size="small"
        @click="$emit('but1-click', $event , scope , tableData)"
        >{{but1}}</el-button>
        <!-- 操作栏按钮2 -->
        <el-button
        type="text"
        size="small"
        @click="$emit('but2-click', $event , scope , tableData)"
        >{{but2}}</el-button>
        <!-- 操作栏按钮3 -->
        <el-button
        type="text"
        size="small"
        @click="$emit('but3-click', $event , scope , tableData)"
        >{{but3}}</el-button>
      </template>
    </el-table-column>

  </el-table>
  


  </div>
</template>

<script>
export default {
  props:{
    // 表头字段
    headerList:{
      type:Array,
      required:true,
      default:null
    },
    // 内容列表
    // tableData:{
    //   type:Array,
    //   re
    // },
    // 操作栏目显示与否
    operation:{
      type:Boolean , 
      default:true
    },
    // 按钮显示文字
    but1:{
      type:String,
      default:null,
    },
    but2:{
      type:String,
      default:null,
    },
    but3:{
      type:String,
      default:null,
    }
  },
  data(){
    return{
      tableData: [

        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
    
    }
  },
  created(){
  },
  methods:{
    handleClick(row) {
        console.log(row);
      }
  }
}
</script>
<style lang="scss">
  .vop_serarchList{
    width:1220px;
    margin-top:15px;
    background:white;
    // height:420px;
  }

  // 修改一些element样式
  .el-table .cell {
    // width:240px;
    padding:0;
    text-align: center;
  }
  .el-table th, .el-table tr{
    width:240px;
  }
  // .el-table tr{
  //   color:#02aff4;
  // }
  // .el-table .cell{
  //   font-size:17px;
  //   color:#7f7f7f;
  //   text-align: center;

  // }
  .el-table td, .el-table th{
    text-align: none;
  }
  .el-table th {
    background:#f2f2f2;
    border:#d7d7d7 1px solid;
    
    text-align: center;
    &:nth-child(2n){
      border-left:none;
      border-right:none;
      border-bottom: 1px solid #d7d7d7;
    }
    &:nth-child(n){
      border-bottom: 1px solid #d7d7d7;
    }
    
  }
  .el-table__body td{
    border:1px solid #d7d7d7;
    &:nth-child(2n){
      border-left:none;
      border-right:none;
    }
  }
body .el-table th.gutter {
    display: table-cell !important
}
</style>