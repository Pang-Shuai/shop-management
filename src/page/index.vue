
<template>
  <el-container style="height: 100vh">
    <el-aside width="250px">
      <Sidebar></Sidebar>
    </el-aside>
    <el-container>
      <Head></Head>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
// 导入组件
import Head from "../components/Head";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
export default {
  name: "index",
  components: {
    Head,
    Sidebar,
    Footer
  }
};
</script>
<!-- 样式代码 -->
<style>
* {
  margin: 0;
  padding: 0;
}
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}
/* 这是侧边栏 */
.el-aside {
  display: block;
  position: relative;
  height: 100vh;
  overflow-y: hidden;
}

.el-main {
  height: 100vh;
  color: #333;
  /* overflow-y: hidden; */
}
</style>
