<template>
    <div class="de-login">
    <div class="login_main">
    <p>VOP系统</p>
    <el-input 
        class="input"    
        placeholder="username" 
        v-model="username"
        size="small"
        >
        <template slot="prepend">用户名</template>
    </el-input>

    <el-input 
        type="password"
        class="input"    
        placeholder="password" 
        v-model="password"
        size="small"
        >
        <template slot="prepend">密  &nbsp;码</template>
    </el-input>
      <el-button 
      class="button" 
      type="primary"
      @click="login"
      >登 录</el-button>
    </div>
    </div>
</template>
<script lang="ts">

export default {
    data(){
        return{
           username:"",
           password:"", 
        }
    },
    methods:{
        login(){
            let _this = this
            this.$http.post('http://47.116.74.91:3003/users/login', {
                username: this.username,
                password: this.password
            })
            .then(function (response) {
                if(response.data.meat.status === 200) { 
                      _this.$message({
                        message: '登录成功',
                        type: 'success',
                        duration:2000
                    });
                    _this.$router.push('/index')
                }else if(response.data.meat.status === 403){
                     _this.$message({
                        message: '用户名不存在',
                        type: 'warning',
                        duration:2000
                    });
                }else{
                     _this.$message({
                        message: '用户名和密码不匹配',
                        type: 'warning',
                        duration:2000
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
    .de-login{
        background:url('../assets/image/login-bg.jpg') no-repeat;
        height:100%;
        margin:0;
        background-size:cover;
        position:relative;
        
    }
    .login_main{
            position: absolute;
            transform:translateX(-50%) translateY(-50%);
            left:50%;
            top:50%;
            width:400px;
            background:rgba(255 , 255 , 255 , 0.5);
            padding:10px 0 ;
            border-radius: 5px;
            text-align: center;
            
            
        }
        .login_main p{
                color:white;
                font-weight:bold;
                margin-bottom:5px;
            }
        .input{
                width:80%;
                margin-bottom:10px;
            }
            .button{
                width:80%;
                height:20px;
                line-height: 3px;
            }
</style>