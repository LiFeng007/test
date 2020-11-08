<template>
  <div class="vop_thread_detail">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item
  v-for="(item , index) in breadcrumb"
  :key="index"
  >
  <span
   @click="index !== breadcrumb.length-1 ? historyGo() : ''"
  >{{item}}</span>
  </el-breadcrumb-item>
</el-breadcrumb>
  <!-- 主内容 -->
  <div  class="vop_thread_detail_main">
  <el-collapse 
  v-model="activeNames" 
  @change="handleChange"
  >
  <!-- 基本信息 -->
  <el-collapse-item title="基本信息" name="1" class="basicionInfo">
    <div class="vop_detail_basicInfo">
     <ul>
       <li>
         <span>线索ID:</span>
         <span>{{basicInfo.clueId}}</span>
       </li>
       <li>
         <span>线索类型:</span>
         <span>{{basicInfo.clueType}}</span>
       </li>
       <li>
         <span>来源渠道:</span>
         <span>{{basicInfo.channel}}</span>
       </li>
       <li>
         <span>业务评级:</span>
         <span>{{basicInfo.businessGrade}}</span>
       </li>
     </ul>
     <ul>
       <li>
         <span>VOP ID:</span>
         <span>{{basicInfo.vid}}</span>
       </li>
       <li>
         <span>姓名:</span>
         <span>{{basicInfo.name}}</span>
       </li>
       <li>
         <span>手机号:</span>
         <span>{{basicInfo.phone}}</span>
       </li>
       <li>
         <span>是否完成授权:</span>
         <span>{{basicInfo.isAuthorize}}</span>
       </li>
     </ul>
     <div>
       <span>归属经销商:</span>
       <span>{{basicInfo.agent}}</span>
       <button @click="dialogVisible = true">修改</button>
     </div>
     <div>
       <span>上报时间:</span>
       <span>{{basicInfo.followTime}}</span>
     </div>
     <div>
       <span>线索备注:</span>
       <span>{{basicInfo.marks}}</span>
     </div>
    </div>
  </el-collapse-item>
  <!-- 意向信息 -->
  <el-collapse-item title="意向信息" name="2" class="intentionInfo">
    <div class="vop_detail_intentionInfo">
      <ul>
      <li>
        <span>意向省份:</span>
        <span>{{intention.intentionProvice}}</span>
      </li>
      <li>
        <span>意向城市:</span>
        <span>{{intention.intentionCity}}</span>
      </li>
      <li>
        <span>意向县区:</span>
        <span>{{intention.intentionArea}}</span>
      </li>
      <li>
        <span>意向门店:</span>
        <span>{{intention.intentionSMP}}</span>
      </li>
      <li>
        <span>意向车系:</span>
        <span>{{intention.intentionCardStyle}}</span>
      </li>
      <li>
        <span>意向车型:</span>
        <span>{{intention.intentionCarType}}</span>
      </li>
      <li>
        <span>意向车型颜色:</span>
        <span>{{intention.intentionCarColor}}</span>
      </li>
      <li>
        <span>意向内饰:</span>
        <span>{{intention.intentionInterior}}</span>
      </li>
      <li>
        <span>意向外饰:</span>
        <span>{{intention.intentionExteriorDecoration}}</span>
      </li>
      <li>
        <span>购车预算:</span>
        <span>{{intention.carPurchaseBudget}}</span>
      </li>
      <li>
        <span>预计购车时间:</span>
        <span>{{intention.estimatedPurchaseTime}}</span>
      </li>
    </ul>
    </div>
  </el-collapse-item>
  <!-- 试驾信息 -->
  <el-collapse-item title="试驾信息" name="3" class="testDriveInfo">
   <div class="vop_detail_testDriveInfo">
      <ul>
      <li>
        <span>试驾到店ID:</span>
        <span>{{testDriveInfo.test_drive_id}}</span>
      </li>
      <li>
        <span>试驾门店名称:</span>
        <span>字段待定</span>
      </li>
      <li>
        <span>试驾人:</span>
        <span>{{testDriveInfo.testDriver}}</span>
      </li>
      <li>
        <span>试驾人联系方式:</span>
        <span>{{testDriveInfo.testDriverPhone}}</span>
      </li>
      <li>
        <span>试驾车系名称:</span>
        <span>{{testDriveInfo.intentionCardStyle}}</span>
      </li>
      <li>
        <span>试驾车型名称:</span>
        <span>{{testDriveInfo.testDriverCarType}}</span>
      </li>
      <li>
        <span>服务大使名称:</span>
        <span>{{testDriveInfo.servicePeo}}</span>
      </li>
    </ul>
    <p>
      <span>车型快速评价:</span>
      <span>{{testDriveInfo.carTypeFastDesc}}</span>
    </p>
    <p>
      <span>车型文字描述:</span>
      <span>{{testDriveInfo.carTypeTxtDesc}}</span>
    </p>
    <ul>
      <li>
        <span>动作发生时间:</span>
        <span>{{testDriveInfo.happenTime}}</span>
      </li>
      <li>
        <span>试驾到店时间:</span>
        <span>{{testDriveInfo.testDriverTime}}</span>
      </li>
      <li>
        <span>评价时间:</span>
        <span>{{testDriveInfo.evaluationTime}}</span>
      </li>
    </ul>
   </div>
  </el-collapse-item>
  <el-collapse-item title="跟进信息" name="4" class="followUpInfo">
    <div class="vop_detail_followUpInfo">
    <!-- 外呼跟进记录 -->
   <div class="vop_detail_callFollowUp">
     <nav>外呼跟进记录</nav>
     <ul>
       <li>
         <span>最终外呼记录:</span>
         <span></span>
       </li>
       <li>
         <span>是否下发销售管家:</span>
         <span></span>
       </li>
       <li>
         <span>不下发原因:</span>
         <span></span>
       </li>
     </ul>
     <ul>
       <li>
         <span>跟进时间:</span>
         <span></span>
       </li>
       <li>
         <span>预计购车时间:</span>
         <span></span>
       </li>
       <li>
         <span>预计进店时间:</span>
         <span></span>
       </li>
     </ul>
     <ul>
       <li>
         <span>跟进备注:</span>
         <span></span>
        </li>
     </ul>
   </div>
   <!-- 门店跟进状态 -->
   <div class="vop_detail_callFollowUp">
     <nav>门店跟进记录</nav>
     <ul>
       <li>
         <span>潜客状态:</span>
         <span></span>
       </li>
       <li>
         <span>线索跟进状态:</span>
         <span></span>
       </li>
     </ul>
     <ul>
       <li>
         <span>跟进门店名称:</span>
         <span></span>
       </li>
       <li>
         <span>跟进平台名称:</span>
         <span></span>
       </li>
       <li>
         <span>跟进人名称:</span>
         <span></span>
       </li>
     </ul>
     <ul>
      <li>
         <span>跟进备注:</span>
          <span></span>
      </li>
       </ul>
   </div>
   <!-- 战败信息 -->
   <div class="vop_detail_callFollowUp">
     <nav>战败信息</nav>
     <ul>
       <li>
         <span>SOP战败ID:</span>
         <span>{{defeat.defeatId}}</span>
       </li>
       <li>
         <span>战败经销商名称:</span>
         <span>{{defeat.defeatSellerName}}</span>
       </li>
       <li>
         <span>服务大使:</span>
         <span>{{defeat.serviceAmbassador}}</span>
       </li>
       <li>
         <span>战败类型原因:</span>
         <span>{{defeat.defeatFReasonType}}</span>
       </li>
     </ul>
     <ul>
       <li>
         <span>战败原因:</span>
         <span>{{defeat.defeatFReason}}</span>
       </li>
     </ul>
      <ul>
       <li>
         <span>战败描述:</span>
         <span>{{defeat.defeatDescribe}}</span>
       </li>
     </ul>
     <ul>
       <li>
         <span>动作发生时间:</span>
         <span>{{defeat.happenTime}}</span>
       </li>
       <li>
         <span>战败时间:</span>
         <span>{{defeat.defeatTime}}</span>
       </li>
     </ul>
   </div>
    </div>
  </el-collapse-item>
 
