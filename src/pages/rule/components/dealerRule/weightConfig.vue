<template>
  <div class="vop_weight_config">
    <h4>权重配置详情</h4>
    <div class="check_info">
      <!-- 省份 -->
      <nav>
        <span><i>*</i>省份</span>
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
      </nav>
      <!-- 城市 -->
      <nav>
        <span><i>*</i>城市</span>
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
      </nav>
    </div>
    <p><span><i>*</i>经销商权重</span></p>
    <!-- 餅圖 -->
    <div >
      <div id="vop_pieChart" ref="pieChart" style="width:700px;height:400px"></div>
    </div>

    <footer>
      <div>
        <el-button>保存并发布</el-button>
        <el-button>取消</el-button>
      </div>
      
    </footer>
  </div>
</template>

<script>
import data from '@/static/city.json'
export default {
  name:'weightConfig',
  data(){
    return{
      // 省市联动
        provs:data.provs,
        citys: [],
        selectProv: '',
        selectCity: '',
        option : {

          series: [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: [
                      {value: 335, name: '常熟威马用户中心(社区店)'},
                      {value: 310, name: '昆山威马用户中心长江南路店'},
                      {value: 234, name: '张家港威马体验馆万达广场店'},
                      {value: 135, name: '苏州威马用户中心相城店'},
                      {value: 568, name: '苏州威马体验馆吴江爱琴海店'}
                  ],
                  itemStyle:{ 
                    normal:{ 
                      label:{ 
                        show: true, 
                        formatter: '{b} : {c} ({d}%)' 
                      }, 
                      labelLine :{show:true} 
                    } 
                  } 
              }
          ]
        }
      }
  },
  mounted(){
    this.drawLine()
  },
  methods:{
      //饼图生成方法
      drawLine(){
        let pieChart = this.$echarts.init(this.$refs.pieChart)
        pieChart.setOption(this.option)
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
  }
}
</script>

<style lang="scss" scoped>
.vop_weight_config{
  padding:0 15px;
  h4{
    margin:20px 0 30px 0;
    font-weight:bold;
  }
  .check_info{
    display:flex;
    flex-wrap: wrap;
    margin-bottom:40px;
    &>nav{
      margin-right: 30px;
      span{
      margin-right:10px
      }
    }
  }
  i{color:#e66b5b;margin-right:3px}
  #vop_pieChart{
    margin-left:10%;
    // transform: translateX(-50%);
  }
  footer{
    &>div{
    margin-top:10px;
    margin-left:50%;
    transform: translateX(-50%);
    }
    /deep/.el-button{
      width:150px;
    }
  }
}
  

</style>
