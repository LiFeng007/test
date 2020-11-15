<template>
  <div class="vop_header_info">
     <span>
       {{text}}
     </span>
     <div>
        <el-button
      v-if="ifExport"
      size="small"
      type="primary"
      @click="$emit('export' , $event)"
      >{{ExportText}}</el-button>
      <el-button
      v-if="ifEetrieval"
      size="small"
      @click="drawer = true"
      style="border:1px solid gray"
      >{{retrievalText}}</el-button>
     </div>
     <!-- 高级检索 -->
     <el-drawer
        title="高级检索"
        :visible.sync="drawer"
        :direction="direction"
        :with-header="false"
        destroy-on-close
        >
        <p class="vop_drawer_titel">
          <span>高级检索</span>
          <el-input 
          placeholder="请输入"
          v-model="advancedSearch"
          ></el-input>
        </p>
        <ul>
          <!-- ***** -->
          <li>
            <span>线索ID</span>
            <el-input
            v-model="leadsId"
            placeholder='批量查询时以","隔开'
            ></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>线索类型</span>
            <el-select v-model="leadsType" placeholder="请选择" filterable clearable	>
              <el-option
                label="白名单线索"
                value="白名单线索">
              </el-option>
              <el-option
                label="黑名单线索"
                value="黑名单线索">
              </el-option>
            </el-select>
          </li>
          <!-- ***** -->
          <li>
            <span>VOP ID</span>
            <el-input v-model="vopId" placeholder='批量查询时以","隔开'></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>姓名</span>
            <el-input v-model="name" placeholder="模糊匹配"></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>系列名称</span>
            <el-input v-model="seriesName" placeholder="模糊匹配"></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>系列编号</span>
            <el-input v-model="seriesCode" placeholder="模糊匹配"></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>手机号</span>
            <el-input v-model="phone" placeholder='批量查询时以","隔开'></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>推荐人</span>
            <el-input v-model="recommendedBy" placeholder='批量查询时以","隔开'></el-input>
          </li>
          <!-- **** -->
          <li>
            <span>意向省份名称</span>
            <el-input v-model="intentionProvinceName" placeholder='模糊匹配'></el-input>
          </li>
          <!-- **** -->
          <li>
            <span>意向城市名称</span>
            <el-input v-model="intentionCityName" placeholder='模糊匹配'></el-input>
          </li>
           <!-- **** -->
          <li>
            <div>
              <span>意向区县名称</span>
              <el-checkbox v-model="isQueryNull">是否查空值</el-checkbox>  
            </div>
            <el-input v-model="intentionCountyName" placeholder='模糊匹配'></el-input>
          </li>
          <!-- **** -->
          <li>
            <span>意向SMP编号</span>
            <el-input v-model="intentionStoreSmpNumber" placeholder='精确匹配'></el-input>
          </li>
          <!-- **** -->
          <li>
            <span>意向SMP名称</span>
            <el-input v-model="intentionStoreSmpName" placeholder='模糊匹配'></el-input>
          </li>
          <!-- **** -->
          <li>
            <span>意向车型名称</span>
            <el-input v-model="intentionCarTypeName" placeholder='模糊匹配'></el-input>
          </li>
          <!-- **** -->
          <li>
            <span>最近线索下发日志编号</span>
            <el-input v-model="leadsIssueCode" placeholder='模糊匹配'></el-input>
          </li>
          <!-- **** -->
          <li>
            <span>意向内饰</span>
            <el-input v-model="intentionTrim" placeholder='模糊匹配'></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>意向外饰</span>
            <el-input v-model="intentionExterior" placeholder='模糊匹配'></el-input>
          </li>
            <!-- ***** -->
          <li>
            <span>购车预算</span>
            <el-select v-model="buyCarBudget" placeholder="请选择" filterable clearable	>
              <el-option
                label="￥1"
                value="￥1">
              </el-option>
              <el-option
                label="$1"
                value="$1">
              </el-option>
            </el-select>
          </li>
           <!-- ***** -->
          <li>
            <span>潜客等级</span>
            <el-select v-model="potentialCustomersGrade" placeholder="请选择" filterable clearable	>
              <el-option
                label="一级潜客"
                value="一级潜客">
              </el-option>
              <el-option
                label="二级潜客"
                value="二级潜客">
              </el-option>
            </el-select>
          </li>
          <!-- ***** -->
          <li>
            <span>来源媒体名称</span>
            <el-input v-model="sourceMediaName" placeholder="模糊匹配"></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>媒体产品名称</span>
            <el-input v-model="mediaProductName" placeholder="模糊匹配"></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>活动名称</span>
            <el-input v-model="sourceActivityName" placeholder="模糊匹配"></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>活动编号</span>
            <el-input v-model="activityCode" placeholder="模糊匹配"></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>留资时间大于等于</span>
             <el-date-picker
                v-model="leaveMoneyTimeGreater"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
          </li>
          <!-- ***** -->
          <li>
            <span>留资时间小于等于</span>
             <el-date-picker
                v-model="leaveMoneyTimeLess"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
          </li>
           <!-- ***** -->
          <li>
            <span>上报时间大于等于</span>
             <el-date-picker
                v-model="reportTimeGreater"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
          </li>
           <!-- ***** -->
          <li>
            <span>上报时间小于等于</span>
             <el-date-picker
                v-model="reportTimeLess"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
          </li>
          <!-- ***** -->
          <li>
            <span>平台类型</span>
            <el-select v-model="platformType" placeholder="请选择" filterable clearable	>
              <el-option
                label="APP"
                value="APP">
              </el-option>
              <el-option
                label="门店"
                value="门店">
              </el-option>
            </el-select>
          </li>
          <!-- ***** -->
          <li>
            <span>平台编码</span>
            <el-input v-model="platformCode" placeholder="精确匹配"></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>平台名称</span>
            <el-input v-model="platformName" placeholder="精确匹配"></el-input>
          </li>
           <!-- ***** -->
          <li>
            <span>预约试驾日期大于等于</span>
             <el-date-picker
                v-model="testDriveTimeGreater"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
          </li>
           <!-- ***** -->
          <li>
            <span>预约试驾日期小于等于</span>
             <el-date-picker
                v-model="testDriveTimeLess"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
          </li>
          <!-- ***** -->
          <li>
            <span>预约时间时间段</span>
            <el-select v-model="makeAnAppointmentTimeSlot" placeholder="请选择" filterable clearable	>
              <el-option
                label="8:00"
                value="10:00">
              </el-option>
              <el-option
                label="10:00"
                value="12:00">
              </el-option>
            </el-select>
          </li>
          <!-- ****** -->
          <li>
            <span>备注</span>
            <el-input v-model="leadsRemark" placeholder="模糊匹配"></el-input>
          </li>
          <!-- ****** -->
          <li>
            <span>落地页连接</span>
            <el-input v-model="urlConnet" placeholder="模糊匹配"></el-input>
          </li>
            <!-- ***** -->
          <li>
            <span>是否勾选同意威马用户注册协议</span>
            <el-select v-model="isAgreement" placeholder="请选择" filterable clearable	>
              <el-option
                label="是"
                value="是">
              </el-option>
              <el-option
                label="否"
                value="否">
              </el-option>
            </el-select>
          </li>
          <!-- ***** -->
          <li>
            <span>是否通过手机验证码验证</span>
            <el-select v-model="isPhoneVerification" placeholder="请选择" filterable clearable	>
              <el-option
                label="是"
                value="是">
              </el-option>
              <el-option
                label="否"
                value="否">
              </el-option>
            </el-select>
          </li>
          <!-- ****** -->
          <li>
            <span>触点门店编号</span>
            <el-input v-model="contactStoreCode" placeholder="请选择"></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>线索数据来源</span>
            <el-select v-model="leadssource" placeholder="请选择" filterable clearable	>
              <el-option
                label="门店"
                value="门店">
              </el-option>
              <el-option
                label="400客服"
                value="400客服">
              </el-option>
            </el-select>
          </li>
            <!-- ***** -->
          <li>
            <span>是否黑名单</span>
            <el-select v-model="isMobList" placeholder="请选择" filterable clearable	>
              <el-option
                label="是"
                value="是">
              </el-option>
              <el-option
                label="否"
                value="否">
              </el-option>
            </el-select>
          </li>
          <!-- ***** -->
          <li>
            <span>活动业务类型</span>
            <el-select v-model="activityType" placeholder="请选择" filterable clearable	>
              <el-option
                label="类型一"
                value="类型一">
              </el-option>
              <el-option
                label="类型二"
                value="类型二">
              </el-option>
            </el-select>
          </li>
          <!-- ***** -->
          <li>
            <span>活动对接方式</span>
            <el-select v-model="activityDockingType" placeholder="请选择" filterable clearable	>
              <el-option
                label="方式一"
                value="方式一">
              </el-option>
              <el-option
                label="方式二"
                value="方式二">
              </el-option>
            </el-select>
          </li>
           <!-- ***** -->
          <li>
            <span>活动开始时间大于等于</span>
            <el-date-picker
                v-model="activityStartTimeGreater"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </li>
          <!-- ***** -->
          <li>
            <span>活动开始时间小于等于</span>
            <el-date-picker
                v-model="activityStartTimeLess"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </li>
          <!-- ***** -->
          <li>
            <span>活动结束时间大于等于</span>
            <el-date-picker
                v-model="activityEndTimeGreater"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </li>
          <!-- ***** -->
          <li>
            <span>活动结束时间小于等于</span>
            <el-date-picker
                v-model="activityEndTimeLess"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </li>
          <!-- ***** -->
          <li>
            <span>活动业务方</span>
            <el-select v-model="activityBusinesSide" placeholder="请选择" filterable clearable	>
              <el-option
                label="苏州姑苏区威马店"
                value="苏州姑苏区威马店">
              </el-option>
              <el-option
                label="苏州无锡威马店"
                value="苏州无锡威马店">
              </el-option>
            </el-select>
          </li>
           <!-- ***** -->
          <li>
            <span>活动业务部门</span>
            <el-select v-model="activityBusinessDepartment" placeholder="请选择" filterable clearable	>
              <el-option
                label="苏州姑苏区威马店"
                value="苏州姑苏区威马店">
              </el-option>
              <el-option
                label="苏州无锡威马店"
                value="苏州无锡威马店">
              </el-option>
            </el-select>
          </li>
          <!-- ******** -->
          <li>
            <span>活动联系人</span>
            <el-input v-model="activityPerson" placeholder="模糊匹配"></el-input>
          </li>
          <!-- ******** -->
          <li>
            <span>活动创建人</span>
            <el-input v-model="activityFounder" placeholder="模糊匹配"></el-input>
          </li>
          <!-- ***** -->
          <li>
            <span>活动创建时间大于等于</span>
            <el-date-picker
                v-model="activityCreationTimeGreater"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </li>
          <!-- ***** -->
          <li>
            <span>活动创建时间小于等于</span>
            <el-date-picker
                v-model="activityCreationTimeLess"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </li>
          <!-- ***** -->
          <li>
            <span>活动状态</span>
            <el-select v-model="activityState" placeholder="请选择" filterable clearable	>
              <el-option
                label="进行中"
                value="进行中">
              </el-option>
              <el-option
                label="已结束"
                value="已结束">
              </el-option>
            </el-select>
          </li>
          <!-- ***** -->
          <li>
            <span>是否有商业费用</span>
            <el-select v-model="isBusinessExpenses" placeholder="请选择" filterable clearable	>
              <el-option
                label="是"
                value="是">
              </el-option>
              <el-option
                label="否"
                value="否">
              </el-option>
            </el-select>
          </li>
          <!-- ******** -->
          <li>
            <span>财务审批编号</span>
            <el-input v-model="approvalNumber" placeholder="精确匹配"></el-input>
          </li>
          <!-- ******** -->
          <li>
            <span>是否发放权益</span>
            <el-select v-model="isGrant" placeholder="请选择" filterable clearable	>
              <el-option
                label="是"
                value="是">
              </el-option>
              <el-option
                label="否"
                value="否">
              </el-option>
            </el-select>
          </li>
           <!-- ******** -->
          <li>
            <span>业务评级</span>
            <el-select v-model="businessEvaluation" placeholder="请选择" filterable clearable	>
              <el-option
                label="A"
                value="A">
              </el-option>
              <el-option
                label="B"
                value="B">
              </el-option>
              <el-option
                label="C"
                value="C">
              </el-option>
              <el-option
                label="D"
                value="D">
              </el-option>
            </el-select>
          </li>
           <!-- ******** -->
          <li>
            <span>是否完成授权</span>
            <el-select v-model="isCompleteAuthorization" placeholder="请选择" filterable clearable	>
              <el-option
                label="是"
                value="是">
              </el-option>
              <el-option
                label="否"
                value="否">
              </el-option>
            </el-select>
          </li>
          <!-- ******** -->
          <li>
            <span>线索状态</span>
            <el-select v-model="leadsState" placeholder="请选择" filterable clearable	>
              <el-option
                label="有效线索"
                value="有效线索">
              </el-option>
              <el-option
                label="无效线索"
                value="无效线索">
              </el-option>
            </el-select>
          </li>
          <!-- ******** -->
          <li>
            <span>白名单分组</span>
            <el-select v-model="whiteList" placeholder="请选择" filterable clearable	>
              <el-option
                label="威马员工"
                value="威马员工">
              </el-option>
              <el-option
                label="VIP"
                value="VIP">
              </el-option>
            </el-select>
          </li>
        </ul>
        <nav>
          <el-button @click="drawer = false">取消</el-button>
          <el-button type="primary">确定</el-button>
          <el-button @click="reset">重置</el-button>
          <el-button type="primary">条件导出</el-button>
        </nav>
      </el-drawer>

      <!-- 弹出框 -->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="reset">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  props:{
    text:{
      type:String,
      required:true,
    },
    ifExport:{
      type:Boolean,
      default:true
    },
    ifEetrieval:{
      type:Boolean,
      default:true
    },
    ExportText:{
      type:String,
      default:'导出',
    },
    retrievalText:{
      type:String,
      default:'高级检索',
    },
  },
  data(){
    return{
      dialogVisible:false,
      direction: 'rtl',
      drawer:false,
      // 高级检索数据
      advancedSearch:'',
      leadsId:'',// 线索ID
      leadsType:'',// 线索类型
      vopId:'',// VOP ID 
      name:'',// 姓名
      seriesName:'',// 系列名称
      seriesCode:'',// 系列编号
      phone:'',// 手机号
      recommendedBy:'',// 推荐人
      intentionProvinceName:'',// 意向省份名称
      intentionCityName:'',// 意向城市名称
      intentionCountyName:'',// 意向区县名称
      isQueryNull:'',//是否查空值
      intentionStoreSmpNumber:'',// 意向SMP编号
      intentionStoreSmpName:'',// 意向SMP名称
      intentionCarTypeName:'',// 意向车型名称
      leadsIssueCode:'',// 最近线索下发日志编号
      intentionTrim:'',// 意向内饰
      intentionExterior:'',// 意向外饰
      buyCarBudget:'',// 购车预算
      potentialCustomersGrade:'',// 潜客等级
      sourceMediaName:'',// 来源媒体名称
      mediaProductName:'',// 媒体名称产品
      sourceActivityName:'',// 活动名称
      activityCode:'',// 活动编号
      leaveMoneyTimeGreater:'',// 留资时间大于等于
      leaveMoneyTimeLess:'',// 留资时间小于等于
      reportTimeGreater:'',// 上报时间大于等于
      reportTimeLess:'',// 上报时间小于等于
      platformType:'',// 平台类型
      platformCode:'',// 平台编码
      platformName:'',// 平台名称
      testDriveTimeGreater:'',// 预约试驾日期大于等于
      testDriveTimeLess:'',// 预约试驾日期小于等于
      makeAnAppointmentTimeSlot:'',// 预约时间时间段
      leadsRemark:'',// 备注
      urlConnet:'',// 落地页连接
      isAgreement:'',// 是否勾选同一威马用户注册协议
      isPhoneVerification:'',// 是否通过手机验证码验证
      contactStoreCode:'',// 触点门店编号
      leadssource:'',// 线索数据来源
      isMobList:'',// 是否黑名单
      activityType:'',// 活动业务类型
      activityDockingType:'',// 活动对接方式
      activityStartTimeGreater:'',// 活动开始时间大于等于
      activityStartTimeLess:'',// 活动开始时间小于等于
      activityEndTimeGreater:'',// 活动结束时间大于等于
      activityEndTimeLess:'',// 活动结束时间小于等于
      activityBusinesSide:'',// 活动业务方
      activityBusinessDepartment:'',// 活动业务部门
      activityPerson:'',// 活动联系人
      activityFounder:'',// 活动创建人
      activityCreationTimeGreater:'',// 活动创建时间大于等于
      activityCreationTimeLess:'',// 活动创建时间小于等于
      activityState:'',// 活动状态 
      isBusinessExpenses:'',// 是否有商业费用
      approvalNumber:'',// 财务审批编号
      isGrant:'',// 是否发放权益
      businessEvaluation:'',// 业务评价
      isCompleteAuthorization:'',// 是否完成授权
      leadsState:'',// 线索状态
      whiteList:'',// 白名单分组

    }
  },
  methods:{
    // 重置
    reset(){
      this.$confirm('确认重置?')
       .then(() => {
         this.$message({message: '重置成功',type: 'success'})
         Object.assign(this.$data, this.$options.data())
       })
    }
  },
  watch:{
   
  }
}
</script>

