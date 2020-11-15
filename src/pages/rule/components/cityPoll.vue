<template>
  <div class="vop_city_poll">
     <!-- 头部信息 -->
    <Header-info 
     v-on:export="handleRow"
     v-on:retrieval="retrieval"
     ExportText="新增"
     retrievalText="导出"
     text="城市轮巡表"
    />
    <!-- 检索信息输入 -->
    <!-- 检索内容输入区域 -->
    <div class="vop_checkInfo">
      <!-- 主内容区 -->
     <div class="vop_checkInfo_main">
      <div>
         <!-- 省份名称 -->
    <div class="vop_checkInfo_item">
      <span class="vop_checkInfo_items">省份名称</span>
      <el-input v-model="provinceValue" placeholder="请输入省份名称"></el-input>
    </div>
    <!-- 省份编码 -->
    <div class="vop_checkInfo_item">
      <span class="vop_checkInfo_items">省份编码</span>
      <el-input v-model="provinceCode" placeholder="请输入省份编码"></el-input>
    </div>
    <!-- 城市名称 -->
    <div class="vop_checkInfo_item">
      <span class="vop_checkInfo_items">城市名称</span>
      <el-input v-model="cityValue" placeholder="请输入城市名称"></el-input>
    </div>
      </div>
    <div>
      <!-- 城市编码 -->
     <div class="vop_checkInfo_item">
       <span class="vop_checkInfo_items">城市编码</span>
       <el-input v-model="cityCode" placeholder="请输入城市编码"></el-input>
     </div>
     <!-- SMP名称 -->
     <div class="vop_checkInfo_item">
       <span class="vop_checkInfo_items">SMP名称</span>
       <el-input v-model="storeValue" placeholder="请输入门店名称"></el-input>
     </div>
     <!-- SMP编号 -->
      <div class="vop_checkInfo_item">
          <span class="vop_checkInfo_items">SMP编码</span>
          <el-input v-model="storeCode" placeholder="请输入门店编码"></el-input>
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
      prop="provinceCode"
      label="省份编码"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="provinceName"
      label="省份名称"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="cityCode"
      label="城市编码"
      min-width="120">
    </el-table-column>
    
    <el-table-column
      prop="cityName"
      label="城市名称"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="areaCode"
      label="区县编码"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="areaName"
      label="区县名称"
      min-width="120">
    </el-table-column>

     <el-table-column
      prop="storeCode"
      label="SMP编号"
      min-width="120">
    </el-table-column>

     <el-table-column
      prop="storeName"
      show-overflow-tooltip
      label="SMP名称"
      min-width="180">
    </el-table-column>
     
     <el-table-column
      prop="createdTime"
      label="创建时间"
      min-width="180">
    </el-table-column>

     <el-table-column
      prop="createdPro"
      label="创建人"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="updateTime"
      label="修改时间"
      min-width="180">
    </el-table-column>

    <el-table-column
      prop="updatePeople"
      label="修改人"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="setWeight"
      label="操作"
      fixed="right"
      min-width="150">
      <template slot-scope="scope">
         <el-button
          type="text"
          size="small"
         @click="alertSetWeight(scope.row.weight , scope.$index , 'dialogVisible')"
          >
          禁用
        </el-button>
         <el-button
          type="text"
          size="small"
         @click="setPopup(scope.$index , scope.row , 'updVisible')"
          >
          修改
        </el-button>
      </template>
    </el-table-column>

     </el-table>
    </div>
    <!-- 分页 -->
    <div class="operation_paging">
       <Pag-ing 
        :count='40'
        :start='1'
        :end='10'
        />
    </div>

    <!-- 修改 -->
   <el-dialog
      title="修改"
      :visible.sync="updVisible"
      width="30%"
      class="vop_city_poll_upd"
      >
      <ul>
        <li>
          <span><i>*</i>省份</span>
            <p>{{ record.index !== '' && tableData[record.index].provinceName}}</p>
        </li>
        <li>
          <span><i>*</i>城市</span>
             <p>{{ record.index !== '' && tableData[record.index].cityName}}</p>
        </li>
        <li>
          <span><i>*</i>县区</span>
          <p>{{ record.index !== '' && tableData[record.index].areaName}}</p>
        </li>
        <li>
          <span><i>*</i>SMP名称</span>
          <el-select v-model="updStoreValue" placeholder="请选择"  clearable filterable multiple collapse-tags>
              <el-option	
                  v-for="item in storeTest"
                  :key = item.name
                  :label="item.name"
                  :value="item.name">
              </el-option>
            </el-select>
        </li>
      </ul>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmUpd">确 定</el-button>
        <el-button @click="updVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog
      title="新增"
      :visible.sync="addVisible"
      width="30%"
      class="vop_city_poll_upd"
      >
      <ul>
        <li>
          <span><i>*</i>省份</span>
            <el-select v-model="updProvinceValue" placeholder="请选择" @change="chooseProvince" clearable filterable>
              <el-option	
                  v-for="item in provinceData"
                  :key="item.code"
                  :label="item.name"
                  :value="item.name">
              </el-option>
            </el-select>
        </li>
        <li>
          <span><i>*</i>城市</span>
           <el-select v-model="updCityValue" placeholder="请选择" @change="chooseCity" clearable filterable>
            <el-option	
                v-for="item in cityData"
                :key="item.code"
                :label="item.name"
                :value="item.name">
            </el-option>
	        </el-select>
        </li>
        <li>
          <span><i>*</i>县区</span>
          <el-select v-model="updAraeValue" @change="chooseArea" placeholder="请选择" clearable filterable>
            <el-option
                v-for="item in areaData"
                :key="item.code"
                :label="item.name"
                :value="item.name">
            </el-option>
        </el-select>
        </li>
        <li>
          <span><i>*</i>SMP名称</span>
          <el-select v-model="updStoreValue"  placeholder="请选择" clearable filterable>
            <el-option
                label="请选择"
                value="请选择">
            </el-option>
        </el-select>
        </li>
      </ul>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmAdd">确 定</el-button>
        <el-button @click="addVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 导出 -->
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
import PagIng from '@/components/paging/paging.vue'
import data from '@/static/city2.json'
import ExportInfo from '@/components/exportInfo/exportInfo'

