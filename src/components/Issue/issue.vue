<template>
  <div class="vop_thread_issue">
    <el-dialog
  title="下发"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="Close"
  >
  <span></span>
  <div class="vop_thread_issue_info">
      <p>
        <i>*</i>
        <span>省份</span>
        <el-select 
            v-on:change="getProv($event)"
            v-model="selectProv" 
            filterable 
            placeholder="请选择"
            clearable
            >
            <el-option
            :key="index"
             v-for="(item1 , index) in provs"
            :label="item1.label"
            :value="item1.value">  
            </el-option>
        </el-select>
      </p>
      <p>
        <i>*</i>
        <span>城市</span>
        <el-select 
           v-on:change="getCity($event)"
           v-model="selectCity" 
           filterable 
           placeholder="请选择"
           clearable
           >
            <el-option
              v-for="(item , index) in citys"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
      </p>
      <p>
        <i>*</i>
        <span>门店</span>
        <el-input v-model="selectStore" placeholder="请选择"></el-input>
      </p>
  </div>
    
 
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="handleClose">确 定</el-button>
    <el-button @click="$emit('setdialog-visible' , false)">取 消</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
// 省市联动数据
import data from '@/static/city.json'
export default {
  name:'issue',
  data(){
    return{
      selectProv:'',
      selectCity:'',
      selectStore:'',
      // 省市联动
      provs:data.provs,
      citys: [],
    }
  },
  props:{
    dialogVisible:{
      type:Boolean,
      required:true,
    },
    vopId:{
      type:String,
      required:true,
    }
  },
   methods: {
    //  点击确定下发执行的业务
      handleClose() {
        let _this = this
        this.$confirm('确定下发线索?')
          .then(_ => {
            if(this.selectProv === '' || this.selectCity === '' || this.selectStore === ''){
               this.$message({
                type: 'error',
                message: '请补全信息!'
               });
               return
            }
            this.$emit('setdialog-visible' , false)
          })
          .catch(_ => {});
      },
      // 关闭模态框
      Close(){
          this.$emit('setdialog-visible' , false)
      },
       // 省市联动
      getProv: function (prov) {
        let tempCity=[];
        this.citys=[];
        this.selectCity='';
        let allCity=data.allCity;
        for (var val of allCity){
          if (prov == val.prov){
            tempCity.push({label: val.label, value: val.label})
          }
        }
        this.citys = tempCity;
        },
        getCity: function (city) {
          // console.log('getCity:' + city);
          let allArea = data.allArea
          this.selectArea='';
          this.area = allArea.filter( item => item.city === city)
          // console.log(this.selectCity)
        },
        getArea: function (area) {
          // console.log('area');
          // console.log(this.selectArea)
        },
    }
}
</script>

<style lang="scss" scoped>
.vop_thread_issue{
  /deep/.el-dialog{
    width:900px !important;
    height:300px
  }
  i{
    color:#e66b5b;
  }
  span{
    margin:0 20px 0 4px;
  }
  /deep/.el-dialog__body{
    border-top:2px solid #aaaaaa;
    margin-bottom:50px;
    .el-input__icon{
      height:35px;
    }
    .el-select , .el-input--suffix{
      width:190px
    }
    .el-input__inner {
      width:190px;
      height:30px;
      border:1px solid black;
    }
    padding:25px 0 25px 25px;
    .vop_thread_issue_info{
      display: flex;
      justify-content: space-between;
    }
  }
  .el-button--primary{
    background: #169bd5;
  }
  .el-button{
    width:130px;
  }
}
</style>