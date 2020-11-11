<template>
  <div class="vop_rule_recycle">
    <h4>线索回收配置详情</h4>
    <p>
      <span><i>*</i>未完成跟进的时间限制</span>
      <el-input placeholder="小时" v-model="followTime">
          
      </el-input>
    </p>
    <div>
      <ul>
          <li>
            <span><i>*</i>生效时间</span>
          </li>
          <li>
            <el-radio v-model="takeEffectTime" label="永久有效">永久有效</el-radio>
            <div>
              <el-radio v-model="takeEffectTime" label="有效期">有效期</el-radio>
              <el-date-picker
                :disabled = "takeEffectTime === '有效期' ? false : true"
                v-model="temr"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>

          </li>
       </ul>
    </div>

  <footer>
      <div>
        <el-button type="primary">保存并发布</el-button>
        <el-button>取消</el-button>
      </div>
  </footer>

  </div>
</template>
<script>
export default {
  name:"threadRecycle",
  data(){
    return{
      takeEffectTime:'',
      temr:'',
      followTime:''
    }
  }
}
</script>
<style lang="scss" scoped>
.vop_rule_recycle{
   /deep/.el-date-range-picker__time-header{
    display:none;
  }
  p{margin:30px 0 ; span{margin-right:30px}}
  i{color:#e66b5b;margin-right:3px}
  ul{
    display:flex;
    li{
      margin-right:60px
    }
  }

   footer{
     margin-top:20%;
     text-align: center;
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