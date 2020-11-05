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
      :prop="tableData[1].name"
      :label="item"
      width="170"
      >

      <template slot-scope="scope"
      border
      v-if="headerList[index] === '选择' "
      class="vop_serarchList_checkbox"
      >
        <el-checkbox @click="handleClick(scope.row)"></el-checkbox>
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
        <el-button
        v-for="(item , index) of operation"
        :key="index"
        type="text"
        size="small"
        @click="$emit(Number(`operation${index+1}`.substr(`operation${index+1}`.length-1 , 1)) === index ? `operation${index+1}` : '', $event , scope)"
        >{{operation[index]}}</el-button>
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
    // 操作按钮字段
    operation:{
      type:Array , 
      required:false,
      default:null
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
    height:420px;
    overflow: auto;
    // overflow:scroll ;
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