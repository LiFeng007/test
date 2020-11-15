<template>
  <div class="vop_rule_dealer_list">
    <!-- 检索内容输入区域 -->
    <div class="vop_checkInfo">
      <!-- 主内容区 -->
     <div class="vop_checkInfo_main">
        <div>
            <!-- 线索ID -->
    <div class="vop_checkInfo_item">
      <span class="vop_checkInfo_items">ID</span>
      <el-input v-model="threadId" placeholder="请输入规则名称"></el-input>
    </div>
    <!-- 经销商类型 -->
    <div class="vop_checkInfo_item">
      <span class="vop_checkInfo_items">经销商类型</span>
       <el-select 
            v-model="dealerType" 
            filterable 
            placeholder="请选择"
            clearable
            >
            <el-option
            label="请选择"
            value="请选择">  
            </el-option>
       </el-select>
    </div>
    <!-- 线索下发录出 -->
    <div class="vop_checkInfo_item">
      <span class="vop_checkInfo_items">线索下发录出</span>
      <el-select 
            v-model="Recorded" 
            filterable 
            placeholder="请选择"
            clearable
            >
            <el-option
            label="请选择"
            value="请选择">  
            </el-option>
      </el-select>
    </div>
        </div>
        <div>
          <!-- 省份 -->
     <div class="vop_checkInfo_item">
       <span class="vop_checkInfo_items">意向省份</span>
       <el-select v-model="provinceValue" placeholder="请选择" @change="chooseProvince" clearable filterable>
          <el-option	
              v-for="item in provinceData"
              :key="item.code"
              :label="item.name"
              :value="item.name">
          </el-option>
	      </el-select>
     </div>
     <!-- 城市 -->
      <div class="vop_checkInfo_item">
          <span class="vop_checkInfo_items">意向城市</span>
          <el-select v-model="cityValue" placeholder="请选择" @change="chooseCity" clearable filterable>
            <el-option	
                v-for="item in cityData"
                :key="item.code"
                :label="item.name"
                :value="item.name">
            </el-option>
	        </el-select>
      </div>
       <!-- 区域 -->
      <div class="vop_checkInfo_item">
        <span class="vop_checkInfo_items">区域</span>
        <el-select v-model="areaValue" @change="chooseArea" placeholder="请选择" clearable filterable>
          <el-option
              v-for="item in areaData"
              :key="item.code"
              :label="item.name"
              :value="item.name">
          </el-option>
       </el-select>
      </div>
        </div>
    </div>
      <!-- 重置&&查询 -->
      <div class="vop_checkInfo_query">
      <el-button
      class="vop_checkInfo_button"
        size="small"
        type="primary"
        @click="getList"
      >查询</el-button>
      <br />
      <el-button
        class="vop_checkInfo_button"
        size="small"
        style="margin-top:20px"
        @click="reset"
      >重置</el-button>
     </div>

    </div>
    <!-- 内容检索区域 -->
    <div class="vop_serarchList"
    :class="tableData.length > 6 ? 'vop_serarchList2' : ''"
    >
     <el-table
      height="400"
      :data="tableData"
    >
    <el-table-column
      prop="vopId"
      label="ID"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="ruleName"
      label="名称"
      min-width="200">
    </el-table-column>

    <el-table-column
      prop="address"
      label="地址"
      min-width="240">
    </el-table-column>
    
    <el-table-column
      prop="person"
      label="区域负责人"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="distributorType"
      label="经销商类型"
      min-width="180">
    </el-table-column>

    <el-table-column
      prop="weight"
      label="权重"
      min-width="100">
    </el-table-column>

    <el-table-column
      prop="setWeight"
      label="修改权重"
      min-width="100">
      <template slot-scope="scope">
         <el-button
          type="text"
          size="small"
         @click="alertSetWeight(scope.row.weight , scope.$index , 'dialogVisible')"
          >
          修改
        </el-button>
      </template>
    </el-table-column>


    <el-table-column
      label="线索下发录出"
      min-width="120">
      <template slot-scope="scope">
         <el-button
          type="text"
          size="small"
          @click="!scope.row.close ? alertSetWeight(scope.row.weight , scope.$index , 'dialogVisible1') : ''"
        >
          {{scope.row.close ? '开' : '关'}}
        </el-button>
      </template>
    </el-table-column>
     </el-table>
    </div>
    <!-- 分頁 -->
    <div class="operation_paging">
       <Pag-ing 
        :count='40'
        :start='1'
        :end='10'
        />
    </div>
    <!-- 修改权重模态框 -->
    <el-dialog
      title="修改权重"
      :visible.sync="dialogVisible"
      width="30%"
    >
  <el-input 
  v-model='setWeights.data' 
  :style="{marginLeft:'20px' , marginRight:'20px'}"
  ></el-input>
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="setWeight">确 定</el-button>
    </el-dialog>
    <!-- 关闭线索下发录出 -->
    <el-dialog
    class="vop_close_issue"
      title="是否确认关闭"
      :visible.sync="dialogVisible1"
      width="30%"
    >
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="closeIssue">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>
// 省市联动数据
import data from '@/static/city2.json'
import PagIng from '@/components/paging/paging.vue'
export default {
  name:'dealerList',
  components:{PagIng},
  data(){
    return{
        // 省市联动
        provinceValue:'',
				cityValue:'',
				areaValue:'',
				provinceData:[],
				cityData:[],
				areaData:[],
        // 输入信息元数据
        threadId:'',
        dealerType:'',
        // 下发录出
        Recorded:'',
        // 
        dialogVisible:false,
        dialogVisible1:false,
        // 
        setWeights:{data:'',index:''},
        tableData:[{
          vopId:20201111,
          ruleName: '风险配置' ,
          person:'钢铁侠',
          distributorType: '一级经销商',
          weight:'20%',
          setWeight:'',
          close:false,
          address:'上海市-青浦区-威马****',
        }, {
          vopId:20201111,
          ruleName: '风险配置' ,
          person:'钢铁侠',
          distributorType: '一级经销商',
          weight:'20%',
          setWeight:'',
          close:false,
          address:'上海市-青浦区-威马****',
        }, {
         vopId:20201111,
          ruleName: '风险配置' ,
          person:'钢铁侠',
          distributorType: '一级经销商',
          weight:'20%',
          setWeight:'',
          close:false,
          address:'上海市-青浦区-威马****',
        }, {
          vopId:20201111,
          ruleName: '风险配置' ,
          person:'钢铁侠',
          distributorType: '一级经销商',
          weight:'20%',
          setWeight:'',
          close:false,
          address:'上海市-青浦区-威马****',
        }, {
          vopId:20201111,
          ruleName: '风险配置' ,
          person:'钢铁侠',
          distributorType: '一级经销商',
          weight:'20%',
          setWeight:'',
          close:false,
          address:'上海市-青浦区-威马****',

        }, {
          vopId:20201111,
          ruleName: '风险配置' ,
          person:'钢铁侠',
          distributorType: '一级经销商',
          weight:'20%',
          setWeight:'',
          close:false,
          address:'上海市-青浦区-威马****',
        }, {
          vopId:20201111,
          ruleName: '风险配置' ,
          person:'钢铁侠',
          distributorType: '一级经销商',
          weight:'20%',
          setWeight:'',
          close:false,
          address:'上海市-青浦区-威马****',
      }]
    }
  },
  methods:{
    // 请求数据
      async getList(){
       let res = await this.$http.post('http://47.116.74.91:3003/users/login', {
                username: this.username,
                password: this.password
            })
      },
      // 重置
      reset(){
        if(this.threadId !== "" || this.dealerType !== ""  || this.Recorded !== "" || this.provinceValue !== "" || this.cityValue !== "" || this.areaValue !==  ""){
        this.threadId = this.dealerType = this.Recorded = this.provinceValue = this.cityValue =  this.areaValue = ""
        this.$message('重置成功')
        }
      },
    // 修改权重
      setWeight(){
        if (parseInt(this.setWeights.data) <= 100 && /^(100|[1-9]?\d(\.\d\d?\d?)?)%$|0$/.test(this.setWeights.data)){
        this.dialogVisible = false
        this.tableData[this.setWeights.index].weight = this.setWeights.data
        this.$message({message: '修改成功',type: 'success'});
        }else{
          this.$message({message: '请规范输入内容',type: 'error'})
        }
      },
      // 修改权重模态框弹出
      alertSetWeight(data , index , dir){
        this.setWeights.data = data
        this.setWeights.index = index
        this[dir] = true
      },
      // 关闭线录出
      closeIssue(){
        this.tableData[this.setWeights.index].close = true
        this.$message({message: '关闭成功',type: 'success'})
        this.dialogVisible1 = false
      },
    // 省市联动
     chooseProvince(value){
				this.cityValue = '';
				this.areaValue = '';
				this.cityData = [];
				this.areaData = [];
				this.provinceData.map(e=>{//遍历数据
					if( value == e.name){
						this.cityData = e.cityList;
						return;
					}
				})
			},
			chooseCity(value){
				this.areaValue = '';
				this.cityData.map(e=>{//遍历数据
					if( value == e.name){
						this.areaData = e.areaList;
						return;
					}
				})
			},
			chooseArea(){
			}
  },
  created(){
    this.provinceData = data
  },
}
</script>

<style lang="scss" scoped>
  .vop_rule_dealer_list{
    height:100%;
    .vop_checkInfo{
      margin-top:20px;
    }
    .vop_checkInfo_items{
      width: 80px;
    font-size: 13px;
    }
    /deep/.el-dialog{
      height:150px;
    }
    .vop_close_issue /deep/.el-dialog__body{
      text-align: center;
    }
  }
  .vop_serarchList{
    margin-top:10px;
    height:63%;
    -moz-height:360px;
     /deep/.el-table {
      height:100% !important;
    }
  }
  .vop_checkInfo_item{
    margin-right:2%;
  }
  .vop_serarchList2{
     /deep/.el-table {
      height:100% !important;
    }
    /deep/.el-table__body, /deep/.el-table__footer, /deep/.el-table__header{
      height:100% !important;
    }
  }
</style>
