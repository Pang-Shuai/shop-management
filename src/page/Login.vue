<template>
  <div class="login-box">
    <el-form
      :label-position="labelPosition"
      ref="form"
      :model="form"
      label-width="80px"
      class="login-form"
    >
      <el-form-item label="用户名" placeholder="请输入用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" placeholder="请输入密码">
        <el-input v-model="form.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "left",
      form: {
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({ path: "/index" });
      console.log("登录成功!");
    }
  }
};
</script>

<style>
.login-box {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.login-box .login-form {
  max-width: 300px;
  max-height: 300px;
}
</style>
