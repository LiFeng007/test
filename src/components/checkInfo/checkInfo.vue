<template>
    <div class="vop_checkInfo">
      <!-- 主内容区 -->
     <div class="vop_checkInfo_main">
    <div>
         <!-- 线索ID -->
        <div class="vop_checkInfo_item">
          <span class="vop_checkInfo_items">线索ID</span>
          <el-input v-model="threadId" placeholder="请输入内容" class="vop_input"></el-input>
        </div>
        <!-- VOP ID -->
        <div class="vop_checkInfo_item">
          <span class="vop_checkInfo_items">VOP ID</span>
          <el-input v-model="VopId" placeholder="请输入内容" class="vop_input"></el-input>
        </div>
        <!-- 手机号 -->
        <div class="vop_checkInfo_item">
          <span class="vop_checkInfo_items">手机号</span>
          <el-input v-model="phone" placeholder="请输入内容" class="vop_input"></el-input>
        </div>
    </div>
      <div>
        <!-- 来源渠道 -->
        <div class="vop_checkInfo_item">
          <span class="vop_checkInfo_items">来源渠道</span>
          <el-input v-model="origin" placeholder="请输入内容" class="vop_input"></el-input>
        </div>
        <!-- 意向省份 -->
        <div class="vop_checkInfo_item">
          <span class="vop_checkInfo_items">意向省份</span>
          <el-select 
                v-on:change="getProv($event)"
                v-model="selectProv" 
                filterable 
                placeholder="请选择"
                clearable
                class="vop_select"
                >
                <el-option
                :key="index"
                v-for="(item1 , index) in provs"
                :label="item1.label"
                :value="item1.value">  
                </el-option>
            </el-select>
        </div>
        <!-- 意向城市 -->
         <div class="vop_checkInfo_item">
              <span class="vop_checkInfo_items">意向城市</span>
              <el-select 
              v-on:change="getCity($event)"
              v-model="selectCity" 
              filterable 
              placeholder="请选择"
              clearable
              class="vop_select"
              >
                <el-option
                  v-for="(item , index) in citys"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
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
</template>

<script>
// 省市联动数据
import data from '@/static/city.json'
// 状态管理
import * as types from '@/store/types'

import {queryDefeat , queryEffective , queryMobList , queryDisturb , queryWhiteList} from '@/api/leads'
export default {
  inject:['reloadAll'],
  props:{
    reqMethods:{
      required:true,
    }
  },
  data() {
      return {
        // 省市联动
        provs:data.provs,
        citys: [],
        // 输入信息元数据
        threadId:'',
        VopId:'',
        phone:'',
        origin:'',
        selectProv: '',
        selectCity: '',
        selectArea: '',
      }
    },
    mounted(){
    },
    methods:{
      // 请求数据
      async getList(){
        let data = ''
        if(this.reqMethods === 'queryDefeat')  data = await queryDefeat()
        else if (this.reqMethods === 'queryEffective') data = await queryEffective()
        else if (this.reqMethods === 'queryMobList') data = await queryMobList()
        else if (this.reqMethods === 'queryDisturb') data = await queryDisturb()
        else if (this.reqMethods === 'queryWhiteList') data = await queryWhiteList()
        else return 
        this.$emit('updList' , data.data.data)
      },
      // 重置
      reset(){
        if(this.VopId !== "" || this.threadId !== "" || this.phone !== "" || this.origin !== "" || this.selectProv !== "" || this.selectCity !== ""){
        this.VopId = this.threadId = this.phone = this.origin = this.selectProv = this.selectCity = ""
        this.$message('重置成功');
        }
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
    },
    
}
</script>

<style lang="scss">
.vop_checkInfo{
  display:flex;
  height:25%;
  align-items: center;
  background: white;
  border:1px solid #d7d7d7;
  padding-left:2%;
}
.vop_checkInfo_query{
  // padding:0 0 29px 29px;
  // margin:56px 20px 0 0;
  width:20%;
}
.vop_checkInfo_main{
  width:80%;
  height:100%;
   &>div{
    display: flex;
    width: 90%;
    height:50%;
    align-items: center;
  }
  // height:100%;
  flex-wrap: wrap;
  padding-left:0 0 29px 29px;
  // margin-top:22px;
}
.vop_checkInfo_item{
  display: flex;
  align-items: center;
  height:20%;
  width:30%;
  margin-right:2%;
  // margin:25px 19px 0 0;
  .vop_checkInfo_items{
    display: inline-block;
    width:40%;
    text-align: right;
    font-size:0.4em;
     margin-right: 1%;
  }
}


// 修改一些element的样式
.vop_input{
  display: inline-block;
  width:60%;
  // height:20%;
  // height:120%;
  /deep/input{
    width:100%;
  }
}
.vop_select{
  // width:100%;
  /deep/.el-input{
    // width:100%;
  }
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