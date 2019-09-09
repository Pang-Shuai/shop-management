<template>
  <div class="login-box">
    <el-form :label-position="labelPosition" ref="form" :model="form" label-width="80px">
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
  display: -webkit-box;
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
</style>
