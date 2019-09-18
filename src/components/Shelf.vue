<template>
  <el-row>
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
              <el-option
                v-for="item in classificationShop"
                :key="item.id"
                :label="item.classifyName"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否上架" prop="shelf">
            <el-radio-group v-model="form.shelf">
              <el-radio :label="0">上架</el-radio>
              <el-radio :label="1">下架</el-radio>
            </el-radio-group>
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
      classificationShop: [],
      form: {
        name: "",
        price: "",
        description: "",
        classification: "",
        shelf: 0
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
        ],
        shelf: [
          { required: true, message: "请选择是否上架", trigger: "change" }
        ]
      },
      //上传
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  mounted() {
    this.getType(); //获取商品分类
  },
  methods: {
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
    },
    //校验表单方法
    validateForm() {
      let flag = null;
      this.$refs["form"].validate(valid => {
        if (valid) {
          flag = true;
          console.log("校验通过");
        } else {
          flag = false;
          console.log("请将表单填写完整");
        }
      });
      return flag;
    },
    // 获取分类
    getType() {
      this.$axios.get("/api/goodstype?Sql_flag=select").then(res => {
        console.log("获取分类", res.data.data);
        if (res.status === 200) {
          this.classificationShop = res.data.data;
          console.log("获取分类成功", res.data.data);
        } else {
          this.$message.error("获取分类信息失败");
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
