<template>
  <el-row class="tac heigh-100">
    <el-col :span="24" class="heigh-100">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo heigh-100"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <router-link to="/OrderManagement">
          <el-menu-item index="1">
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
              <el-menu-item index="2-1">查看商品</el-menu-item>
            </router-link>
            <router-link to="/ShelfShop">
              <el-menu-item index="2-2">上架商品</el-menu-item>
            </router-link>
            <router-link to="Classification">
              <el-menu-item index="2-3">设置分类</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <router-link to="/CustomerManagement">
          <el-menu-item index="3">
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
</style>
