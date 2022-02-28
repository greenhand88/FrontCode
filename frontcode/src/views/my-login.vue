<style>
@import url("./login.css");
</style>
<template>
  <div class="container">
    <div class="main">
        <!-- 整个注册盒子 -->
      <div class="loginbox">
          <!-- 左侧的注册盒子 -->
          <div class="loginbox-in">
          <div class="userbox"> 
           <span class="iconfont">&#xe611;</span> 
           <input  class="user" id="user"  v-model="name" placeholder="用户名">
           </div>
          <br>
          <div class="pwdbox">
            <span class="iconfont">&#xe611;</span>
           <input  class="pwd"  id="password" v-model="pwd" type="password"  placeholder="密码">
           </div>
          <br>
          <div class="pwdbox">
            <span class="iconfont">&#xe611;</span>
           <input  class="pwd"  id="re_password"  v-model="repwd" type="password"  placeholder="确认密码">
           </div>
           
           <br>
           <button type="primary"  class="register_btn" @click="register">Register</button>
     </div>
 
        <!-- 右侧的注册盒子 -->
         <div class="background">
            <div class="title">Welcome to WH System Management Center</div>
        </div>

      </div>
    </div>
  </div>
</template>
<style>
    input{
        border: 1px solid #ccc;
        padding: 7px 0px;
        border-radius: 3px;
        padding-left:5px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
    }
    input:focus{
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
</style>