<template>
  <el-row>
    <el-row class="mb-20">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>上架商品</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="16">
        <el-form :model="form" :rules="rules" ref="form" label-width="80px">
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="上传图片">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :limit="4"
              :on-exceed="overLoad"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </el-form-item>
          <el-form-item label="商品价格" prop="price">
            <el-input v-model.number="form.price"></el-input>
          </el-form-item>
          <el-form-item label="商品描述">
            <el-input rows="6" type="textarea" v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="商品分类" prop="classification">
            <el-select v-model="form.classification" placeholder="请选择商品分类">
              <el-option label="日用" value="shanghai"></el-option>
              <el-option label="零食" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(form)">立即上架</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-row>
</template>


<script>
export default {
  data() {
    return {
      form: {
        name: "",
        price: "",
        description: "",
        classification: ""
      },
      //验证
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        price: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
          { type: "number", message: "必须价格为数字值" }
        ],
        classification: [
          { required: true, message: "请选择商品类型", trigger: "change" }
        ]
      },
      //上传
      dialogImageUrl: "",
      dialogVisible: false
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
    },
    //上传方法
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log("file", file);
    },
    //超出上传文件个数
    overLoad(file) {
      console.log("超出最大上传个数了");
    }
  }
};
</script>

<style >
.mb-20 {
  margin-bottom: 20px;
}
</style>
