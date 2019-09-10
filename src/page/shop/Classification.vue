<template>
  <el-row>
    <el-row>
      <BreadCrumbs :message="HierarchicalMenu"></BreadCrumbs>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="16">
        <el-form :model="form" :rules="rules" ref="form" label-width="80px">
          <el-form-item label="分类名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品描述">
            <el-input rows="6" type="textarea" v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(form)">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-row>
</template>


<script>
import BreadCrumbs from "../../components/BreadCrumbs"; //面包屑
export default {
  name: "Classification",
  components: {
    BreadCrumbs
  },
  data() {
    return {
      HierarchicalMenu: { first: "商品管理", second: "设置分类" }, //父组件的数据,面包屑
      form: {
        name: "",
        description: ""
      },
      //验证
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit(form) {
      debugger;
      this.$refs["form"].validate(valid => {
        if (valid) {
          console.log("name", form.name);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style >
.el-row {
  margin-bottom: 20px;
}
</style>
