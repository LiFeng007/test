<template>
  <div class="vop_rule_addrule">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
      v-for="(item , index) in breadcrumb"
      :key="index"
      >
      <span
      @click="index !== breadcrumb.length-1 ? historyGo(index + 1) : ''"
      >{{item}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 规则名称 规则描述 -->
    <div class="input_rule">
        <div>
          <span><i>*</i>规则名称</span>
          <el-input v-model="ruleName" placeholder="请输入规则名称"></el-input>
        </div>
        <div>
          <span><i>*</i>规则描述</span>
          <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入规则描述,描述内容不超过300字"
          maxlength="300"
          v-model="ruleDescribe">
        </el-input>
        </div>
    </div>
    <!-- 常规业务条件配置 自定义条件配置 -->
    <div>
        <el-tabs v-model="activeName" type="card">
          <!-- 常规业务条件配置 -->
          <el-tab-pane label="常规业务条件配置" name="first">
            <div class="rule_routine">
              <p>线索提取规则配置</p>
              <div>
                <ul>
                  <li>
                    <span>线索类型</span>
                    <el-select v-model="threadType" placeholder="请选择" clearable>
                      <el-option 
                      label="全量"  
                      value="全量"
                      ></el-option>
                      <el-option 
                      label="活动留资" 
                      value="活动留资"
                      ></el-option>
                   </el-select>
                  </li>
                  <li>
                    <span>活动名称</span>
                     <el-select v-model="activityName" placeholder="请选择" clearable>
                      <el-option 
                      label="活动①"  
                      value="活动①"
                      ></el-option>
                      <el-option 
                      label="活动②" 
                      value="活动②"
                      ></el-option>
                   </el-select>
                  </li>
                  <li>
                    <span>活动ID</span>
                    <el-input placeholder="请输入活动ID" v-model="activityID"></el-input>
                  </li>
                  <li>
                    <span>来源渠道名称</span>
                    <el-input placeholder="请输入来源渠道名称" v-model="source"></el-input>
                  </li>
                  <li>
                    <span>媒体产品名称</span>
                     <el-select v-model="product" placeholder="请选择" clearable>
                      <el-option 
                      label="媒体产品①"  
                      value="媒体产品①"
                      ></el-option>
                      <el-option 
                      label="媒体产品②" 
                      value="媒体产品②"
                      ></el-option>
                   </el-select>
                  </li>
                </ul>
              </div>
              <section>
                <ul>
                  <li>上报时间</li>
                  <li>
                    <p>
                      <el-radio v-model="followTime" label="不限">不限</el-radio>
                    </p>
                    <p class="vop_time_slot">
                      <el-radio v-model="followTime" label="时间周期">时间周期</el-radio>
                      <el-time-picker
                          :disabled="followTime === '时间周期' ? false : true"
                          v-model="startDate"
                          :picker-options="{
                          selectableRange: '0:0:00 - 23:59:59'
                          }"
                          placeholder="选择开始时间点">
                        </el-time-picker>
                        <el-time-picker
                          :disabled="startDate ? false : true"
                          arrow-control
                          v-model="endDate"
                          :picker-options="{
                            selectableRange: '0:0:00 - 23:59:59'
                          }"
                          placeholder="选择结束时间点">
                        </el-time-picker>
                    </p>
                  </li>
                </ul>
                <article>
                  <div>
                    <span>是否勾选同意威马用户注册协议</span>
                    <nav>
                      <el-radio v-model="agreement" label="不限">不限</el-radio>
                      <el-radio v-model="agreement" label="是">是</el-radio>
                      <el-radio v-model="agreement" label="否">否</el-radio>
                    </nav>
                  </div>
                  <div>
                    <span>门店意向是否为空</span>
                    <nav>
                      <el-radio v-model="isStore" label="不限">不限</el-radio>
                      <el-radio v-model="isStore" label="是">是</el-radio>
                      <el-radio v-model="isStore" label="否">否</el-radio>
                    </nav>
                  </div>
                </article>
              </section>
              <!-- ***** -->
              <aside>
                <i>*</i>
                <span>是否下发</span>
                <el-radio v-model="isIssus" :label="true">是</el-radio>
                <el-radio v-model="isIssus" :label="false">否</el-radio>  
              </aside>
            </div>
          </el-tab-pane>
            <!-- 自定义条件配置 -->
          <el-tab-pane label="自定义条件配置" name="second">
            <div class="rule_custom">
              <div>
                <p>线索提取规则配置</p>
                
              <div
              v-for="item in ruleCount"
              :key="item"
              >
                <b>规则{{item}}</b>
                <span>属性</span>
                <!-- ************** -->
              <el-select 
                  v-model="selectBrand" 
                  placeholder="请选择"
                  clearable
                  >
                  <el-option
                  :key="index"
                  v-for="(item , index) in ruleData"
                  :label="item.label"
                  :value="item.value">  
                  </el-option>
              </el-select>
                <!-- ************** -->
               <el-select 
                  class="vop_compare"
                  v-model="compare" 
                  placeholder="请选择"
                  clearable
                  >
                  <el-option
                  label="大于"
                  value="大于">  
                  </el-option>
                  <el-option
                  label="等于"
                  value="等于">  
                  </el-option>
                  <el-option
                  label="小于"
                  value="小于">  
                  </el-option>
                  <el-option
                  label="包含"
                  value="包含">  
                  </el-option>
                  <el-option
                  label="不包含"
                  value="不包含">  
                  </el-option>
              </el-select>
                <!-- ************** -->
               <el-select 
                  placeholder="请选择"
                  clearable
                  v-model="selectInfo"
                  >
                  <el-option
                  label="请选择"
                  value="请选择">  
                  </el-option>
              </el-select>
              </div>

              </div>
              <!-- ********** -->
              <nav
              @click="ruleCount ++"
              ><span>+增加规则属性</span></nav>
              <!-- ***** -->
              <aside>
                <i>*</i>
                <span>是否下发</span>
                <el-radio v-model="isIssus" :label="true">是</el-radio>
                <el-radio v-model="isIssus" :label="false">否</el-radio>  
              </aside>
            </div>
          </el-tab-pane>
    </el-tabs>
    </div>
    <!-- ******* -->

    <div v-show="isIssus">
    <!-- 下发配置 -->
    <div class="vop_issue_config">
     <header><span><i>*</i>下发配置</span></header>
     <ul>
       <li>
         <span><i>*</i>下发平台</span>
         <div>
           <template>
            <el-radio v-model="issuePlatform" label="CDC">CDC</el-radio>
            <el-radio v-model="issuePlatform" label="SOP">SOP</el-radio>
          </template>
         </div>
        </li>
       <li>
         <span><i>*</i>下发周期配置</span>
         <div>
           <p>
              <el-radio v-model="issueMode" label="实时下发">实时下发</el-radio>
           </p>
           <nav>
             <div>
              <el-radio v-model="issueMode" label="时间间隔下发">时间间隔下发</el-radio>
              <el-input
              placeholder="请输入间隔时间"
              v-model="distributionConfigTimePeriod"
              :disabled = "issueMode === '时间间隔下发' ? false : true"
              ></el-input>
             </div>
             <div>
              <el-radio v-model="issueMode" label="固定时间下发">固定时间下发</el-radio>
              <el-time-picker
                :disabled = "issueMode === '固定时间下发' ? false : true"
                :picker-options="{
                selectableRange: '0:0:00 - 23:59:59'
                }"
                v-model="distributionConfigTime"
                placeholder="选择开始时间点">
              </el-time-picker>
             </div>
           </nav>
         </div>
        </li>
       <li>
         <span><i>*</i>重复线索下发限制</span>
         <div>
           <el-radio  label="不限" v-model="repeatClueLimit">不限</el-radio>
           <el-radio  label="重复间隔时间" v-model="repeatClueLimit">重复间隔时间</el-radio>
           <el-input 
           placeholder="请输入间隔时间" 
           v-model="repeatClueLimit"
           :disabled = "repeatClueLimit === '重复间隔时间' ? false : true"
           ></el-input>
         </div>
        </li>
     </ul>
    </div>
    <!-- 经销商分配规则配置 -->
    <div class="vop_distribution_config">
     <header><span><i>*</i>经销商分配规则配置</span></header>
     <div>
       <!-- ********* -->
       <ul>
         <li>
            <el-radio v-model="weight" label="区域内平均分配">区域内平均分配</el-radio>
            <span>(按照A-B-C-A的顺序循环依次进行分配)</span>
         </li>
         <li>
            <el-radio v-model="weight" label="区域内补充分配">区域内补充分配</el-radio>
            <span>(优先分配给区域内线索保留量最少的经销商)</span>
         </li>
         <li>
            <el-radio v-model="weight" label="区域内权重分配">区域内权重分配</el-radio>
            <span>(对同一区域内不同经销商设置不同的分配权重，权重越高 分到的线索越多。)</span>
         </li>
       </ul>
       <!-- ********* -->
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
    </div>
    </div>

    <!-- 页脚 -->
    <footer>
      <div>
        <el-button type="primary">保存并发布</el-button>
        <el-button @click="Object.assign($data, $options.data())">取消</el-button>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name:'addRule',
  data(){
    return{
      // 面包屑信息
      breadcrumb:'',
      // 规则名称
      ruleName:'',
      // 规则描述
      ruleDescribe:'',
      // 线索类型
      threadType:'',
      // 活动名称
      activityName:'',
      // 活动ID
      activityID:'',
      // 来源渠道
      source:'',
      // 产品名称
      product:'',
      // 上报时间
      followTime:'',
      // 时间段
      startDate:'',
      endDate:'',
      activeName: 'first',
      // 同意协议
      agreement:'',
      // 门店意向可否为空
      isStore:'',
      // 选择品牌
      selectBrand:'',
      // 比较符
      compare:'',
      // 选中
      selectInfo:'',
      // 是否下发
      isIssus:true,
      //下发平台
      issuePlatform:'',
      // 下发方式
      issueMode:'',
      // 权重配置
      weight:'',
      // 生效时间
      takeEffectTime:'',
      // 有效期
      temr:'',
      // 下发配置时间段
      distributionConfigTimePeriod:'',
      // 固定时间下发
      distributionConfigTime:'',
      // 重复线索下发限制
      repeatClueLimit:'',
      // 重复间隔时间段
      repeatClueLimitTimePeriod:'',
      // 自定义规则条数
      ruleCount:1,
      // 线索提取规则
      ruleData:[
        {value:'品牌' , label:'品牌'},
        {value:'来源渠道' , label:'来源渠道'},
        {value:'市场活动' , label:'市场活动'},
        {value:'跟进状态' , label:'跟进状态'},
        {value:'创建日期' , label:'创建日期'},
        {value:'所属线索池' , label:'所属线索池'},
        {value:'客户要求' , label:'客户要求'}
      ]
    }
  },
  mounted(){
    this.breadcrumb = decodeURI(this.$route.path.split('/').splice(2))
    this.breadcrumb = this.breadcrumb.split(',')
  },
  watch:{
    startDate(newVal , oldVal){
       if(!newVal) this.endDate = ''
    }
  },

  methods:{
    // 头部面包屑跳转方法
    historyGo(index){
      // 取出path信息 根据点击面包屑的index做出相应跳转
      this.url = decodeURI(this.$route.path).split('/')
      this.url = this.url.splice(1 , index+1)
      let str = ''
      this.url.forEach(item => str += '/' + item)
      this.$router.push(str)
    },
  }
}
</script>
<style lang="scss" scoped>
.vop_rule_addrule{
  font-size:14px;
  // 规则名称 规则描述
  .input_rule {
    margin-top:20px;  
    &>div{
    display: flex;
    align-items: center;
    span{
      display: inline-block;
      width:100px;
      i{color:#e66b5b;margin-right:5px}
    }
    /deep/.el-textarea{
      margin-top:20px;
      width:60%;
      textarea{
        border-radius: 0;
        resize: none;
        height:120px;
      }
    }
  }
  }
  // 常规业务条件配置 自定义条件配置
  /deep/.el-tabs__nav-wrap{
    margin-top:30px;
    background:#b9ced8;
    height:40px;
    .el-tabs__item{
      width:200px;
      text-align: center;
    }
    .is-active{
      background: #49586e;
      color:white;
    }
    .is-top{
      color:white;
    }
  }
  // 常规业务条件配置
  .rule_routine{
    p{
      font-weight: bold;
      padding-left:1%;
    }
    &>div ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width:40%;
        text-align: right;
        margin-top:20px;
        .el-select , .el-input{
          margin-right:25%;
        }
        span{
          margin-right:6%;
        }
      }
    }
    section > ul{
      margin-top:40px;
      display: flex;
      .vop_time_slot{
        display: flex;
        align-items: center;
        /deep/.el-input__inner , /deep/.el-date-editor{
          width:150px;
          font-size: 8px;
        }
      }
      li:first-child{
     width:11%;
     text-align: center;
     margin-right:2%;
   }
      li:last-child{
        /deep/.el-date-editor{
          margin-right:6%;
        }
      }
    }
    article{
      margin-top:40px;
      div{
        display: flex;
        margin-bottom:30px;
        span , nav{
          display:inline-block;
          width:30%;
          text-align: left;
        }
        span{
          padding-left:3%;
        }
      }
    }
  }
  // 自定义业务条件配置
  .rule_custom{
    div:first-child{
    padding-left:30px;
    p{
      font-weight:bold;
    }
    b{
      margin:15px 0 20px 0;
      display: block;
      font-size:14px;
      font-weight:bold;
    }
    &>div{
      span{
        margin-right:15px;
      }
         /deep/.el-select{
          margin-right: 30px;
        }
    }
    }
    &>nav{
      margin:10px 0;
      span{
        color:#498bd5;
        font-size:12px;
        margin-left:50%;
        transform:translateX(-50%);
      }
    }
    &>div:last-of-type{
      border-top:2px solid #d7dbdf;
      padding: 10px;
      span{
        margin-left:20px
      }
    }
  }
  aside{
    padding:0 0 30px 5px;
    span{margin:0 10% 0 5px}
  }
  i{color:#e66b5b;margin-right:3px}
  header{
      height:40px;
      background:#b9ced8;
      line-height: 40px;
      padding-left:5px;
    }
  // 下发配置
  .vop_issue_config{
    ul > li{
      display:flex;
      margin:15px 0;
      span{
        display:inline-block;
        width: 200px;
        margin-left:5px;
      }
      nav{
        display: flex;
        margin:10px 0;
        &>div{
          margin-right:100px;
        }
      }
      &:last-child{
        display: flex;
        align-items: center;
      }
    }
  }
  .vop_distribution_config{
    &>div{
      padding-left:20px;
    }
    li{
      margin:10px 0;
    }
    ul{
      margin:20px 0 60px 0;
    }
    ul:last-child{
      display:flex;
      span{
        margin-right:80px;
        display:inline-block;
      }
      li div{
        margin-top:15px;
      }
    }
  }
  // 页脚
  footer{
    margin-bottom:50px;
    &>div{
    margin-left:50%;
    transform: translateX(-50%);
    text-align: center;
    /deep/.el-button{
      width:150px;
    }
    }

  }

}
</style>