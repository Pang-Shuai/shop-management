<template>
  <el-row class="tac heigh-100">
    <el-col :span="24" class="heigh-100">
      <el-menu
        :default-active="currentMenu"
        class="el-menu-vertical-demo heigh-100"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <router-link to="/OrderManagement">
          <el-menu-item index="/OrderManagement">
            <i class="el-icon-location"></i>
            <span>订单管理</span>
          </el-menu-item>
        </router-link>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">商品管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/ViewShop">
              <el-menu-item index="/ViewShop">查看商品</el-menu-item>
            </router-link>
            <router-link to="/ShelfShop">
              <el-menu-item index="/ShelfShop">添加商品</el-menu-item>
            </router-link>
            <router-link to="Classification">
              <el-menu-item index="/Classification">设置分类</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <router-link to="/CustomerManagement">
          <el-menu-item index="/CustomerManagement">
            <i class="el-icon-setting"></i>
            <span>客户管理</span>
          </el-menu-item>
        </router-link>
        <!-- <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">当日订单</el-menu-item>
            <el-menu-item index="1-2">昨日订单</el-menu-item>
            <el-menu-item index="1-3">当月订单</el-menu-item>
            <el-menu-item index="1-4">上月订单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">客户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">当日客户</el-menu-item>
            <el-menu-item index="3-2">昨日客户</el-menu-item>
            <el-menu-item index="3-3">当月客户</el-menu-item>
          </el-menu-item-group>
        </el-submenu>-->
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      currentMenu: "/OrderManagement"
    };
  },
  created() {
    //进入页面时调用
    this.getUrl();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 获取url
    getUrl() {
      let self = this;
      let currentUrl = window.location.href;
      if (currentUrl.split("#")[1] == "/index") {
        self.currentMenu = "/OrderManagement";
      } else {
        self.currentMenu = currentUrl.split("#")[1];
      }
    }
  }
};
</script>
<style>
.heigh-100 {
  height: 100%;
}
.tac a {
  text-decoration: none;
  color: #fff;
}
/* 不使用滚动条 */
/* ::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
} */
</style>
