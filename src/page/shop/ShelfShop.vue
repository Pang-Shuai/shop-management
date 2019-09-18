<template>
  <el-row>
    <el-row>
      <BreadCrumbs :message="HierarchicalMenu"></BreadCrumbs>
    </el-row>
    <el-row>
      <Shelf ref="ShelfChild"></Shelf>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="7">
        <el-button type="primary" @click="submitForm()">提交</el-button>
      </el-col>
    </el-row>
  </el-row>
</template>


<script>
import BreadCrumbs from "../../components/BreadCrumbs"; //面包屑
import Shelf from "../../components/Shelf"; //上架商品组件
export default {
  name: "ShelfShop",
  components: {
    BreadCrumbs,
    Shelf
  },
  data() {
    return {
      HierarchicalMenu: { first: "商品管理", second: "上架商品" } //父组件的数据,面包屑
    };
  },
  methods: {
    submitForm() {
      let flag = this.$refs["ShelfChild"].validateForm(); //调用子组件的验证表单方法
      if (flag) {
        const form = this.$refs["ShelfChild"].form; //子组件的表单数据
        console.log("校验成功,form表单为", form);
      } else {
        this.$refs["ShelfChild"].form;
        console.log("表单不完整");
      }
    }
  }
};
</script>

<style >
.el-row {
  margin-bottom: 20px;
}
</style>
