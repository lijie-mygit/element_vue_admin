<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="userName">
        <el-input type="text" prefix-icon="el-icon-user-solid" v-model="ruleForm.userName" placeholder="请输入用户名" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" prefix-icon="el-icon-lock" :show-password="true" v-model="ruleForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()" :loading="isSubmiting">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        userName: "",
        password: ""
      },
      isSubmiting:false,
      rules: {
        userName: [{required: true,message: "请输入用户名", trigger: "blur" }],
        password: [{required: true,message: "请输入密码",trigger: "blur"}]
      }
    };
  },
  mounted() {},
  methods: {
    submitForm(){
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.isSubmiting = true;
           this.$router.push('/')
          /* this.axios.post(`admin/sign_in/`,{account:this.ruleForm.account,password:this.ruleForm.password}).then(res=>{
            console.log(res)
            this.isSubmiting = false
            if(res.data){
              if(res.data.error_code!=0){
                this.$message.error(res.data.message);
              }
            }else{
              this.$message.success('登录成功');
              // let time = new Date().getTime();
              AuthAction.setToken(res.token,2);
              // AuthAction.setExpires(time);
               this.$router.push('/')
            }     
          }).catch(err=>{console.log(err);this.isSubmiting = false}) */
        }
      })
    }
  }
};
</script>

<style lang="scss">
.login{
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b;
  background-image: url('../assets/image/bg2.jpg');
  .demo-ruleForm{
    width: 500px;
    position: fixed;
    top: 42%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #ffffff;
    .title{
      font-size: 26px;
    }
    .el-form-item{
      margin-bottom: 30px;
      .el-form-item__content{
        line-height: 46px;
      }
      .el-input__inner{
        height: 46px;
        line-height: 46px;
        border: 1px solid hsla(0,0%,100%,.1);
        background-color: rgba(0, 0, 0, .4);
        color: #ffffff;
      }
      .el-button{
        width: 100%;
      }
    }
  }
}
</style>