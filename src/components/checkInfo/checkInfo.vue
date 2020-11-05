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
            v-model="value" 
            filterable 
            :placeholder="item.placeholder"
            clearable
            >
            <el-option
              v-for="item1 in options"
              :key="item1.value"
              :label="item1.label"
              :value="item1.value">
            </el-option>
        </el-select>
        <el-select 
          v-if="item.type === 'select' && index === 5" 
          @change="$emit('on-change' , $event , item.name)"
           v-model="value2" 
           filterable 
           :placeholder="item.placeholder"
           clearable
           >
            <el-option
              v-for="item1 in options"
              :key="item1.value"
              :label="item1.label"
              :value="item1.value">
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
        options: [{
          value: '黄金糕',
          label: '黄金糕'
        }, {
          value: '双皮奶',
          label: '双皮奶'
        }, {
          value: '蚵仔煎',
          label: '蚵仔煎'
        }, {
          value: '龙须面',
          label: '龙须面'
        }, {
          value: '北京烤鸭',
          label: '北京烤鸭'
        }],
        value: '',
        value2: '',

      }
    },
    mounted(){
      console.log(this.list)
    },
    methods:{
      reset(){
       this.$router.go(0)
      //  this.$forceUpdate()
      this.reloadAll()
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