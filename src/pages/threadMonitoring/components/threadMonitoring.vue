<template>
  <div class="vop_leads_monitoring">
     <!-- 头部信息 -->
    <Header-info 
     v-on:export="handleRow"
     text="线索流转监控"
     :ifEetrieval='false'
    />
    <!-- 流转时间 -->
    <div class="vop_leads_circulation">
      <section>
        <span>流转时间</span>
            <el-date-picker
              v-model="temr"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
      </section>
      <article>
        <el-button type="primary">查询</el-button>
        <el-button 
        @click="temr = ''"
        >重置</el-button>
      </article>
    </div>
    <!-- 主体内容 -->
     <div class="vop_threadMonitoring_List" ref="vop_threadMonitoring_List">
     <el-table
     :span-method="objectSpanMethod"
      height="400"
      :data="tableData"
      style="width: 100% ; margin-top:20px;"
    >
   
    <el-table-column
      prop="circulationStage"
      label="流转阶段"
      min-width="150"
      >
    </el-table-column>

    <el-table-column
      prop="leadsNum"
      label="线索总量(条)"
      min-width="200"
      >
    </el-table-column>

    <el-table-column
      prop="classify"
      label="分类"
      min-width="300"
      >
    </el-table-column>
    
    <el-table-column
      prop="classifyLeadsNum"
      label="分类线索总量(条)"
      min-width="180"
      >
    </el-table-column>

    <el-table-column
      prop="date"
      label="时间"
      min-width="200"
      >
    </el-table-column>
    
    <el-table-column
      label="操作"
      min-width="160"
      >
      <template slot-scope="scope">
        <el-button
         @click="handleRowSingle(scope.$index , scope.row)"
          type="text"
          size="small">
          详情导出
        </el-button>
      </template>
    </el-table-column>
     </el-table>
    </div>
    <!-- 导出弹出框 -->
    <Export-info 
    :dialogVisibleExport="dialogVisibleExport"
    :multipleSelection="multipleSelection"
    @setdialog-visible-export="setdialogVisibleExport"
    />
  </div>
