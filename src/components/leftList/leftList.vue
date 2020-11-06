<template>
  <div class="vop_leftList">
   <ul>
      <router-link 
    
    tag="li"
    v-for="(item) of list"
    :key="item.id"
    :to="{name:item.name}"
    active-class="router-link-active"
    >{{item.to}}</router-link>
    
   </ul>
  </div>
</template>
<script>
export default {
  props:{
    list:{
      type:Array,
      required:true
    },
  },
  data(){
    return{}
  },
  methods:{
  }
}
</script>
<style lang="scss" scoped>
    .vop_leftList{
      height:100%;
      ul{
        width:230px;
      background:#d7dbdf;
      height:calc(100% - 55px);
      text-align: center;
      padding-top:55px;
      li{
        padding:18px 0;
        color:white;
        font:14px/14px '';
        &:hover{
        border: 1px solid #797979;
        background:#49586e;
        transition: all 0.5s;
        }
      }
      .router-link-active{
        border: 1px solid #797979;
        background:#49586e;
        transition: all 0.5s;
      }
      }
    }
</style>
