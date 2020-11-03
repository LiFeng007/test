<template>
  <div class="vop_header">
      <div class="vop_logo">
        <img src="../assets/image/icon1.png" alt="">
        <div>
          <span>WELTMEISTER</span>
          <b>威马汽车</b>
        </div>
        <img src="../assets/image/u171.svg" alt="">
      </div>

      <div class="vop_nav">
        <router-link 
        tag="div"
        to="/rule"
        active-class="active"
        >规则管理</router-link>
        <router-link 
        tag="div"
        to="/thread"
        active-class="active"
        >线索管理</router-link>
        <router-link 
        tag="div"
        to="/thread_monitoring"
        active-class="active"
        >线索流转监控</router-link>
      </div>

      <div class="vop_user">
        <img src="../assets/image/u167.svg" alt=""/>
        <img src="../assets/image/u166.svg" alt=""/>
        <div>
          <p>username ▽</p>
        <ul class="user_operation">
          <li>修改密码</li>
          <li>退出</li>
        </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  

}
</script>

<style lang="scss" scoped>
 .vop_header{
   display: flex;
   width: 100%;
    left: 0px;
    top: 0px;
    height: 40px;
    background: inherit;
    background-color: rgba(52, 67, 86, 1);
    border: none;
    border-radius: 0px;
    box-shadow: none;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #FFFFFF;
    text-align: left;
  /****logo*******/ 
  .vop_logo{
    padding:6px 0 8px 0 ;
    display: flex;
    position: relative;
    div{
      width:87px;
      text-align: center;
      font-size:12px;
      span , b{display: block}
    };
    img:first-child{
      width: 28px;
      height:28px;
      margin:0 13px 0 20px;
      }
    img:last-child{
          position: absolute;
          border-width: 0px;
          left: 133px;
          top: 18px;
          width: 26px;
          height: 6px;
          transform: rotateZ(90deg);
    }
  };
  /****一级路由导航*******/ 
  .vop_nav{
    display: flex;
    height:40px;  
    line-height: 40px;
    font-size:20px;
    font-weight:400;
    margin:0 20% 0 20%;
    justify-content: space-around;

    div{
     padding:0 50px;
      text-align: center;
    }
    .active{
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    background: #1e2837;
    transition: all 0.5s;
    }
  }
  /****用户操作*****/  
   .vop_user{
    padding:6px 0 8px 0 ;
    position: relative;
    div{
      float: right;
    }
     img{
       border-width: 0px;
      left: 0px;
      top: 0px;
      width: 17px;
      height: 13px;
      margin:7px 10px 0 0;
     }
     img:last-child{
      width: 15px;
      height: 15px;
     }
     p{
       background:#99a1aa;
       padding:0 3px;
       height:27px;
       line-height: 27px;
     }
     p:hover{
       background: #333333;
       font-weight: bold;
       transition: all 0.5s;
     }
     p:hover+.user_operation{
        display: block;
     }
     ul{
       &:hover{
         display: block;
       };
       display: none;
       position: absolute;
       li{
         width:94px;
         text-align: center;
         background: #666666;
         padding:5px 0;
         border:1px solid #777777 ;
         font-size:14px;
       }
       li:hover{
         background:#333333;
         font-weight:bold;
          transition: all 0.5s;

       }
     }
   }
 }
</style>