export default {
  name:"cityPoll",
  components:{HeaderInfo , PagIng , ExportInfo},
  data(){
    return{
       // 省市区店联动
        provinceValue:'',
				cityValue:'',
        areaValue:'',
        storeValue:'',
				provinceData:[],
				cityData:[],
        areaData:[],
        //修改省市区
        updProvinceValue:'',
        updCityValue:'',
        updAraeValue:'',
        updStoreValue:'', 
        // 禁用修改记录该行 index id
        record:{index:'' ,id:''},
       //检索信息输入数据
        provinceValue:'',
        provinceCode:'',
        cityValue:'',
        cityCode:'',
        storeValue:'',
        storeCode:'',
        // 修改模态框弹出
        updVisible:false,
        // 新增模态框弹出
        addVisible:false,
        // 导出
        dialogVisibleExport:false,
        multipleSelection:[],
        tableData:[{
          provinceCode:110000,
          provinceName: '北京市' ,
          cityCode:110000,
          cityName:'北京市',
          areaName:'东城区',
          areaCode:1100001,
          storeName:'北京东城威马体验店',
          storeCode:110001001,
          createdTime:'2020-11-12 11:00',
          createdPro:'管理员1',
          updateTime:'2020-11-22 11:01',
          updatePeople:'管理员二'
        }, {
          provinceCode:110000,
          provinceName: '北京市' ,
          cityCode:110000,
          cityName:'北京市',
          areaName:'东城区',
          areaCode:1100001,
          storeName:'北京东城威马体验店',
          storeCode:110001001,
          createdTime:'2020-11-12 11:00',
          createdPro:'管理员1',
          updateTime:'2020-11-22 11:01',
          updatePeople:'管理员二'
        }, {
          provinceCode:110000,
          provinceName: '北京市' ,
          cityCode:110000,
          cityName:'北京市',
          areaName:'东城区',
          areaCode:1100001,
          storeName:'北京东城威马体验店',
          storeCode:110001001,
          createdTime:'2020-11-12 11:00',
          createdPro:'管理员1',
          updateTime:'2020-11-22 11:01',
          updatePeople:'管理员二'
        }, {
          provinceCode:110000,
          provinceName: '北京市' ,
          cityCode:110000,
          cityName:'北京市',
          areaName:'东城区',
          areaCode:1100001,
          storeName:'北京东城威马体验店',
          storeCode:110001001,
          createdTime:'2020-11-12 11:00',
          createdPro:'管理员1',
          updateTime:'2020-11-22 11:01',
          updatePeople:'管理员二'
        }, {
           provinceCode:110000,
          provinceName: '北京市' ,
          cityCode:110000,
          cityName:'北京市',
          areaName:'东城区',
          areaCode:1100001,
          storeName:'北京东城威马体验店',
          storeCode:110001001,
          createdTime:'2020-11-12 11:00',
          createdPro:'管理员1',
          updateTime:'2020-11-22 11:01',
          updatePeople:'管理员二'

        }, {
           provinceCode:110000,
          provinceName: '北京市' ,
          cityCode:110000,
          cityName:'北京市',
          areaName:'东城区',
          areaCode:1100001,
          storeName:'北京东城威马体验店',
          storeCode:110001001,
          createdTime:'2020-11-12 11:00',
          createdPro:'管理员1',
          updateTime:'2020-11-22 11:01',
          updatePeople:'管理员二'
        }, {
           provinceCode:110000,
          provinceName: '北京市' ,
          cityCode:110000,
          cityName:'北京市',
          areaName:'东城区',
          areaCode:1100001,
          storeName:'北京东城威马体验店',
          storeCode:110001001,
          createdTime:'2020-11-12 11:00',
          createdPro:'管理员1',
          updateTime:'2020-11-22 11:01',
          updatePeople:'管理员二'
      }],
      // 门店测试数据
      storeTest:[
        {name:'苏州威马体验店'},
        {name:'南京威马体验店'},
        {name:'上海威马体验店'},
        {name:'无锡威马体验店'},
        {name:'杭州威马体验店'},
      ]
    }
  },
  methods:{
    // 新增
    handleRow(){
      this.addVisible = true
    },
    //导出
    retrieval(event){
      this.setdialogVisibleExport(true)
    },
    // 请求数据
    async getList(){
       let res = await this.$http.post('http://47.116.74.91:3003/users/login', {
                username: this.username,
                password: this.password
            })
      },
    // 重置
    reset(){
        if(this.provinceValue !== "" || this.provinceCode !== ""  || this.cityValue !== "" || this.cityCode !== "" || this.storeValue !== "" || this.storeCode !==  ""){
        Object.assign(this.$data, this.$options.data())
        this.$message('重置成功');
        }
    },
    // 新增
    confirmAdd(){
    if(this.updProvinceValue !== '' || this.updCityValue !== '' || this.updAraeValue !== '' || this.updStoreValue !== ''){
      this.tableData.push({provinceName:this.updProvinceValue, cityName:this.updCityValue , areaName:this.updAraeValue , storeName:this.updStoreValue})
      this.addVisible = false
      this.$message({message: '新增成功',type: 'success',})
    }else{
      this.$message({message: '请补全信息',type: 'error',})
    }
    },
    // 修改
    confirmUpd(){
      if(this.updStoreValue){
        this.updVisible = false
        this.tableData[this.record.index].storeName = this.updStoreValue
        this.$message({message: '修改成功',type: 'success',})
      }else{
        this.$message({message: '请输入门店名称',type: 'error',})
      }
    },
    // 导出
    export(){
      if(this.tableData.length === 0){
        this.$message({message: '请选择要导出的线索',type: 'warning',})
        return
      }
      this.dialogVisibleExport = true
    },
    setdialogVisibleExport(payload){
      this.dialogVisibleExport = payload
    },
    // 修改 禁用 弹出框方法
    setPopup(index , data , dir){
        this.record.index = index 
        this[dir] = true
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
    this.multipleSelection = JSON.parse(JSON.stringify(this.tableData))
  },
  watch:{
    // 修改地址模态框 关闭后清空对应数据
    updVisible:function(newVal , val){
      if(!newVal) this.updProvinceValue = this.updCityValue = this.updAraeValue = this.updStoreValue = ''
    },
    addVisible:function(newVal , val){
      if(!newVal) this.updProvinceValue = this.updCityValue = this.updAraeValue = this.updStoreValue = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.vop_city_poll{
  /deep/.el-button--primary{
    background:#169bd5;
  }  
  i{color:#e66b5b;margin-right:3px}
  // 修改城市门店弹出框
  .vop_city_poll_upd {
    height:440px;
    /deep/.el-dialog__footer{
      margin-top:70px;
      text-align: center;
      .el-button{
        width:130px;
      }
    }
    /deep/.el-dialog{height:100%;margin-top:30px !important}
    ul{
      
      li{
        margin-top:15px;
        display: flex;
        padding-left:20px;
        align-items: center;
      }
      span{
        display: inline-block;
        margin-right:60px;
        width:80px;
        text-align: right;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.vop_city_poll{
  height:100%;
}
.vop_serarchList{
    margin-top:10px;
    height:65%;
     /deep/.el-table {
      height:100% !important;
    }
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