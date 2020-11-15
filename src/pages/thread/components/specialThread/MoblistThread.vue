<template>
  <div class="vop_MoblistThread">
    <!-- 组件头部信息 -->
    <Header-info 
     @export="vopExport"
     @retrieval="retrieval"
     ExportText="加入黑名单"
      class="vop_MoblistThread_header"
      text="黑名单潜客线索"
    />
    <!-- 检索信息填写区域 -->
    <Check-info 
    reqMethods="queryMobList"
    @updList = "updList"
    
    />
    <!-- 主内容区 -->
    <div class="vop_serarchList vop_moblist_serarchList">
     <el-table
      height="370"
     :data="testData.length ? testData : tableData "
    >
    <el-table-column
      fixed
      prop="leadsId"
      label="线索ID"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="leadsType"
      label="线索类型"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="VopId"
      label="VOP ID"
      min-width="120">
    </el-table-column>
    
    <el-table-column
      prop="name"
      label="姓名"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="phone"
      label="手机号"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="intentionProvinceName"
      label="意向省份"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="intentionCityName"
      label="意向城市"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="sourceChannelName"
      label="来源渠道"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="platform"
      label="来源平台"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="reportTime"
      label="上报时间"
      min-width="120">
    </el-table-column>
    <el-table-column
      prop="evaluate"
      label="业务评价"
      min-width="120">
    </el-table-column>
    <el-table-column
      prop="isauth"
      label="是否完成授权"
      min-width="120">
    </el-table-column>

    <el-table-column
      prop="remarks"
      label="备注"
      min-width="120">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      min-width="140">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="threadInfo(scope.row.VopId, tableData)"
          type="text"
          size="small">
          查看
        </el-button>
        <el-button
          @click.native.prevent="del(scope.$index, tableData)"
          type="text"
          size="small">
          移出
        </el-button>
        <el-button
          @click.native.prevent="issue(scope.$index, tableData)"
          type="text"
          size="small">
          下发
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
    <Pag-ing 
    :count="40"
    :start="10"
    :end="20"
    />
    <!-- 下发弹出框 -->
    <Issue 
    :dialogVisible="dialogVisible"
    @setdialog-visible="setdialogVisible"
    :vopId="vopId"
    />
    <!-- 添加黑名单弹出框 -->
    <!-- 检索 -->
    <div class="mob_list_retrieval">
      <el-dialog
      title="添加黑名单"
      :visible.sync="dialogVisibleMobToast"
      width="30%"
      @click="dialogVisibleMobToast = false">
      <span><i>*</i> 检索路径</span>
      <div>
        <ul>
          <li>
            <span>VOP ID</span>
            <el-input v-model="MobVopId" placeholder="请输入用户ID"></el-input>
          </li>
          <li>
            <span>手机号</span>
            <el-input v-model="phone" placeholder="请输入用户手机号"></el-input>
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleMobToast = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleMob = true ; dialogVisibleMobToast = false">查 询</el-button>
        <el-button @click="MobVopId = phone = ''">重 置</el-button>
      </span>
    </el-dialog>
    </div>
    <!-- 确认 -->
    <div class="mob_list_confirm">
      <el-dialog
    title="添加黑名单"
    :visible.sync="dialogVisibleMob"
    width="30%"
    >
      <span>用户档案</span>
      <div class="vop_mobil_Popup">
        <div class="mobil_Popup_left">
            <ul>
              <li>
                <span>姓名:</span>
                <span></span>
              </li>
              <li>
                <span>性别:</span>
                <span></span>
              </li>
              <li>
                <span>VOP ID:</span>
                <span></span>
              </li>
              <li>
                <span>是否车主:</span>
                <span></span>
              </li>
              <li>
                <span>联系方式:</span>
                <span></span>
              </li>
              <li>
                <span>线索条目:</span>
                <span></span>
              </li>
            </ul>
        </div>
        <div class="mobil_Popup_right">
            <div>头像</div>
            <el-button type="primary">查看详情</el-button>
        </div>
      </div>
      <div class="mobil_remarks">
            <p>备注信息</p>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="mobil_textarea"
              >
            </el-input>
        </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">确 定</el-button>
        <el-button @click="dialogVisibleMob = false">取 消</el-button>
      </span>
    </el-dialog>
    </div>
  </div>
</template>

<script>
import HeaderInfo from '@/components/headerInfo/headerInfo' 
import CheckInfo from '@/components/checkInfo/checkInfo'
import PagIng from '@/components/paging/paging'
import Issue from '@/components/Issue/issue.vue'

