<template>
  <div class="vop_twoLeve_tab_con">

 
  <div class="vop_twoLeve_tab">
    <router-link
    v-for="(item  , index) of routeInfo"
    :key ="index"
    :to="{path:item.to , params:item.to}"
    tag="div"
    active-class="active"
    >{{item.name}}</router-link>
  </div>
   </div>
</template>

<script>
export default {
  name:'twoLevelTab',
  props:{
    routeInfo:{
      type:Array,
      required:true,
    }
  },
  created(){
     this.$router.push({path:decodeURI(this.$route.path)})
  },
}
</script>

<style lang="scss" scoped>
.vop_twoLeve_tab_con{
    width:100%;
    border-bottom:3px solid #b8cdd8;
    position:relative;
    height:30px;
  }
  .vop_twoLeve_tab{
    position:absolute;
    bottom:-3px;
    display: flex;
    div{
      min-width:146px;
      text-align: center;
     margin-left:20px;
      font-size:17px;
      line-height: 39px;
      color:#333333;
    }
    .active{
      border-bottom: 4px solid #00bfbf;
      color:black;
    }
  }
</style>