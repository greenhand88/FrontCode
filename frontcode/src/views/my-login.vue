<template>
  <div class="login-container">
    <el-form ref="form"  :rules=rules :model="form" label-width="80px" class="login-form">
      <h2 class="login-title">会员管理系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules:{//定义规则
         username: [
            { required: true, message: '账号不能为空', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
          ],

      }
    };
  },
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        })
     }
     }
};
</script>
<style scoped>
.login-form {
  width: 350px;
  margin: 260px auto;
  background-color: #d0cfd9;
  /* rgb(208, 207, 217,0.8) */
  padding: 25px;
  border-radius: 20px;
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  /* 上一级的上一级采用../../ */
  background: url();
}
.login-title {
  color: #303133;
  text-align: center;
}
</style>