export default {
  name:"MoblistThread",
  data(){
    return{
     vopId:'',
    //  加入黑名单弹出框
     dialogVisibleMobToast:false,
     dialogVisibleMob: false,
    //  下发弹出框
     dialogVisible:false, 
    //  黑名单检索信息
    phone:'',
    MobVopId:'',
    // 加入黑名单备注信息
    mobil_textarea:'',
    testData:'',
      tableData: [
        {
          threadId: '11001',
          date: '2016-05-01',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          platform:'VOP 系统',
          marks:'这是备注信息'
        }, {
          threadId: '11001',
          date: '2016-05-02',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          platform:'VOP 系统',
          marks:'这是备注信息'
        },{
          threadId: '11001',
          date: '2016-05-01',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          platform:'VOP 系统',
          marks:'这是备注信息'
        }, {
          threadId: '11001',
          date: '2016-05-02',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          platform:'VOP 系统',
          marks:'这是备注信息'
        },{
          threadId: '11001',
          date: '2016-05-01',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          platform:'VOP 系统',
          marks:'这是备注信息'
        }, {
          threadId: '11001',
          date: '2016-05-02',
          VopId: '威马007',
          phone: '86-13734656689',
          city: '南京市',
          origin: '门店质询',
          province: "上海市",
          type:'白名单线索',
          name:'小绿',
          evaluate:'一般般~',
          empower:'是',
          platform:'VOP 系统',
          marks:'这是备注信息'
        }
      ]
    }
  },
  methods:{
    // 更新列表
    updList(date){
      this.testData = date
    },
    // 黑名单弹出框显示
    vopExport(){this.dialogVisibleMobToast = true},
    handleClose() {
        this.$confirm('确认加入黑名单?')
        .then(_ => this.dialogVisibleMob = false)
      },
    retrieval(event){
      console.log('选择了高级检索' , event.target)
    },
    // 查看 ==> 详情页面
    threadInfo(vopId){
      // console.log(this.$route.path)
        this.$router.push({path:this.$route.path + '/线索详情', query: { id: vopId }})
    },
    // 移出
    del(index , row){
        this.$confirm('移出此线索, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          row.splice(index , 1) 
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消移出'
          });
        })
    },
    // 下发
     issue(index , rows){
      this.dialogVisible = true
      this.vopId = rows[index].VopId
    },
    setdialogVisible(payload){
      this.dialogVisible = false
    },
  
  },
  // 加入黑名单
  handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
    },
  created(){
  },
  components:{HeaderInfo , CheckInfo ,PagIng ,Issue}
}
</script>

<style lang="scss" scoped>
.vop_MoblistThread{
  height:100%;
  .vop_MoblistThread_header{
    margin-top:15px;
    margin-bottom:10px;
  }
  .vop_serarchList{
    height:59%;
    /deep/.el-table {
      height:100% !important;
    }
    /deep/.el-table__body, /deep/.el-table__footer, /deep/.el-table__header{
      height:100% !important;
    }
  }
  // 加入黑名单弹出框
  // 检索
  .mob_list_retrieval{
     /deep/.el-dialog{
    width:900px !important;
    height:240px;
    /deep/.el-input__inner{
      border:1px solid black;
      height:30px;
      width:190px
    }
    /deep/.el-button{
      width:90px;
      height:32px;
      padding:0;
      line-height: 32px;
    }
    /deep/.el-button--primary{
      background: #169bd5;
    }
      /deep/.el-dialog__body{
      margin-bottom:15px;
      padding:10px 0 0 25px;
      }
      div ul {
        display: flex;
        justify-content: start;
        li{
          margin-right: 10%;
          span{
            margin-right:10px;
          }
        }
      }
      span{
        margin-bottom:10px;
        display: inline-block;
        i{
          color:#e66b5b;
          margin-right:3px 
        }
      }
    }
  }
  // 确认
  .mob_list_confirm{
      /deep/.el-dialog{
    width:900px !important;
    height:400px;
    .vop_mobil_Popup{
      display: flex;
      justify-content: start;
      .mobil_Popup_left{
        width:60%;
        ul{
        display: flex;
        flex-wrap: wrap;
        padding-top: 10px;
        li{
          width:50%;
          margin-top:10px;
        }
        }
      }
      .mobil_Popup_right{
        width: 40%;
        text-align: center;
        &>div:first-child{
          width:75px;
          height:75px;
          border:1px solid gray;
          border-radius: 50%;
          text-align: center;
          line-height: 75px;
          margin-left:50%;
          transform: translateX(-50%);
          margin-bottom:20px
        }
        /deep/.el-button{
          height:26px;
          width:90px;
          font-size:14px;
          padding: 0;
          span{
            width:90px;
            line-height:13px;
            display: inline-block;
          }
        }
    
      }
    }
    /deep/.el-dialog__body{
    margin-bottom:15px;
    padding:25px 0 0 25px;
    }
    .mobil_remarks{
      p{
        margin-bottom:5px;
      };
      /deep/.el-textarea{
        .el-textarea__inner{
        resize: none;
        border-radius: 0;
        border:1px solid black;
        height:80px;
        }
      }
    }
    .el-button--primary{
      background: #169bd5;
    }
    .el-button{
      width:130px;
    }

  }

  }
  }



</style>