</template>
<script>
import HeaderInfo from '@/components/headerInfo/headerInfo'
import ExportInfo from '@/components/exportInfo/exportInfo'
export default {
  name:"threadMonitoring",
  components:{HeaderInfo , ExportInfo},
  data(){
    return{
      height:'440px',
      temr:'',
      circulationStage:'',
      spanArr: [],//用于存放每一行记录的合并数
      // 导出弹出页
      dialogVisibleExport:false,
      multipleSelection: new Array(),
      tableData:[{
          circulationStage: '线索接入',
          date: '2016-05-01',
          leadsNum: 2000,
          classify:'总部渠道线索',
          classifyLeadsNum:500,
        }, {
          circulationStage: '线索接入',
          date: '2016-05-01',
          leadsNum: 2000,
          classify:'门店线索渠道',
          classifyLeadsNum:500,
        }, {
          circulationStage: '线索接入',
          date: '2016-05-01',
          leadsNum: 2000,
          classify:'400外呼接入线索',
          classifyLeadsNum:1000,
        }, {
         circulationStage: '线索清洗',
          date: '2016-05-01',
          leadsNum: 700,
          classify:'重复线索',
          classifyLeadsNum:100,
        }, {
          circulationStage: '线索清洗',
          date: '2016-05-01',
          leadsNum: 700,
          classify:'多次留资未下发',
          classifyLeadsNum:100,
        }, {
          circulationStage: '线索清洗',
          date: '2016-05-01',
          leadsNum: 700,
          classify:'黑民单潜客线索',
          classifyLeadsNum:100,
        }, {
          circulationStage: '线索清洗',
          date: '2016-05-01',
          leadsNum: 700,
          classify:'白名单潜客线索',
          classifyLeadsNum:100,
      }, {
          circulationStage: '线索清洗',
          date: '2016-05-01',
          leadsNum: 700,
          classify:'消息免打扰潜客线索',
          classifyLeadsNum:100,
      }, {
          circulationStage: '线索清洗',
          date: '2016-05-01',
          leadsNum: 700,
          classify:'手机号无效线索',
          classifyLeadsNum:100,
      }, {
          circulationStage: '线索清洗',
          date: '2016-05-01',
          leadsNum: 700,
          classify:'线索风险识别',
          classifyLeadsNum:100,
      }, {
          circulationStage: '线索下发',
          date: '2016-05-01',
          leadsNum: 1500,
          classify:'直接下发门店',
          classifyLeadsNum:700,
      }, {
          circulationStage: '线索下发',
          date: '2016-05-01',
          leadsNum: 1500,
          classify:'外呼确认后下发门店',
          classifyLeadsNum:800,
      }, {
          circulationStage: '线索跟进回传',
          date: '2016-05-01',
          leadsNum: 800,
          classify:'外呼回传',
          classifyLeadsNum:400,
      }, {
          circulationStage: '线索跟进回传',
          date: '2016-05-01',
          leadsNum: 800,
          classify:'门店跟进回传',
          classifyLeadsNum:400,
      }],
    }
  },
  created(){
    let heightStyle = this.$refs.vop_threadMonitoring_List.clientHeight
    this.height = heightStyle + 'px'
  },
  mounted(){
    this.getSpanArr(this.tableData)
    this.multipleSelection = JSON.parse(JSON.stringify(this.tableData))
    // this.getHeight()
    //增加监听事件，窗口变化时得到高度。
    // window.addEventListener('resize',this.getHeight,false)
    
  },
  updated(){
    let that = this
     window.onresize = () => {
      return (() => {
        let heightStyle = that.$refs.vop_threadMonitoring_List.clientHeight
        that.height = heightStyle + 'px'
      })()
    }
  },
  beforeDestroy(){
       window.onresize = null
  },

  methods:{
    // 单个导出 
    handleRowSingle(vopId , row){
      this.dialogVisibleExport = true
      this.multipleSelection = []
      this.multipleSelection.push(row)
    },
    // 子组件中关闭模态框的方法
    setdialogVisibleExport(payload){
      this.dialogVisibleExport = payload
    },
    
    // 批导
    handleRow(){
      if(this.multipleSelection.length === 0){
          this.$message({
          message: '请选择要导出的线索',
          type: 'warning',
          duration:2000
        })
        return
      }
      this.dialogVisibleExport = true
    },
     getSpanArr(data) {
    // data 求库
    for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr.push(1);
          this.pos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i].circulationStage === data[i - 1].circulationStage) {
            this.spanArr[this.pos] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            this.pos = i;
          }
        }
        // console.log(this.spanArr);
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1) {
        const _row = this.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        // console.log(`rowspan:${_row} colspan:${_col}`);
        return {
          // [0,0] 表示这一行不显示， [2,1]表示行的合并数
          rowspan: _row,
          colspan: _col
    }}},
  }
}
</script>

<style lang="scss" scoped>
.vop_leads_monitoring{
  height:98%;
  .vop_threadMonitoring_List{
    height:70%;
    /deep/.el-table {
      height:100% !important;
    }
    /deep/.el-table__body, /deep/.el-table__footer, /deep/.el-table__header{
      height:100% !important;
    }
  }

  .vop_leads_circulation{
    /deep/.el-date-editor{
      width:500px;
      height:50px;
    }
    /deep/.el-range-separator{
      line-height:41px
    }
    padding:12px 15px 10px 20px;
    height:120px;
    background:white;
    span{
    margin-right:40px;
    font-size:14px;
    }
    article{
      text-align: right;
      margin-top:30px;
      /deep/.el-button{
        width:120px
      }
      /deep/.el-button--primary{
        background:#169bd5;
      }
      
    }
  }
}
</style>