</el-collapse>

<!-- 返回列表页 -->
 <el-button
 class="thread_detail_but"
 @click="backList()"
 >返回列表页</el-button>
  </div>
  
  <!-- 修改归属经销商弹框 -->
  <el-dialog
        title="修改归属经销商"
        :visible.sync="dialogVisible"
        width="30%"
       >
        <p class="vop_detail_alert">
          <span>*</span>归属经销商 
          <input 
          placeholder="请输入归属经销商名称"
          ref="detail_alert"
          @keydown.13="handleClose"
          />
        </p>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleClose">确 定</el-button>
        </span>
      </el-dialog>
  </div>  
</template>

<script>
import * as types from '@/store/types.js'
export default {
  name:'threadInfo',
  data(){
    return{
      breadcrumb:[],
      activeNames: ['1'],
      dialogVisible: false,
      // 基本信息
      basicInfo:{
        clueId:'10017',
        vid:'vop12345678',
        clueType:'活动留资',
        channel:'汽车之家',
        agent:'苏州威马体验店吴江爱情海店',
        followTime:'2020.11.06 15:44',
        marks:'',
        // 业务评级
        businessGrade:'A',
        name:'钢铁侠',
        phone:'86-10086',
        isAuthorize:'是'
      },
      // 意向信息
      intention:{
        intentionProvice:'江苏',
        intentionCity:'苏州',
        intentionArea:'',
        intentionSMP:'苏州威马用户中心相城店',
        intentionCardStyle:'EX5',
        intentionCarType:'EX5-续航加强版',
        intentionCarColor:'石墨黑',
        // 意向内饰
        intentionInterior:'',
        // 意向外饰
        intentionExteriorDecoration:'',
        // 购车预算
        carPurchaseBudget:'',
        // 预计购车时间
        estimatedPurchaseTime:''
      },
      // 试驾信息
      testDriveInfo:{
        test_drive_id:'1107',
        // 试驾人
        testDriver:'',
        testDriverPhone:'',
        testDriverCarType:'EX5-续航加强版',
        intentionCardStyle:'EX5',
        //服务大使名称
        servicePeo:'威马客服小七',
        // 车型快速评价
        carTypeFastDesc:'双厢型小绿不错',
        // 车型文字描述
        carTypeTxtDesc:'',
        // 动作发生时间
        happenTime:'',
        // 试驾到店时间
        testDriverTime:'',
        // 评价时间
        evaluationTime:''
      },
    // 外呼跟进记录
    callFollowUp:{

    },
    // 门店跟进记录
    StoreFollowUp:{

    },
    // 战败信息
    defeat:{
      defeatId:'',
      defeatSellerName:'',
      // 服务大使
      serviceAmbassador:'威马客服007',
      // 战败原因类型
      defeatFReasonType:'人员',
      // 战败原因
      defeatFReason:'销售问题',
      // 战败描述
      defeatDescribe:'',
      // 动作发生时间
      happenTime:'2020-11-07 23:34',
      // 战败时间
      defeatTime:''
    }
    }
  },
  methods:{
    historyGo(){
      this.$router.go(-1)
    },
    backList(){
      this.$router.push({path:decodeURI(this.$route.path).slice(0,decodeURI(this.$route.path).length-5)})
    },
    handleChange(val) {
        // console.log(val);
      },
    //修改经销商归属地信息 
    handleClose() {
        this.$confirm('是否确认修改归属经销商?')
          .then(_ => {
            if(!this.$refs.detail_alert.value){
              this.$message.error('请输入归属经销商');
              return;
            }
            this.dialogVisible = false
            this.basicInfo.agent = this.$refs.detail_alert.value
            this.$refs.detail_alert.value = ""
            // 修改成功后提示信息
            this.$message({
              message: '归属经销商修改成功!',
              type: 'success'
            });
          })
          
      }
  },
  mounted(){
    // 生成面包屑信息
    this.breadcrumb = decodeURI(this.$route.path.split('/').splice(2))
    this.breadcrumb = this.breadcrumb.split(',')
    // 三级路由tab消失
		this.$store.commit(types.UPDATE_ISTHREETAB , false)
  },
  beforeDestroy(){
    // 三级路由tab显示
		this.$store.commit(types.UPDATE_ISTHREETAB , true)
  }
}
</script>
<style lang="scss" scoped>
.vop_thread_detail{
  display: flex;
  height: 100%;
  flex-direction: column;
    .vop_thread_detail_main{
      margin-top:10px;
      flex: 1;
      overflow: auto;
    }
    .thread_detail_but{
      margin:20px 0 30px 50%;
      transform: translateX(-50%);
    }
    // 基本信息 & 意向信息 & 试驾信息 & 外呼跟进记录
    .vop_detail_basicInfo , .vop_detail_intentionInfo , .vop_detail_testDriveInfo , .vop_detail_followUpInfo{
      padding-left: 15px;
      background: #f0f2f5;
      &>div , &>p{
        margin-top:10px;
         &>span:first-child{
             margin-right:15px;
        }
        button{
          border:none;
          background: none;
          color:#169bd5;
          margin: 0 0 20px 20px;
          outline: none;
        }
      }
      ul{
        flex-wrap: wrap;
         display: flex;
         justify-content: start;
         li{
           width:25%;
           margin:10px 0 0px 0;
           &>span:first-child{
             margin-right:15px;
           }
         }
      }
      nav{
        border-bottom: 2px solid #d7d7d7;
      }
    }

    // 弹出框样式
    .vop_detail_alert{
      border-top:2px solid #d7d7d7;
      padding-top:20px;
      span{
        color:red;
        margin-right:5px;
      }
      input{
        margin: 0 0 50px 5px;
        width:250px;
        height:28px;
        outline:none;
        border:1px solid gray;

      }
    }
}

</style>