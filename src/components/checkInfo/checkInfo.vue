<template>
    <div class="vop_checkInfo">
      <!-- 主内容区 -->
     <div class="vop_checkInfo_main">
        <div 
          class="vop_checkInfo_item"
          v-for="(item , index) of list"
          :key="index"
          >
          <span class="vop_checkInfo_items">
            {{item.items}}
          </span>
          <!-- type 类型为text -->
          <el-input 
          ref="checkInfo"
          v-if="item.type === 'text'" 
          :value="item.value"
          :name="item.name"
          v-model="item.value"
          @input="$emit('on-change' , $event , item.name)"
          :placeholder="item.placeholder"
          />

          <!-- type类型为select -->
           <el-select 
            v-if="item.type === 'select' && index === 4" 
            @change="$emit('on-change' , $event , item.name)"
            v-on:change="getProv($event)"
            v-model="selectProv" 
            filterable 
            :placeholder="item.placeholder"
            clearable
            >
            <el-option
            :key="index"
             v-for="(item1 , index) in provs"
            :label="item1.label"
            :value="item1.value">  
            </el-option>
        </el-select>
        <el-select 
          v-if="item.type === 'select' && index === 5" 
          @change="$emit('on-change' , $event , item.name)"
           v-on:change="getCity($event)"
           v-model="selectCity" 
           filterable 
           :placeholder="item.placeholder"
           clearable
           >
            <el-option
              v-for="(item , index) in citys"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
      </div>
<!-- 重置&&查询 -->
  <div class="vop_checkInfo_query">
      <el-button
      class="vop_checkInfo_button"
        v-if="isReset"
        size="small"
        type="primary"
        @click="$emit('query' , $event)"
      >查询</el-button>
      <br />
      <el-button
        class="vop_checkInfo_button"
        v-if="isQuery"
        size="small"
        style="margin-top:20px"
        @click="reset"
      >重置</el-button>
     </div>
    </div>

    </div>
</template>

<script>
// 省市联动数据
import data from '../../static/city.json'
export default {
  inject:['reloadAll'],
  props:{
    list:{
      type:Array,
      required:true,
    },
    isQuery:{
      type:Boolean,
      default:true
    },
     isReset:{
      type:Boolean,
      default:true
    },
  },
  data() {
      return {
        // 省市联动
  provs:data.provs,
citys: [],
selectProv: '',
selectCity: '',
selectArea: '',
      }
    },
    mounted(){
    },
    methods:{
      reset(){
        this.$nextTick(() => {
  //  this.$refs.checkInfo.resetFields()     
  console.log(this.$refs)       
 })
      
      },
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
    },
    
}
</script>

<style lang="scss">
.vop_checkInfo_main{
  display: flex;
  flex-wrap: wrap;
  background: white;
  padding:0 0 29px 29px;
  margin-top:22px;
  border:1px solid #d7d7d7;
  position:relative;
  // 查询&&重置
  .vop_checkInfo_query{
    position:absolute;
    top: 20%;
    left: 88%;
    
  }
}
.vop_checkInfo_item{
  width:320px;
  margin:25px 25px 0 0;
  .vop_checkInfo_items{
    display: inline-block;
    width:70px;
  }
}


// 修改一些element的样式
.el-input , .el-select{
  display: inline-block;
  width:232px;
}
.el-input__inner{
  border-radius: 0;
  // border:none;
  // border: 1px solid #797979;
}
// .el-select-dropdown{
//   top:240px!important;
// }
 .vop_checkInfo_button{
      width:90px;
    }
</style>