<style lang="scss" scoped>
    .el-button--small{
      width:90px;
    }
    span{
    font-family: 'PingFangSC-Medium', 'PingFang SC Medium', 'PingFang SC';
    font-weight: 500;
    text-decoration: none;
    }
    .vop_header_info{
      margin:10px 0;
      display: flex;
      justify-content: space-between;
    }
    /deep/.el-drawer{
      p{
        padding-top:10px;
        /deep/.el-input{
          width:130px;
        }
        /deep/.el-input__inner{
          height:30px;
        }
        span{
          margin:0 70px 0 15px;
        }
      }
      width:320px !important;
      // text-align: center;
      overflow: auto;
      position:relative;
      left:calc(100% - 320px);
      .vop_drawer_titel{
        position:fixed;
        top:0;
        background:white;
        z-index:2;
        }
        ul{
          // text-align: center;
          margin: 45px 0 60px 0;
          /deep/.el-checkbox{
            margin-left:59px;
          }
          /deep/.el-input--prefix{
            width:232px;
          }
          li{
            margin-left:15px;
            display:flex;
            flex-direction: column;
            margin-top:15px;
            font-size:13px;
            span{
              margin-bottom: 5px;
            }
          }
        }
        nav{
          position:fixed;
          bottom:0;
          background:white;
          z-index: 2;
          width:320px;
          text-align: center;
          padding:15px 8px;
          /deep/.el-button{
            height: 20px;
            font-size: 12px;
            padding: 10px 10px;
            line-height: 0;
          }
        }
    }
</style>